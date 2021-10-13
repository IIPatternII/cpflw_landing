import { ImageComponentProps } from '../types';

export const ImageComponent = ({
  src,
  width,
  height,
  rounded,
}: ImageComponentProps) => {
  if (src.endsWith('.svg')) {
    return (
      <img
        src={`/img/svg/${src}`}
        alt={src}
        width={width ?? 'none'}
        height={height}
        style={rounded ? { borderRadius: '50%' } : {}}
      />
    );
  } else if (src.endsWith('.png')) {
    return (
      <img
        src={`/img/png/${src}`}
        alt={src}
        width={width ?? 'none'}
        height={height}
        style={rounded ? { borderRadius: '50%' } : {}}
      />
    );
  } else {
    return (
      <img
        src={`/img/jpg/${src}`}
        alt={src}
        width={width ?? 'none'}
        height={height}
        style={rounded ? { borderRadius: '50%' } : {}}
      />
    );
  }
};
