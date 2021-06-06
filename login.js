function addUser(){
    var username = document.getElementById("input").value;
    localStorage.setItem("Username", username);
    window.location = "kwitter.html";
}