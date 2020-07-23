function doGet() {
  const items = new Items();
  items.read();
  return HtmlService.createHtmlOutputFromFile('index');
}

class Items {
  read() {
    const fileId = '1HSCQjyH0pTjz_PmDkY6ymsiS2qGAQW46W43x_Eqrues';
    const ss = SpreadsheetApp.openById(fileId);
    const sheetName = 'item_list';
    const sheet = ss.getSheetByName(sheetName);
    const values = sheet.getDataRange().getValues();
    console.log(values);
  }
}