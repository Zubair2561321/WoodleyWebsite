//ENV based Variables
const config = require("./config.json");
const APP_ENV = process.env.REACT_APP_ENV;
const envConfig = config[APP_ENV];

//exporting Variables
export const baseUrl = envConfig.REACT_APP_BASE_URL;
export const baseApikey = envConfig.API_BASE_KEY;
export const s3BaseUrl = envConfig.PIC_BASE_URL;
