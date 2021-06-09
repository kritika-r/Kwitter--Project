//YOUR FIREBASE LINKS
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
 
    username = localStorage.getItem("username");
    roomname = localStorage.getItem("roomname");
    
    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name1: username,
                message: msg,
                like: 0

          });
          document.getElementById("msg").value = "";
    }
function getData() 
{ firebase.database().ref("/"+room_name)
.on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
 { childKey  = childSnapshot.key;
      childData = childSnapshot.val();
       if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name1= message_data['name'];
  message= message_data['message'];
  like= message_data['like'];
  name_tag= "<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
  message_tag= "<h4 class='message_h4'>"+message+"</h4>";
  like_tag= "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
  span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";
  row = name_with_tag + message_with_tag +like_button + span_with_tag;
  
  document.getElementById("output").innerHTML += row;
  //End code
        } });  }); }
  getData();
   
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
   
    firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes  
     });
   
  }
   
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
  }  
