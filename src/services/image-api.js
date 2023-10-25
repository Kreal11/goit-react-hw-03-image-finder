import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '39794314-b7170df023ca4db44fdda06f6';

export const fetchImages = async params => {
  const { data } = await axios.get('', {
    params: {
      ...params,
      key: key,
    },
  });
  return data;
};
