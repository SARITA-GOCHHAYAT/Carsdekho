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





