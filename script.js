// ===========================
// Loader
// ===========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// ===========================
// Navbar Active Link
// ===========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// Reveal Animation
// ===========================
const reveals = document.querySelectorAll(
".box,.edu,.card,.project,.skills div");

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 80){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(60px)";
    item.style.transition="0.8s";

});

window.addEventListener("scroll", reveal);

reveal();

// ===========================
// Smooth Button Effect
// ===========================
const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ===========================
// Image Floating Animation
// ===========================
const image=document.querySelector(".right img");

let up=true;

setInterval(()=>{

if(up){

image.style.transform="translateY(-10px)";
up=false;

}

else{

image.style.transform="translateY(0px)";
up=true;

}

},1200);

// ===========================
// Scroll To Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.padding="12px 18px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#00c6ff";
topBtn.style.color="white";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px cyan";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// Console Message
// ===========================

console.log("Portfolio Loaded Successfully 🚀");