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
    var membDiv = newElement("div", "col-sm-9");
    var instrDiv = newElement("div", "col-sm-3");
    var membInput = newElement("input", "form-control memberField");
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
    instrDiv.appendChild(instrInput);

    var div = document.getElementById( "memberDiv");
    div.appendChild(membFld);

    memberIdIncrement++;
  });

  $('#removeMemberButton').click(function(){
    $( ".memberField" +(memberIdIncrement-1) ).remove();
    if (memberIdIncrement>1) {memberIdIncrement--;}
  });

  $('#albumButton').click(function(){
    var albumFld = newElement("div", "albumField" +albumIdIncrement);
    var albumDiv = newElement("div", "col-sm-9");
    var yearDiv = newElement("div", "col-sm-3");
    var albumInput = newElement("input", "form-control albumNameField");
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
    yearDiv.appendChild(yearInput);

    var div = document.getElementById( "albumDiv");
    div.appendChild(albumFld);

    albumIdIncrement++;
  });

  $('#removeAlbumButton').click(function(){
    $( ".albumField" +(albumIdIncrement-1) ).remove();
    if (albumIdIncrement>1) {albumIdIncrement--;}
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
  });

}
