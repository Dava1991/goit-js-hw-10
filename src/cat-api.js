import axios from 'axios';

const API_KEY =
  'live_GWb6wH1mfv0z0RmNdkHnDxRIQKZIuyEwv2W6rhxbclEoPTrLr7qZlvJaDeYyvT10';
axios.defaults.headers.common['x-api-key'] = apiKey;

export const fetchBreeds = () => {
  return fetch(`https://api.thecatapi.com/v1/breeds?${axios}`).then(
    response => {
      if (!response.ok) {
        throw response;
      }

      return response.json();
    }
  );
};

export const fetchCatByBreed = breedId => {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`
  ).then(response => {
    if (!response.ok) {
      throw response;
    }

    return response.json();
  });
};