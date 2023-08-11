import "./style.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () =>{
    const home=document.querySelector("main");
    cleanPage(home);
    
    home.innerHTML=`
    
    <section class="myHome">

    <div class="img-container">
    <img src="./images/profile.jpg" alt="image"/ >
    </div>

    <div class="description">
    <h1>Marc Roig Chueca</h1>
    <h2 class="role">IT Helpdesk y futuro FullStack Developer</h2>
    <q>Trust the process</q>
    <p class="live">Un entusiasta del IT Helpdesk en camino a convertirse en un versátil FullStack Developer. Mi mantra es "Confía en el proceso". Me sumerjo en retos tecnológicos con una actitud optimista, buscando siempre expandir mis horizontes. Mi habilidad para fusionar creatividad y habilidades técnicas me lleva a idear soluciones únicas. Encuentro mi pasión en el aprendizaje constante y en la exploración de nuevas tecnologías. Conéctate conmigo en Facebook, Github, Twitter y LinkedIn.</p>
    <div class="button-cv">
    <a href="/files/RoigChueca_CV.pdf" download class="download-button">Descargar CV</a>
    </div>

    
    </div>

   
    </section>
    
    
    
    
    
    
    `
}