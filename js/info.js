// localStorage.clear()    

function sub() {
    let j = document.getElementById("pass").value;
    let k = document.getElementById("cpass").value;
  
    if (k == j) {
      let a = document.getElementById("UserName").value;
      localStorage.setItem("UserName", `${a}`);
  
      let b = document.getElementById("Pill Name").value;
      localStorage.setItem("Pill Name", `${b}`);
  
      let c = document.getElementById("Dosage").value;
      localStorage.setItem(">Dosage", `${c}`);
  
      let d = document.getElementById("Start Date").value;
      localStorage.setItem("Start Date", `${d}`);
  
      let e = document.getElementById("End Date").value;
      localStorage.setItem("End Date", `${e}`);
  
      let f = document.getElementById("Remainder Time set").value;
      localStorage.setItem("Remainder Time set", `${f}`);
    }
  }
  
  function reset() {
    document.getElementById("UserName").value = ` `;
    document.getElementById("Pill Name").value = ` `;
    document.getElementById("Dosage").value = ` `;
    document.getElementById("Start Date").value = ` `;
    document.getElementById("End Date").value = ` `;
    document.getElementById("Remainder Time set").value = ` `;
    
  }
  