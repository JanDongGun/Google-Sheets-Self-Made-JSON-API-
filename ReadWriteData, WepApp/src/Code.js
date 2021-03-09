function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("customer");
  const data = ws.getRange("A1").getDataRegion().getValues();
  const header = data.shift();

  const jsonArray = data.map((r) => {
    let obj = {};
    header.forEach((h, i) => {
      obj[h] = r[i];
    });
    return obj;
  });

  const response = [{ status: 200, data: jsonArray }];

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doPost(e) {
  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Sheet1");
  ws.appendRow([bodyJSON.name]);
}
