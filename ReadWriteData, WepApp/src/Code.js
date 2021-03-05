function doGet() {
  const response = [{ status: "cool!" }];
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
