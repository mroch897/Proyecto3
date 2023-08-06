import './style.css'


export const Header =()=>{

    return`
    
    
    <div class="mr-section-header-layout mr-layout-flex">
      <a href="#" role="link" class="mr-section-header-title">
        <img src="./icons/logo.png" alt="logo" class="logo"/>
      </a>
      <label class="mr-hamburguer-icon" for="hamburger">&#9776;</label>
      <input type="checkbox" class="mr-hamburguer" id="hamburger">

      <!-- MENU -->
      <nav role="navigation" class="mr-section-nav">
        <ul class="mr-layout-flex mr-section-header-nav">
          <li><a href="#" id="homeLink" class="mr-section-header--nav-link">Home</a></li>
          <li> <a href="#" id="linkAbout" class="mr-section-header--nav-link">Sobre mi</a></li>
          <li><a href="#" id="linkProjects" class="mr-section-header--nav-link">Proyectos</a></li>
        </ul>
      </nav>
    </div>
    </div>
    
    
    
    
    
    `

};


