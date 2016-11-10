function newElement(elementName, className){
  element = document.createElement(elementName);
  element.className = className;
  return element;
}
idIncrement = 1;

window.onload = function() {
  $('#memberButton').click(function(){
    var membFld = newElement("div", "memberField");
    var membDiv = newElement("div", "col-sm-7");
    var instrDiv = newElement("div", "col-sm-3");
    var membInput = newElement("input", "form-control memberField");
    membInput.id = "inputMembers" + idIncrement;
    membInput.placeholder = "Member";
    var instrInput = newElement("input", "form-control instrumentField");
    instrInput.id = "inputMembersInstrument" + idIncrement;
    instrInput.placeholder = "Instrument";

    membFld.appendChild(membDiv);
    membFld.appendChild(instrDiv);
    membDiv.appendChild(membInput);
    instrDiv.appendChild(instrInput);

    var div = document.getElementById( "memberDiv");
    div.appendChild(membFld);

    idIncrement++;
    //var field = $( "#memberField" ).clone();
    //var id = "memberField" + idIncrement;
    //field.id = id;
    //idIncrement++;
    //field.appendTo( ".memberDiv" );


    //var newInput = document.createElement("input");
    //newInput.setAttribute('type', 'text');

    // add the newly created element and its content into the DOM
    //var currentDiv = document.getElementById("form-group");
    //document.body.insertBefore(newInput, currentDiv);
  });
}
