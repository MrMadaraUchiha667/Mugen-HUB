/* =====================================================
        MUGEN HUB
        PARTICLE SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{


const container =
document.querySelector(".particles");



if(!container)
    return;





const particleAmount = 70;



/* =========================
        CREATE PARTICLES
========================= */


for(let i = 0; i < particleAmount; i++){


    createParticle();


}






function createParticle(){



    const particle =
    document.createElement("span");



    particle.classList.add(
        "particle"
    );



    const size =
    Math.random() * 5 + 2;



    const positionX =
    Math.random() * 100;



    const delay =
    Math.random() * 10;



    const duration =
    Math.random() * 15 + 10;





    particle.style.width =
    `${size}px`;



    particle.style.height =
    `${size}px`;



    particle.style.left =
    `${positionX}%`;



    particle.style.animationDelay =
    `${delay}s`;



    particle.style.animationDuration =
    `${duration}s`;



    container.appendChild(
        particle
    );



}





});