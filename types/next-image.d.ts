declare module 'next/image' {
    import * as React from 'react';
  
    export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
      src: string | { src: string };
      width?: number | string;
      height?: number | string;
      layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
      loader?: (props: { src: string; width: number; quality?: number }) => string;
      quality?: number | string;
      priority?: boolean;
      loading?: 'eager' | 'lazy';
      placeholder?: 'blur' | 'empty';
      blurDataURL?: string;
      unoptimized?: boolean;
    }
  
    const Image: React.FC<ImageProps>;
    export default Image;
  }