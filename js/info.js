// localstorage

function btn() {
    let d = document.getElementById("time").value;
    let g = document.getElementById("ctime").value;
}
    if (d == g) {
      let a = document.getElementById("UserName").value;
      localStorage.setItem("UserName", `${a}`);
  
      let b = document.getElementById("PillName").value;
      localStorage.setItem("PillName", `${b}`);
  
      let c = document.getElementById("Dosage").value;
      localStorage.setItem("Dosage", `${c}`);
  
      let d = document.getElementById("Start-Date").value;
      localStorage.setItem("Start-Date", `${d}`);
  
      let e = document.getElementById("End-Date").value;
      localStorage.setItem("End-Date", `${e}`);
  
      let f = document.getElementById("Time").value;
      localStorage.setItem("Time", `${f}`);
  
    
  
      localStorage.setItem("pass", `${d}`);
  
      localStorage.setItem("cpass", `${g}`);
    } else {
      alert("successfully register");
      reset();
    }
  
  
  function reset() {
    document.getElementById("UserName").value = ` `;
    document.getElementById("PillName").value = ` `;
    document.getElementById("Dosage").value = ` `;
    document.getElementById("Start-Date").value = ` `;
    document.getElementById("End-Date").value = ` `;
    document.getElementById("Time").value = ` `;
    // document.getElementById("state").value = ` `;
    // document.getElementById("pin").value = ` `;
    // document.getElementById("pic").value = ` `;
    // document.getElementById("pass").value = ` `;
  }
  