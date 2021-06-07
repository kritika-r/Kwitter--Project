var firebaseConfig = {
    apiKey: "AIzaSyCvyang3LGo4Ytle3G_fTjp7HC_mZtmBjE",
    authDomain: "kwitterproject-f337a.firebaseapp.com",
    databaseURL: "https://kwitterproject-f337a-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-f337a",
    storageBucket: "kwitterproject-f337a.appspot.com",
    messagingSenderId: "1059384883246",
    appId: "1:1059384883246:web:fee231417fac0fe49407bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
username= localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome "+username+ "!";
function addUser(){
   
    var username = document.getElementById("username_input").value;
   firebase.database().ref("/").child(username).update({
      text : "adding username"
   });
   localStorage.setItem("username", username);
  
   
}
function next(){
   window.location = "kwitter.html";
}
function addRoom(){
    var roomname= document.getElementById("room_input").value;
    firebase.database().ref("/").child(roomname).update({
        room : "adding roomname"
     });
     localStorage.setItem("roomname", roomname);
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("existing_rooms").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("The rooms available are: " +Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>" +Room_names+ "</div><hr>";
    document.getElementById("existing_rooms").innerHTML += row;
    
    });});}

getData();
function redirectToRoom(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "text.html";
}
function removeUser(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    localStorage.removeItem("room_name");
    document.getElementById("existing_rooms").innerHTML = "";
    window.location ="login.html";
}