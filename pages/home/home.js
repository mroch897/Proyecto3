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
    <h2>IT Helpdesk y futuro FullStack Developer</h2>
    <q>Trust the process</q>
    </div>
    </section>
    
    
    
    
    
    
    `
}