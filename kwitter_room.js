
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAGeOxye4WciDpitVJx_l4Atg8mvXxrvqY",
      authDomain: "kwitter-4d0f2.firebaseapp.com",
      databaseURL: "https://kwitter-4d0f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d0f2",
      storageBucket: "kwitter-4d0f2.appspot.com",
      messagingSenderId: "790068007037",
      appId: "1:790068007037:web:d4841d887223dcfb55a114"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
