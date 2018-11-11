$(document).ready(function(){

  console.log("Document is ready!");

  // when any 'p' tag is clicked, this function runs
  $("p").click(function(){
    console.log("p tag was pressed");
    $("img").hide(); // hide all 'img' tags
  });

  // when the tag with the id 'call-api' is clicked, this function runs
  $("#call-api").click(function(){
    console.log("call-api button was pressed");

    // call the API
    var url = ""; // add your API's URL here!
    $.get(url, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        console.log(data);
        // do something cool with the data here!!!
    });

  });

});
