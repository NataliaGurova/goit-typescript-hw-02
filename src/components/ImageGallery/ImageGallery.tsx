
import { IImage } from "../../type";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
import { FC } from 'react';

interface ImageGalleryProps {
  images: IImage[];
  onClickImage: (image: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClickImage }) => {
  
  return (    
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          {/* Передаємо зображення у компонент ImageCard */}
          <ImageCard small={image.urls.small}
            regular={image.urls.regular}
            alt={image.alt_description || ''}
            onClick={() => onClickImage(image.urls.regular)}/>
        </li>
      ))}
    </ul>);
};

export default ImageGallery