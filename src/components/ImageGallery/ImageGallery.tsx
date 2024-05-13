
import { IImage } from "../../type";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
import { FC } from 'react';

interface ImageGalleryProps {
  images: IImage[];
  image: IImage;
  onClick: (image: IImage) => void;
  // onClick: (event: MouseEvent<HTMLImageElement>) => void

}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClick }) => {
  
  return (    
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.item} key={image.id}>
          {/* Передаємо зображення у компонент ImageCard */}
          <ImageCard small={image.urls.small}
            regular={image.urls.regular}
            alt={image.alt_description || ''}
            onClick={() => onClick(image.urls.regular)}/>
        </li>
      ))}
    </ul>);
};

export default ImageGallery