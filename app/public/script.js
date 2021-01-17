$("#form").on("submit", function(event) {
    event.preventDefault();
    var email = $('#email').val();
    if(IsEmail(email)==false){
      $('#error').html("You have entered an invalid email address!");
      $("#email").val("");
  
      return false;
   
 }else{

   var newMember = {
   email:  $("#email").val().trim()

   }
   
  
 }
    // Make a new object
  
    console.log(newMember);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newMember)
      // On success, run the following code
      .then(function() {
       
       
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#email").val("");
  
  });
  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
  }