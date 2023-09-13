let hamburger = document.getElementById("menuicon");
let closed = document.getElementById("close");
        let wrapper = document.getElementById("option");
hamburger.addEventListener("click",function(){
    hamburger.style.display="none";
    wrapper.style.display="flex";
    wrapper.style.flexDirection="column";
    wrapper.style.marginRight="20%";
    wrapper.style.marginTop="2%";
    wrapper.style.marginBottom="2%";
   wrapper.style.display="block";
});

closed.addEventListener("click",function(){
    hamburger.style.display="block";
    wrapper.style.display="none";
})

let namei=document.getElementById("nameinp");
let phone=document.getElementById("phoneinp");
let email=document.getElementById("emailinp");
let hatch=document.getElementById("hatchinp");
let sadan=document.getElementById("sadaninp");
let suv=document.getElementById("suvinp");
let textarea=document.getElementById("textareainp");
let button=document.querySelector("button");

let userls=JSON.parse(localStorage.getItem("userdata"))||[];

button.addEventListener("click",function(){

    let userdata={
        name:namei.value,
    phone:phone.value,
    email:email.value,
    hatch:hatch.value,
    sadan:flag,
    suv:suv.value,
    address:textarea.value,
    }
    userls.push(userdata);
    localStorage.setItem("userdata",JSON.stringify(userls));
})

