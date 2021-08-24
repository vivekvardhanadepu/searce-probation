const { google } = require("googleapis");
const keys = require("./api_key.json");

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);
client.authorize();
console.log(client);
