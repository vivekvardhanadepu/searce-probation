const { google } = require("googleapis");
const keys = require("./api_key.json");

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

client.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("connected!");
  gsrun(client);
});

async function gsrun(cl) {
  const gsapi = google.sheets({ version: "v4", auth: cl });
  const opt = {
    spreadsheetId: "1lOSs2v92YJ6VVsAsK1MwhHRHOsBOtO8C2RoKS5Zi0xY",
    range: "Sheet1!A1:B3",
  };
  let data = await gsapi.spreadsheets.values.get(opt);
  let dataArray = data.data.values;
  console.log(data.data.values);
  dataArray = dataArray.map((r) => {
    while (r.length < 2) {
      r.push("");
    }
    return r;
  });
  console.log("after:", dataArray);
  // let newData = dataArray.map((row) => {
  //   row.push(row[0] + "-" + row[1]);
  //   return row;
  // });
  // console.log(newData);
  // //   console.log(newData);
  // opt.range = "Books!E4";
  // opt.valueInputOption = "USER_ENTERED";
  // opt.resource = { values: newData };
  // let res = await gsapi.spreadsheets.values.update(opt);
  // console.log(res);
}
