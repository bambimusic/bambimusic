window.onload = function() {
  idIncrement = 0;
  $('#memberButton').click(function(){
    var field = $( "#memberField" ).clone();
    var id = "memberField" + idIncrement;
    field.id = id;
    idIncrement++;
    field.appendTo( ".memberDiv" );
    //var newInput = document.createElement("input");
    //newInput.setAttribute('type', 'text');

    // add the newly created element and its content into the DOM
    //var currentDiv = document.getElementById("form-group");
    //document.body.insertBefore(newInput, currentDiv);
  });
}
