function newElement(elementName, className){
  element = document.createElement(elementName);
  element.className = className;
  return element;
}
memberIdIncrement = 1;
albumIdIncrement = 1;

window.onload = function() {
  $('#memberButton').click(function(){
    var membFld = newElement("div", "memberField" +memberIdIncrement);
    var membDiv = newElement("div", "col-sm-7");
    var instrDiv = newElement("div", "col-sm-5");
    var membInput = newElement("input", "form-control memberField");
    var br = document.createElement("br");

    membInput.type = "text";
    membInput.name = "member" + memberIdIncrement;
    membInput.id = "inputMembers" + memberIdIncrement;
    membInput.placeholder = "Member";
    var instrInput = newElement("input", "form-control instrumentField");
    instrInput.type = "text";
    instrInput.name = "instrument" +memberIdIncrement;
    instrInput.id = "inputMembersInstrument" + memberIdIncrement;
    instrInput.placeholder = "Instrument";

    membFld.appendChild(membDiv);
    membFld.appendChild(instrDiv);
    membDiv.appendChild(membInput);
    membDiv.appendChild(br);
    instrDiv.appendChild(instrInput);

    var div = document.getElementById( "memberDiv");
    div.appendChild(membFld);

    memberIdIncrement++;
  });

  $('#removeMemberButton').click(function(){
    if (memberIdIncrement>1) {
        $( ".memberField" +(memberIdIncrement-1) ).remove();
        memberIdIncrement--;
    }
  });

  $('#albumButton').click(function(){
    var albumFld = newElement("div", "albumField" +albumIdIncrement);
    var albumDiv = newElement("div", "col-sm-7");
    var yearDiv = newElement("div", "col-sm-5");
    var albumInput = newElement("input", "form-control albumNameField");
    var br = document.createElement("br");
    albumInput.type = "text";
    albumInput.name = "album" + albumIdIncrement;
    albumInput.id = "inputAlbum" + albumIdIncrement;
    albumInput.placeholder = "Album name";
    var yearInput = newElement("input", "form-control albumYearField");
    yearInput.type = "text";
    yearInput.name = "year" + albumIdIncrement;
    yearInput.id = "inputYear" + albumIdIncrement;
    yearInput.placeholder = "Publish year";

    albumFld.appendChild(albumDiv);
    albumFld.appendChild(yearDiv);
    albumDiv.appendChild(albumInput);
    albumDiv.appendChild(br);
    yearDiv.appendChild(yearInput);

    var div = document.getElementById( "albumDiv");
    div.appendChild(albumFld);

    albumIdIncrement++;
  });

  $('#removeAlbumButton').click(function(){

    if(albumIdIncrement > 1) {
      $( ".albumField" +(albumIdIncrement-1) ).remove();
      albumIdIncrement--;
    }

  });

  //$( '#inputSlug' ).change(function() {
  //  var slug = $ ( '#inputSlug').val();
  //  slug = slug.toLowerCase();
  //  alert( slug.includes("testi") );
  //});

  $('#slugButton').click(function(){
    var input = document.getElementById( "inputSlug");
    var slug = $ ( '#inputSlug').val();
    slug = slug.toLowerCase();
    slug = slug.replace(/[^a-zA-Z0-9]+/g,'-');
    input.value = slug;

    if(input.value.length != 0) {
      document.getElementById("submitButton").disabled = false;
    }
    
  });

  $("#inputSlug").keypress(function() {
    document.getElementById("submitButton").disabled = true;
});

}
