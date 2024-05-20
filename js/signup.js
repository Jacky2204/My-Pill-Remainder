// localStorage.clear()    

function sub() {
  let j = document.getElementById("pass").value;
  let k = document.getElementById("cpass").value;

  if (k == j) {
    let a = document.getElementById("fname").value;
    localStorage.setItem("fname", `${a}`);

    let b = document.getElementById("lname").value;
    localStorage.setItem("lname", `${b}`);

    let l = document.getElementById("user").value;
    localStorage.setItem("user", `${l}`);

    let c = document.getElementById("email").value;
    localStorage.setItem("email", `${c}`);

    let d = document.getElementById("phone").value;
    localStorage.setItem("phone", `${d}`);

    let e = document.getElementById("address").value;
    localStorage.setItem("address", `${e}`);

    let f = document.getElementById("city").value;
    localStorage.setItem("city", `${f}`);

    let g = document.getElementById("state").value;
    localStorage.setItem("state", `${g}`);

    let h = document.getElementById("pin").value;
    localStorage.setItem("pin-code", `${h}`);

    let i = document.getElementById("pic").value;
    localStorage.setItem("pic", `${i}`);

    localStorage.setItem("pass", `${j}`);

    localStorage.setItem("conpass", `${k}`);

    

  } else {
    alert("Enter correct password");
    reset();
  }
}

function reset() {
  document.getElementById("fnmae").value = ` `;
  document.getElementById("lnmae").value = ` `;
  document.getElementById("email").value = ` `;
  document.getElementById("phone").value = ` `;
  document.getElementById("address").value = ` `;
  document.getElementById("city").value = ` `;
  document.getElementById("state").value = ` `;
  document.getElementById("pin").value = ` `;
  document.getElementById("pic").value = ` `;
  document.getElementById("pass").value = ` `;
}
