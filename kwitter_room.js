var firebaseConfig = {
    apiKey: "AIzaSyDZKOqhyszVgvA2cCDcYxrv5viYl6q9EwE",
    authDomain: "patient-and-doctor-d4c76.firebaseapp.com",
    databaseURL: "https://patient-and-doctor-d4c76.firebaseio.com",
    projectId: "patient-and-doctor-d4c76",
    storageBucket: "patient-and-doctor-d4c76.appspot.com",
    messagingSenderId: "155228840695",
    appId: "1:155228840695:web:059a009e780f3e76ee29f2"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_namehw");
  document.getElementById("user_namehw").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
  function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
          });
      });
  }
  getData();
  
  function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "home.html";
  }  