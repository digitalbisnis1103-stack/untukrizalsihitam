/* ==========================================
   ELEMENT
========================================== */

const pages = document.querySelectorAll(".page");

const startBtn = document.getElementById("startBtn");

const envelope = document.getElementById("envelope");

const restartBtn = document.getElementById("restartBtn");

const bgm = document.getElementById("bgm");

const hugBtn = document.getElementById("hugBtn");

const meterFill = document.getElementById("meterFill");

let currentPage = 1;

/* ==========================================
   SHOW PAGE
========================================== */

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

/* ==========================================
   MUSIC
========================================== */

document.body.addEventListener("click",()=>{

    bgm.play();

},{once:true});

/* ==========================================
   PAGE 1 -> PAGE 2
========================================== */

startBtn.addEventListener("click",()=>{

    showPage("page2");

});

/* ==========================================
   ENVELOPE
========================================== */

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    meterFill.style.width="25%";

    setTimeout(()=>{

        showPage("page3");

    },1200);

});

/* ==========================================
   NEXT BUTTON
========================================== */

const nextBtns=document.querySelectorAll(".next");

nextBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage==1){

            showPage("page4");

            currentPage++;

        }

        else if(currentPage==2){

            showPage("page5");

            currentPage++;

        }

        else if(currentPage==3){

            showPage("page6");

            currentPage++;

            heartRain();

        }

    });

});

/* ==========================================
   RESTART
========================================== */

restartBtn.addEventListener("click",()=>{

    currentPage=1;

    envelope.classList.remove("open");

    meterFill.style.width="0%";

    showPage("page1");

});

/* ==========================================
   HEART RAIN
========================================== */

function heartRain(){

    for(let i=0;i<80;i++){

        setTimeout(()=>{

            createHeart();

        },i*80);

    }

}

/* ==========================================
   HEART
========================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="🤍";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

/* ==========================================
   FLOAT HEARTS
========================================== */

setInterval(()=>{

    createHeart();

},1200);

/* ==========================================
   HUG BUTTON
========================================== */

hugBtn.addEventListener("click",()=>{

    for(let i=0;i<30;i++){

        setTimeout(createHeart,i*60);

    }

    alert("Makasih ya sayang...Aku bakal berusaha jadi lebih baik🤍");

});