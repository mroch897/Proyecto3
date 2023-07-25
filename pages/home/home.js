import "./style.css";

export const renderHome = () =>{
    const home=document.querySelector("main");

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