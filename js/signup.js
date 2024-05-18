// localStorage.clear()

function sub(){
let a=document.getElementById("fnmae").value
localStorage.setItem("fname", `${a}`)

let b=document.getElementById("lnmae").value
localStorage.setItem("lname", `${b}`)

let c=document.getElementById("email").value
localStorage.setItem("email", `${c}`)

let d=document.getElementById("phone").value
localStorage.setItem("phone", `${d}`)

let e=document.getElementById("address").value
localStorage.setItem("address", `${e}`)

let f=document.getElementById("city").value
localStorage.setItem("city", `${f}`)

let g=document.getElementById("state").value
localStorage.setItem("state", `${g}`)

let h=document.getElementById("pin").value
localStorage.setItem("pin-code", `${h}`)

let i=document.getElementById("pic").value
localStorage.setItem("pic", `${i}`)
}