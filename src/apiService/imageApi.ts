import axios from 'axios';
import { IImage } from '../type';

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/search/photos?page=1&query=office

const API_KEY = "CiYbYfeKy1jv8indJhhf6vm3xolSsoXblOTrxmzC1Go";
axios.defaults.baseURL = 'https://api.unsplash.com/';
// axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    client_id: API_KEY,
    orientation: 'landscape',
    per_page: 12,
};

interface ApiResult {
  results: IImage[];
  total: number
  total_pages: number
  // Описати інші властивості результату пошуку
}

export const fetchPhotos = async (query: string, page: number): Promise<ApiResult> => {

const { data } = await axios.get<ApiResult>(`search/photos?page=${page}&query=${query}`);
    return data;
};

