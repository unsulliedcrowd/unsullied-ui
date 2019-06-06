import * as Package from '../package.json';

require("dotenv");

const {
  // NODE_ENV = 'test',
  // PORT = 4000,

  // API_URI = "http://localhost:4000/"
  API_URI = "https://staging-unsullied-api.herokuapp.com/",
  PUBLIC_URL = Package.homepage
} = process.env;

export const Config = {
  API_URI,
  PUBLIC_URL,
};

export default Config;
