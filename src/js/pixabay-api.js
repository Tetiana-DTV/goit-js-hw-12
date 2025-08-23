import axios from 'axios';

const API_KEY = '51708418-3aac8028d9e6ae6b223e03bd7';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;




export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      
      per_page: PER_PAGE,
      page,
    },
  });
  return response.data;
  } catch (error) {
    console.error("Pixabay API error:", error);
    throw error;
  }
};

