window.onload = function() {
  $('#memberButton').click(function(){
    var newInput = document.createElement("input");
    newInput.setAttribute('type', 'text');

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("form-group");
    document.body.insertBefore(newInput, currentDiv);
  });
}
