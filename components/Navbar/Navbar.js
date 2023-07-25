import './style.css'


export const Header =()=>{

    return`
    
    <article class="header">

    <img class="logo" src="./icons/logo.png" alt="logo" />

    <section class="header-nav">
    <label class="label-hamburger"for="hamburger">
    <img class="menu" src="/icons/lineas-h.png" alt="icon-hamburguer"/>
    </label>

    <input class="nav-input" type="checkbox" id="hamburger" />

    <nav class="navbar">
    <ul class="nav-list">
    <li><a href="#" id="homeLink">Home</a></li>
    <li><a href="#" id="linkAbout">Sobre mi</a></li>
    <li><a href="#" id="linkProjects">Proyectos</a></li>
    </ul>
    
    </nav>
    
    </section>

   




    </article>
    
    
    
    `

};