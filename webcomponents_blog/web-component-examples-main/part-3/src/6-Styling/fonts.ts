import { css } from 'lit';
import { primary, secondary } from './colors.js';

export const fontFamily = css`'Comic Sans MS', serif`;

export const fontSizeH1 = css`40px`;

/**
 * Sets all the right styles for a page header, with the
 * right font, size, color and border.
 */
export const fontHeadingMixin = () => css`
  font-family: ${fontFamily};
  font-size: ${fontSizeH1};
  color: ${primary};
  border-bottom: 5px dotted ${secondary};
`;
