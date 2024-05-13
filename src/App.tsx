
import { useEffect, useRef, useState } from "react";
import { fetchPhotos } from './apiService/imageApi';
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn"
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import { IImage } from "./type";


const App = () => {
  // 1. Оголошуємо стан
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<IImage[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>(''); // Додайте стан для вибраного зображення
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const scrolling = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchPhotos(query, page)
      .then(({ results, total_pages }) => {

        console.log(results);
        
        setImages(prev => [...prev,...results])
        setTotalPages(total_pages)
        setLoading(false)

      })
      .catch(error => setError(error.message))
    
  }, [query, page]);

  const handleSubmitStart = (query: string): void => {
    setPage(1)
    setImages([])
    setTotalPages(0)
    setError(false)
    setQuery(query);
    console.log(query);    
  };
    
  const handleLoadMore = (): void => {
    setLoading(true)
    setPage(page + 1);    
  }

  function closeModal(): void {
    setIsOpen(false);
    setSelectedImage('');
  }
  
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  }

  const block = (modalIsOpen: boolean) => {
  const body = document.querySelector('body');
  if (!body) return;

  if (modalIsOpen) {
    (body as HTMLBodyElement).style.overflow = 'hidden';
  } else {
    (body as HTMLBodyElement).style.overflow = 'auto';
  }
}

  
  useEffect(() => {
  if (scrolling.current) {
    scrolling.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [images]);


  return (
    <div>
      <SearchBar onSearch={handleSubmitStart} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} onClickImage={handleImageClick} />
      {totalPages > 0 && images.length < totalPages && <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>}
      <ImageModal modalImage={selectedImage}
      isOpen={modalIsOpen} 
        onRequestClose={closeModal} />
      <Toaster />
      <div ref={scrolling} />
    </div>
  );
}

export default App
