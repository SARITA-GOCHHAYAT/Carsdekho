let userls=JSON.parse(localStorage.getItem("userdata"));

let inp=document.getElementById("inp");
let login=document.getElementById("login");

let table=document.getElementById("adminp");
let button=document.querySelector("button");
button.addEventListener("click",function(){
    if(inp.value=="I am admin"){
        alert("Welcome Admin to adminpanel");
login.style.display="none";
adminp.style.display="block";

    }else{
        alert("wrong input.type it again");
        inp.value="";
    }
})

let tbody=document.querySelector("tbody");

display(userls);
function display(data){
for(let i=0;i<data.length;i++){
let tr=document.createElement("tr");
let td1=document.createElement("td");
td1.innerHTML=data[i].name;
let td2=document.createElement("td");
td2.innerHTML=data[i].phone;
let td3=document.createElement("td");
td3.innerHTML=data[i].email;
let td4=document.createElement("td");
td4.innerHTML=data[i].hatch;
let td5=document.createElement("td");
td5.innerHTML=data[i].sadan;
let td6=document.createElement("td");
td6.innerHTML=data[i].suv;
let td=document.createElement("td");
td.innerHTML=data[i].address;
let td7=document.createElement("td");
let td7b=document.createElement("button");
td7b.innerHTML="Edit";
td7b.setAttribute("class","buttone");
td7.append(td7b);
let td8=document.createElement("td");
b=document.createElement("button");
b.innerHTML="delete";
td8.append(b);
tr.append(td1,td2,td3,td4,td5,td6,td,td7,td8);
tbody.append(tr);
}
}
