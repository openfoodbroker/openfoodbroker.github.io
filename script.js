// DIRTY Responsive pricing table JS

$(window).on('load', function() {

  var datasource;
  fetch("./data.json")
  .then(response => response.json())
  .then(json =>   updateTable("vendor-matrix", json));

function checkmark(){return '<span class="tick">&#10004;</span>'}

function decorate(item){
  if (item =="1") {return checkmark()}
  return item
}

function updateTable(tableId, jsonData){

  // console.log("foop");
  var tableHTML = "";

  for (var eachItem in jsonData) {

    var dataObj = jsonData[eachItem];
    if(dataObj.length==1){

        tableHTML += '<tr><td class="sep" colspan="5">'+ dataObj[0] + "</td></tr>";
    }
    else{

    tableHTML += "<tr>";
    for (var eachValue in dataObj){
      item = dataObj[eachValue]
      item = decorate(item)
      tableHTML += '<td >' + item + "</td>";
    }
    tableHTML += "</tr>";


  }}
  // console.log(tableHTML)
  tableHTML ="<table><tbody>" + tableHTML + "</tbody></table>"
  document.getElementById(tableId).innerHTML = tableHTML;
}

$( "ul" ).on( "click", "li", function() {
  var pos = $(this).index()+2;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child('+pos+')').css('display','table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 640px)');

  // Add a listen event
  mediaQuery.addListener(doSomething);

  // Function to do something with the media query
  function doSomething(mediaQuery) {
    if (mediaQuery.matches) {
      $('.sep').attr('colspan',5);
    } else {
      $('.sep').attr('colspan',2);
    }
  }

  // On load
  doSomething(mediaQuery);

  });
