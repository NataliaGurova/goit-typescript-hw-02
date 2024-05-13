import css from "./ImageCard.module.css"
import { FC } from 'react';

interface ImageCardProps {
    small: string;
    alt: string;
    onClick: () => void;
}
const ImageCard: FC<ImageCardProps> = ({ small, alt, onClick }) => {
  
  return (
    <div className={css.item}>
      <img src={small} alt={alt} onClick={onClick} />
    </div>
  )
}

export default ImageCard