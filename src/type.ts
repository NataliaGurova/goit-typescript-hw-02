
export interface Image {
  id: string;
  alt_description?: string;
  urls: {
    regular: string;
    small: string;
  }
}


// export interface IImage {
//   id: string;
//   urls: {
//     regular: string;
//     small: string;
//   };
//   alt_description: string;
//   likes: number;
//   user: {
//     name: string;
//   };
// }