// Could either use createMockFromModule or 
// export default {
  // get: jest.fn().mockResolvedValue(...)
const axios: any = jest.createMockFromModule("axios");

const get = () => ({
  data: [
    {
      createdAt: 1657561482480,
      username: "mock username",
      id: "25121f00-0141-11ed-835a-bbf28267a25d",
      updatedAt: 1657561482480,
    },
  ],
});

axios.get = get;

const post = () => ({
  data: {
    createdAt: 1657561482442,
    username: "posted username",
    id: "25121f00-0141-11ed-835a-bbf2826342d2",
    updatedAt: 1657561482667,
  },
});

axios.post = post;

const myDelete = () => ({
  data: {
    createdAt: 1657561482442,
    username: "deleted username",
    id: "25121f00-0141-11ed-835a-bbf2826342d2",
    updatedAt: 1657561482667,
  },
});

axios.delete = myDelete;

export default axios;
