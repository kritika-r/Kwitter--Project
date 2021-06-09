
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyD42KtSJSjxpSQrd-ecMk7PQNA3PcRQEfQ",
      authDomain: "kwitter-387fc.firebaseapp.com",
      databaseURL: "https://kwitter-387fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-387fc",
      storageBucket: "kwitter-387fc.appspot.com",
      messagingSenderId: "371698628502",
      appId: "1:371698628502:web:85bdd7cc4c3dbed79a4fb7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser(){
      var username= document.getElementById("userNameInput").value;
      localStorage.setItem("username", username);
     
  }
  function next(){
      window.location="kwitter_room.html";
  }


    username= localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "Welcome " +username+" !";
    
    function addRoom(){
        var roomname = document.getElementById("addRoomInput").value;
        firebase.database().ref("/").child(roomname).update({
            purpose: "adding room name"
        });
    }
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("The rooms available are: " +Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoom(this.id)'>" +Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}

getData();

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name",name );
      window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location= "login.html";
}
