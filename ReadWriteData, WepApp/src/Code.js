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
  return sendJSON_(response);
}

function doPost(e) {
  const type = e.parameter.type;
  const value = e.parameter.value;
  if (type === "delete") {
    deleteRow(value);
  }
  if (type === "edit") {
    const arr = value.split(":");
    replaceRow(arr);
  }

  let jsonResponse;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("customer");
  const headers = ws.getRange(1, 1, 1, ws.getLastColumn()).getValues()[0];
  const headersOriginalOrder = headers.slice();
  headersOriginalOrder.shift();
  // remove id columns header
  headers.shift();
  headers.sort();

  const body = e.postData.contents;
  const bodyJSON = JSON.parse(body);
  const headersPassed = Object.keys(bodyJSON).sort();

  if (!compareTwoArray_(headers, headersPassed)) {
    jsonResponse = { status: 500, message: "Invalid Arguments Passed" };
    return sendJSON_(jsonResponse);
  }

  const arrayOfData = headersOriginalOrder.map((h) => bodyJSON[h]);
  const aoaIDs = ws.getRange(2, 1, ws.getLastRow() - 1, 1).getValues();
  const newIdNumber = getMaxFromArrayOfArray_(aoaIDs) + 1;
  arrayOfData.unshift(newIdNumber);

  ws.appendRow(arrayOfData);
}

function replaceRow(value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const editSheet = ss.getSheetByName("Sheet1");
  const lastRowEdit = editSheet.getLastRow();
  for (let i = 2; i <= lastRowEdit; i++) {
    if (editSheet.getRange(i, 1).getValue() === value[0]) {
      editSheet.getRange("A" + i + ":C" + i).setValues([value]);
    }
  }
}

function deleteRow(value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const editSheet = ss.getSheetByName("Sheet1");
  const lastRowEdit = editSheet.getLastRow();
  for (let i = 2; i <= lastRowEdit; i++) {
    if (editSheet.getRange(i, 1).getValue() === value) {
      editSheet.deleteRow(i);
    }
  }
}

function compareTwoArray_(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) return false;
  }

  return true;
}

function sendJSON_(response) {
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function getMaxFromArrayOfArray_(aoa) {
  let maxID = 0;
  aoa.forEach((r) => {
    if (r[0] > maxID) {
      maxID = r[0];
    }
  });
  return maxID;
}
