import { LitElement, TemplateResult } from 'lit';
import { state } from 'lit/decorators/state.js';

// Some TypeScript bloat to properly support typed mixins.
type Constructor<T = {}> = new (...args: any[]) => T;

export type Route = {
  key: string;
  name: string;
  import: () => Promise<any>;
  render: () => TemplateResult;
};

export declare class RouterMixinInterface {
  static properties: Object;

  protected routes: Route[];

  navigateTo(key: string): Promise<void>;

  renderRoute(): TemplateResult;
}

/**
 * Takes a class, and extends it with additional functionality
 * to support (soft, non-URL) routing with lazy-loading of
 * ES-Modules so only the necessary pages are loaded.
 */
export const RouterMixin = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class RouterMixinClass extends superClass {
    /**
     * Keeps track of the currently activated route.
     */
    @state()
    activeRoute!: Route;

    /**
     * Override in implementation class to define the
     * routes and their import path for lazy-loading.
     */
    protected routes: Route[] = [];

    connectedCallback() {
      super.connectedCallback();
      // Take the first route, load the module & render
      this.navigateTo(this.routes[0].key);
    }

    /**
     * Call with a route key to navigate to that route, and lazy-load
     * the module if it hasn't been loaded yet.
     *
     * In a real scenario, this function should be extended to support
     * 404-redirection, URL-scheme matching & storing the activated
     * route in the URL (and history).
     */
    async navigateTo(key: string) {
      const route = this.routes.find((f: Route) => f.key === key);
      if (route) {
        await route.import(); // Loads the ES Module asynchronously!
        this.activeRoute = route;
      }
    }

    /**
     * Call in the render() function of the implementation
     * to render the currently activated route.
     */
    renderRoute(): TemplateResult {
      return this.activeRoute?.render();
    }
  }

  return RouterMixinClass;
};
