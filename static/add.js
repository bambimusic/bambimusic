function newElement(elementName, className){
  element = document.createElement(elementName);
  element.className = className;
  return element;
}
idIncrement = 1;

window.onload = function() {
  $('#memberButton').click(function(){
    var membFld = newElement("div", "memberField" +idIncrement);
    var membDiv = newElement("div", "col-sm-9");
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
  });

  $('#removeMemberButton').click(function(){
    $( ".memberField" +(idIncrement-1) ).remove();
    if (idIncrement>1) {idIncrement--;}
  });

}
