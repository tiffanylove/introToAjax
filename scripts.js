console.log('sourced');

$(document).ready(onReady);

function onReady(){

$.ajax({
url: 'http://www.omdbapi.com/?t=The+Lion+King',
success: function(response){

  $('#movies').append("<div class= 'title' >" + response.Title +  "</div>");
  $('#movies').append("<div class= 'title' >" + response.Year +  "</div>");
  // $('#movies').append("<div class= 'title' >" + response.Poster +  "</div>");
  $('#movies').append("<div class = 'poster'><img src = 'http://kublia.lionking.org/pics/tlkcomic.jpg'></div>");
    }

  }); // end of ajax

} //end of onReady function
