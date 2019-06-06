require("dotenv");

const {
  // NODE_ENV = 'test',
  // PORT = 4000,

  // API_URI = "http://localhost:4000/"
  API_URI = "https://staging-unsullied-api.herokuapp.com/",
} = process.env;

export const Config = {
  API_URI,
};

export default Config;
