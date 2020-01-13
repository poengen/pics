import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1462f2ea998178293634946327dce9259884474c425677218571c524166485b6',
  },
});
