import React from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

export default function OptimizedImage({
  src,
  webpSrc,
  alt,
  className = '',
  style = {},
  onClick,
  title
}: OptimizedImageProps) {
  // Если есть WebP версия, используем picture элемент
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={className}
          style={style}
          onClick={onClick}
          title={title}
          loading="lazy"
        />
      </picture>
    );
  }

  // Если WebP нет, используем обычный img
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      title={title}
      loading="lazy"
    />
  );
}


