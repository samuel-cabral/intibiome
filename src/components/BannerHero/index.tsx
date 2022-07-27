import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type BannerHeroProps = {
  responsive?: boolean;
  img?: string;
  imagePaths?: {
    large: string;
    small: string;
  };
};

export function BannerHero({
  responsive,
  imagePaths = { large: '', small: '' },
  img = '',
}: BannerHeroProps) {
  const [innerWidth, setInnerWidth] = useState(0);
  const [imagePath, setImagePath] = useState('');

  const resize = () => {
    setInnerWidth(window.innerWidth);
  };

  const getImage = (width: number) => {
    if (responsive) {
      if (width <= 980) return imagePaths.small;
      return imagePaths.large;
    }
    return img;
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    setImagePath(getImage(innerWidth));
  }, [innerWidth]);

  return (
    <div className={styles.bannerContainer}>
      <img src={imagePath} alt="Banner showing the products" />
    </div>
  );
}
