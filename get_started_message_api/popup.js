'use strict';

document.addEventListener('DOMContentLoaded', function(dcle) {

  var dButtonContent = document.getElementById("button2");

  //點擊按鈕，向內容腳本發送訊息
  dButtonContent.addEventListener('click', function(e) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        console.log( tabs[0].id )
          chrome.tabs.sendMessage(tabs[0].id, { content: "你好，此訊息來自彈出視窗腳本" }, function(response) {
              console.log(response);
          });
      });
  });

});
