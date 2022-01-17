window.onload = populateSelect();


function populateSelect() {
  var xhr = new XMLHttpRequest(),
            method = 'GET',
            overrideMimeType = 'application/json',
            url = 'https://frontend-take-home.fetchrewards.com/form';  //  URL

      xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // PARSE  DATA.
            var states = JSON.parse(xhr.responseText);
            var ele = document.getElementById('sel');
              for (var i = 0; i < states.length; i++) {
                ele.innerHTML = ele.innerHTML +
                '<option value="' + states[i].ID + '">' + states[i].Name + '</option>';
                }
            }
        };
        xhr.open(method, url, true);
        xhr.send();
}
function show(ele) {
      // Get the selected value from <select> element and show it.
      var msg = document.getElementById('msg');
      msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
          'ID: <b>' + ele.value + '</b>';
  }
