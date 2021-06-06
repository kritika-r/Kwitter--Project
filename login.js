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

function addUser(){
   
    var username = document.getElementById("username_input").value;
   firebase.database().ref("/").child(username).update({
      textmessage : "adding username"
   });
   localStorage.setItem("username", username);
  
   
}
function next(e){
   window.location = "kwitter.html";
}