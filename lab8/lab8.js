
function getDataFromForm() {
  var fname = document.getElementsByName('fname')[0].value;
  var lname = document.getElementsByName('lname')[0].value;

  runAjax(fname, lname);
}

function runAjax(fname, lname) {
  if (fname.length === 0 || lname.length === 0) {
      document.getElementById('responseString').innerHTML = '';
      return;
  } else {
      const xhr = new XMLHttpRequest();
      
      xhr.onload = function() {
          document.getElementById('responseString').innerHTML = this.responseText;
      };

      // Directly append parameters to the URL
      xhr.open('GET', '/lab8/ajax.php?fname=' + fname + '&lname=' + lname);
      xhr.send();
  }
}