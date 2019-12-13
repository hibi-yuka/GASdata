function doGet(request) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}


function getData(){
 var sheet = SpreadsheetApp.getActiveSheet();
 return sheet.getRange(sheet.getLastRow(), 1, 1, 3).getValues()[0];
  //getRange(行番号, 列番号, 取得したい行の数, 取得したい列の数)＝行番号と列番号で起点を指定、その後取得したい行と列を指定する。今回は最終行の地名を起点にして、その1行、3列分を取得する。
}

function newData(){
  var sheet = SpreadsheetApp.getActiveSheet();
  return sheet.getRange(sheet.getLastRow()-1, 1, 1, 3).getValues()[0];
}
  
