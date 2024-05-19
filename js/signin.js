function sub() {
  let ab = document.getElementById("email1").value;
  let bc = localStorage.getItem("email").value;

  let xy = document.getElementById("pass1").value;
  let yz = localStorage.getItem("pass").value;

  if (ab == bc && xy == yz) {
    alert("hii")
  } else {
    alert("Check email & password");
    document.getElementById("email1").value=` `
    document.getElementById("pass1").value=` `
  }
}
