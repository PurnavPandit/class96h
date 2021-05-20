function addUser(){
  user_namehw = document.getElementById("user_name").value;
  localStorage.setItem("user_name",user_namehw);
  window.location = "kwitter_room.html";
}