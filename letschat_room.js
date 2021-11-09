var firebaseConfig = {
      apiKey: "AIzaSyCq0E-xNqi2v988YFabanbbJVg0pdA4k7U",
      authDomain: "mycity-ayxe.firebaseapp.com",
      databaseURL: "https://mycity-ayxe-default-rtdb.firebaseio.com",
      projectId: "mycity-ayxe",
      storageBucket: "mycity-ayxe.appspot.com",
      messagingSenderId: "656089630105",
      appId: "1:656089630105:web:6455fbad13c1e18f3c7f08"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name - " + Room_names);
       row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(This.id)' >#" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
