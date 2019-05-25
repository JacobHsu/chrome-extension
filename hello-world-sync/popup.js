  (function(){
    var output = document.getElementById('output');
    var input = document.getElementById('myValue');
    var form = document.querySelector('form');
    var logarea = document.querySelector('textarea');

    function log(str) {
      logarea.value=str+"\n"+logarea.value;
    }


    const clientData =  'localStorage:' + localStorage.getItem("questions");
    $('#clientData').append(clientData);


    form.addEventListener('submit', function(ev) {
      var newValue=input.value;
      chrome.storage.sync.set({"myValue": newValue}, function() {
        log("setting myValue to "+newValue);

        var item = '<p class="text-info">'+newValue+'</p>';
        $('#historyList').append(item);

        postData();
      
      });
      ev.preventDefault();
    });
  
    function postData() {
      var url = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean';
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(loadedQuestions => {
          console.log('api res:',loadedQuestions.results);
          questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
              question: loadedQuestion.question,
              answer: loadedQuestion.correct_answer
            }
            console.log('format res:',formattedQuestion)
            localStorage.setItem("questions", JSON.stringify(formattedQuestion));
            const questions = JSON.parse(localStorage.getItem("questions")) || [];

            let localStorageData = '<p class="text-danger">api:'+questions.question+'</p>';
            $('#questions').append(localStorageData);
          });

        })
        .catch(err => {
          console.error(err);
        });
    }

    function valueChanged(newValue) {
      output.innerText = newValue;
      output.className="changed";
      window.setTimeout(function() {output.className="";}, 200);
      log("value myValue changed to "+newValue);
    }
  
    // For debugging purposes:
    function debugChanges(changes, namespace) {
      for (key in changes) {
        console.log('Storage change: key='+key+' value='+JSON.stringify(changes[key]));
      }
    }  
  
    chrome.storage.onChanged.addListener(function(changes, namespace) {
      if (changes["myValue"]) {
        valueChanged(changes["myValue"].newValue);
      }
      debugChanges(changes, namespace);
    });
  
    chrome.storage.sync.get("myValue", function(val) {valueChanged(val.myValue)});
  
  })();