
function getDay() {　//Google Mapを表示させる事に関する処理
  var sheet = SpreadsheetApp.getActiveSheet();
  var lRow = sheet.getLastRow(); //最終行を取得する
  for( var i = 1; i <4; i++){
   var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
      if( i == 1){
         var name = getVal;
      }else if( i == 2){
         var lat = getVal;
      }else if( i == 3){
         var lng = getVal;
      }    
    }
    Logger.log(lat);
    Logger.log(lng)
  //  initMap(lat,lng);
}

function final(){ //最終行を取得する関数final  
  var sheet = SpreadsheetApp.getActiveSheet();
  var lRow = sheet.getLastRow(); //最終行を取得する
  for( var i = 1; i <4; i++){
    var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
    if( i == 1){
     var ame = getVal;
    }else if( i == 2){
    var lat = getVal;
    }else if( i == 3){
    var lng = getVal;
    }
  } 
  Logger.log(lat);
  Logger.log(lng);
}



function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  Logger.log(sheet.getDataRange().getValues());
  
  var range = sheet.getRange(1, 1);
  Logger.log(range.getValue());
  
  var range1 = sheet.getRange(1, 2);
   Logger.log(range1.getValue());
  
  var range2 = sheet.getRange(1, 3);
  Logger.log(range2.getValue());

  var Last = sheet.getLastRow();
  //Browser.msgBox(Last);
  
  var last_value = sheet.getLastColumn();
  Logger.log(last_value);
}




function final(){ //最終行を取得する関数final
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var lRow = sheet.getLastRow(); //最終行を取得する
  for( var i = 1; i <4; i++){
    var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
    if( i == 1){
     var ame = getVal;
    }else if( i == 2){
    var at = getVal;
    }else if( i == 3){
    var ng = getVal;
    }
  } 
  Logger.log(at);
  Logger.log(ng);
}



//function final(){ //最終行を指定して値を取得する

//var sheet = SpreadsheetApp.getActiveSheet();
//var lRow = sheet.getLastRow(); //最終行を取得する

//for( var i = 1; i <4; i++){
//var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
//Logger.log(getVal);
//}

//2行目から最終行までの1列目の各地名を出力可能
//for( var u = 2; u <= lRow; u++){
//var getValue = sheet.getRange(u,1).getValue();
//Logger.log(getValue);
// }
//}

function initMap() {　//Google Mapを表示させる事に関する処理
  var sheet = SpreadsheetApp.getActiveSheet();
  var lRow = sheet.getLastRow(); //最終行を取得する
  for( var i = 1; i <4; i++){
   var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
      if( i == 1){
         var name = getVal;
      }else if( i == 2){
         var lat = getVal;
      }else if( i == 3){
         var lng = getVal;
      }    
    } 
  Logger.log(lat);
  Logger.log(lng);
}

//for (var i = 0; i < markerData.length; i++) { //Mapにマーカを表示する処理
 // markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
 // point1[i] = new google.maps.Marker({ // マーカーの追加
    //position: markerLatLng, // マーカーを立てる位置を指定
  //  map: map // マーカーを立てる地図を指定
//  });
 // infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
   // content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
//  });
//}

//point1[0].setOptions({// TAM 東京のマーカーのオプション設定
 // icon: {
   // url: markerData[0]['icon']// マーカーの画像を変更
 // }
//});

function initMap() {　//Google Mapを表示させる事に関する処理
  var sheet = SpreadsheetApp.getActiveSheet();
  var lRow = sheet.getLastRow(); //最終行を取得する
  var lat;
  var lng;
  for( var i = 1; i <4; i++){
    var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
    if( i == 1){
      var name = getVal;
    }else if( i == 2){
      lat = getVal;
    }else if( i == 3){
      lng = getVal;
    }    
  } 
  Logger.log(lat);
  Logger.log(lng); 
  function final(){ //最終行を取得する関数final
  }
} 

function prot(){
var sheet = SpreadsheetApp.getActiveSheet();
  var lRow = sheet.getLastRow(); //最終行を取得する
  for( var i = 1; i <4; i++){
   var getVal = sheet.getRange(lRow,i).getValue(); //IRowには最終行を示す値を取得しており、列部分をfor文で回せば全ての最終行の値を取得する事が可能である
      if( i == 1){
         var name = getVal;
      }else if( i == 2){
         var lt = getVal;
      }else if( i == 3){
         var lg = getVal;
      }    
   }
  Logger.log(lt);
  Logger.log(lg);
}






