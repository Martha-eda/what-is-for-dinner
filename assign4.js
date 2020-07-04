//martha edafiaga
//assignmnet 4
//3/23/2020
//cmpt304





function setCookie(cookiename,cookievalue,days) {
  var d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}
// this makes cookies
function getCookie(cookiename) 
{
  var name = cookiename + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// stores the cookie
function checkCookie() 
{
  var user=getCookie("username");
  if (user != "") {
    document.getElementById("third").innerHTML = "Hello " + user + ", what are we having for dinner?" ; 
    alert(" you are welcome for dinner " + user);
    show();
  } else {
      user = prompt("Please enter your name here:","");
      if (user != "" && user != null) {
       setCookie("username", user, 29);
       document.getElementById("third").innerHTML = "Hello " + user + ", what are we having for dinner?" ;
      }
    show();
  }
}

 //this shows the name number
function show()   
{
  var name = document.getElementById("name");
  name.style.visibility = 'visible';
  var side = document.getElementById("side");
  side.style.visibility = 'visible';
  var no = document.getElementById("no");
  no.style.visibility = 'visible';
}
//this shows the names 
function showname()     
{ 
  var pic = document.getElementById("pic");
  pic.style.visibility = 'visible';
  
  $(pic).fadeIn(2000, function () {
    $( "#dinner" ).fadeIn( 3000, function() {
      setTimeout(function(){
        showFastestPlayer();      
        alert('Game end, next time you will win.');
      }, 1000);
    });
  });
}
 //this does the guessing part. 
function guess(e) 
{
  var guessedDinner = $(e.currentTarget).attr('name');     
  var actualDinner = $('#dinner').attr('name');
  var numTries;

  if (guessedDinner == actualDinner) {
    alert(" You win good job");     
    show();
    showFastestPlayer();
  } else {
    alert("No way! Try again.");
    //numTries = $('#tries').val();
    numTries = parseInt($('#tries').val(), 10);
    numTries--;
    //this ends the game 
    if (numTries <= 0) {
      $('#tries').val(numTries);
      $('#tries').text(numTries);
      alert(' Game ends thanks.');   
      showFastestPlayer();
    } else {
      $('#tries').val(numTries);
      $('#tries').text(numTries);
    }
  }
}