function sub() {
  let ab = document.getElementById("email1").value;
  let bc = localStorage.getItem("email")

  let xy = document.getElementById("pass1").value;
  let yz = localStorage.getItem("pass")

  if (ab == bc && xy == yz) {
    alert("Successfully enter in your account !!")
  } else {
    alert("Check email & password");
    document.getElementById("email1").value=` `
    document.getElementById("pass1").value=` `
  }
}
 