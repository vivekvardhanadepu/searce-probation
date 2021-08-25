// const { gapi } = require("gapi");
const g = require("googleapis");
// const { charts } = require("google-charts");
const keys = require("./api_key.json");

const client = new g.google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);
// client.authorize((err, tokens) => {
//   // var spreadsheetId = "1lOSs2v92YJ6VVsAsK1MwhHRHOsBOtO8C2RoKS5Zi0xY";
//   // var tqUrl =
//   //   "https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/gviz/tq?";
//   // "access_token=" + encodeURIComponent(tokens.access_token);
//   // console.log(fetch(tqUrl));

//   // var query = new charts.visualization.Query();
//   // // query.setQuery("select A, B group by A");
//   // console.log(query.send());
//   console.log("auth success");
// });
var spreadsheetId = "1lOSs2v92YJ6VVsAsK1MwhHRHOsBOtO8C2RoKS5Zi0xY";
var tqUrl =
  "https://docs.google.com/spreadsheets/d/" +
  spreadsheetId +
  "/gviz/tq?gid=0&tq=select%20A%2C%20count(B)%20group%20by%20A";
// "access_token=" + encodeURIComponent(tokens.access_token);
client.request({ url: tqUrl }).then((response) => {
  console.log(response.config.headers.Authorization);
});
// console.log(res);
// console.log(client);
// NOTE: You must replace the client id on the following line.
// const key = require("./OAuth_key.json");
// var clientId = key.client_id;
// var scopes = "https://www.googleapis.com/auth/spreadsheets";

// function handleAuthResult(authResult) {
//   if (authResult && !authResult.error) {
//     makeApiCall();
//   } else {
//     console.log("error");
//   }
// }

// function handleAuthClick(event) {
//   gapi.auth.authorize(
//     { client_id: clientId, scope: scopes, immediate: false },
//     handleAuthResult
//   );
//   return false;
// }

// function makeApiCall() {
//   // Note: The below spreadsheet is "Public on the web" and will work
//   // with or without an OAuth token.  For a better test, replace this
//   // URL with a private spreadsheet.
//   console.log("success");
//   return;
//   var tqUrl =
//     "https://docs.google.com/spreadsheets" +
//     "/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq" +
//     "?tqx=responseHandler:handleTqResponse" +
//     "&access_token=" +
//     encodeURIComponent(gapi.auth.getToken().access_token);

//   document.write(
//     '<script src="' + tqUrl + '" type="text/javascript"></script>'
//   );
// }

// function handleTqResponse(resp) {
//   document.write(JSON.stringify(resp));
// }

// gapi.auth.authorize(
//   { client_id: clientId, scope: scopes, immediate: true },
//   handleAuthResult
// );
