var firebaseConfig = {
    apiKey: "AIzaSyCjzRs_UR8V4fptz8Eks7L8dnGno6-L6o0",
    authDomain: "lets-chat-web-app-f0a3e.firebaseapp.com",
    projectId: "lets-chat-web-app-f0a3e",
    storageBucket: "lets-chat-web-app-f0a3e.appspot.com",
    messagingSenderId: "641700850149",
    appId: "1:641700850149:web:6d6616e63278dfadff670c"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Hello " + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}