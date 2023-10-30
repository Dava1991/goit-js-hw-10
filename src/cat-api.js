import axios from 'axios';

const API_KEY =
  'live_GWb6wH1mfv0z0RmNdkHnDxRIQKZIuyEwv2W6rhxbclEoPTrLr7qZlvJaDeYyvT10';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = `${API_KEY}`;

export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}