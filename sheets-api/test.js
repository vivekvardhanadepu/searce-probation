// To see the data that this visualization uses, browse to
// https://spreadsheets.google.com/ccc?key=tQW2XyL0iNBeq8m6zrFuMRw
//   var ssKey = "tQW2XyL0iNBeq8m6zrFuMRw";
//   var visualization;
// drawDynamicSelect() and handleSelectResponse() are used to draw the dynamic list of question ids
// const g = require("googleapis");
const keys = require("./api_key.json");
import { google as g } from "googleapis";
// function drawDynamicSelect() {
//   const client = new g.google.auth.JWT(
//     keys.client_email,
//     null,
//     keys.private_key,
//     ["https://www.googleapis.com/auth/spreadsheets"]
//   );
//   var spreadsheetId = "1lOSs2v92YJ6VVsAsK1MwhHRHOsBOtO8C2RoKS5Zi0xY";
//   var tqUrl =
//     "https://docs.google.com/spreadsheets/d/" +
//     spreadsheetId +
//     "/gviz/tq?gid=0";
//   var query = new google.visualization.Query(tqUrl);
//   query.setQuery("SELECT B, Count(C) GROUP BY B ");
//   query.send(handleSelectResponse, { auth: client });
// }
function handleSelectResponse(response) {
  if (response.isError()) {
    alert(
      "Error in query: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
    return;
  }
}
