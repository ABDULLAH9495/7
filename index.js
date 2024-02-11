document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
    let username = document.getElementById("username").value;
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (username.length>=6 && alphanumericRegex.test(username)) {
        alert("Success! Username Is Valid");
    }else{
        alert("Error! Username must be at least  characters long")
    }  })