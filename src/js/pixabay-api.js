import axios from 'axios';

export async function getImagesByQuery(query, page, perPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '52236687-26797aae28fcaf2822f6b1bf4';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: perPage,
      safesearch: true,
    },
  });
  return response.data;
}
