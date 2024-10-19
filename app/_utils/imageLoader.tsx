'use client'

interface ImageLoaderProps {
  src: any;
  width: any;
  quality?: number | undefined;
}

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/${src}`;
}