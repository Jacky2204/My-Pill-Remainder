// function personal() {
//   document.getElementById("head").innerText="Personal Information"
  let z = localStorage.length;

  if (z == 0) {
    document.getElementById("userm").innerText = ` `;
    document.getElementById("namep").innerText = ` `;
    document.getElementById("namem").innerText = ` `;
    document.getElementById("userp").innerText = ` `;
    document.getElementById("agep").innerText = ` `;
    document.getElementById("genderp").innerText = ` `;
    document.getElementById("emailp").innerText = ` `;
    document.getElementById("phonep").innerText = ` `;
    document.getElementById("addressp").innerText = ` `;
    document.getElementById("cityp").innerText = ` `;
    document.getElementById("statep").innerText = ` `;
    console.log(1);
  } else {
    //   let x = localStorage.getItem("pic").value;
    //   document.getElementById("images").src =`${x}`;

    // document.getElementById("rem").classList.remove(".block")
    // document.getElementById("para").classList.add(".none")

    let a = localStorage.getItem("fname");
    let b = localStorage.getItem("lname");
    document.getElementById("names").innerText = `${a} ${b}`;
    document.getElementById("namem").innerText = `${a}`;

    let c = localStorage.getItem("user");
    let u = localStorage.getItem("user");
    document.getElementById("userm").innerText = `${u}`;
    document.getElementById("users").innerText = `${c}`;

    let d = localStorage.getItem("age");
    document.getElementById("ages").innerText = `${d}`;

    let e = localStorage.getItem("gender");
    document.getElementById("genders").innerText = `${e}`;

    let f = localStorage.getItem("email");
    document.getElementById("emails").innerText = `${f}`;

    let g = localStorage.getItem("phone");
    document.getElementById("phones").innerText = `${g}`;

    let h = localStorage.getItem("address");
    document.getElementById("addresss").innerText = `${h}`;

    let i = localStorage.getItem("city");
    document.getElementById("citys").innerText = `${i}`;

    let j = localStorage.getItem("state");
    let k = localStorage.getItem("pin-code");

    document.getElementById("states").innerText = `${j}-${k}`;
    console.log(2);
  }
// }


function remainder(){
  document.getElementById("head").innerText="Remainder"
  // document.getElementById("rem").classList.add(".block")
  // document.getElementById("para").classList.remove(".none")
 
}
