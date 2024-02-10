import axios from 'axios';

const API_KEY = 'ZRjaoBiorU5Ti5slFrRb5FFbTfF1378SFylgNETheGw';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 10,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  const normalizeData = data.results.map(({ alt_description, id, urls }) => ({
    alt: alt_description,
    id,
    small: urls.small,
    regular: urls.regular,
  }));

  return { totalPhotos: data.total, photos: normalizeData };
};
