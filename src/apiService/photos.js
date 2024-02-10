import axios from 'axios';

const API_KEY = 'ZRjaoBiorU5Ti5slFrRb5FFbTfF1378SFylgNETheGw';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
// axios.defaults.headers.common['Autorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 10,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  // const normalizeData = data.url.map(({ small, regular }) => ({
  //   small: small,
  //   regular: regular,
  // }));

  return { data };
};
