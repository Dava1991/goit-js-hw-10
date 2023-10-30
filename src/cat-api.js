import axios from 'axios';

const API_KEY =
  'live_GWb6wH1mfv0z0RmNdkHnDxRIQKZIuyEwv2W6rhxbclEoPTrLr7qZlvJaDeYyvT10';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = `${API_KEY}`;

function fetchBreeds() {
  return axios.get('/breeds');
}

function fetchCatByBreed(breedId) {
  return axios.get('/images/search', {
    params: {
      limit: '5',
      breed_ids: `${breedId}`,
    },
  });
}
export { fetchBreeds, fetchCatByBreed };