const errorElement = document.getElementById("error");
const form = document.getElementById("form");
const email = document.getElementById("email");
let emails = [];


form.addEventListener("submit", function (e) {
    e.preventDefault();
  let messages = []; 
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) 
  messages.push("You have entered an invalid email address!");
  else emails.push(email.value);

  if (messages.length > 0) {
    errorElement.innerText = messages.join(",");
  }
  document.getElementById("form").reset(); //clear form
  //Display
  console.log("added", { emails });
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(emails, "\t", 2);
  //   saving to LocalStorage
  //    localStorage.setItem('MyMovieList',JSON.stringify(emails));
});
