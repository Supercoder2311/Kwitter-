const firebaseConfig = {
      apiKey: "AIzaSyAGeOxye4WciDpitVJx_l4Atg8mvXxrvqY",
      authDomain: "kwitter-4d0f2.firebaseapp.com",
      databaseURL: "https://kwitter-4d0f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d0f2",
      storageBucket: "kwitter-4d0f2.appspot.com",
      messagingSenderId: "790068007037",
      appId: "1:790068007037:web:d4841d887223dcfb55a114"
    };
    

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
