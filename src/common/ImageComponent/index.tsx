import { ImageComponentProps } from "../types";

export const ImageComponent = ({ src, width, height }: ImageComponentProps) => (
  src.endsWith('.svg') ?
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
  :
  <img src={`/img/png/${src}`} alt={src} width={width} height={height} />
);
