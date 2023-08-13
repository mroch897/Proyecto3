
import './style.css'

import { Header } from './components/Navbar/Navbar.js'
import { Footer } from './components/footer/footer.js';
import {Home} from './pages/Home/home.js';
import { linkPage } from './utils/linkPage.js';
import { Projects } from './pages/Projects/Projects.js';
import { aboutMe } from './pages/About/About.js';




 




document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();

linkPage("#homeLink", Home);
linkPage("#linkAbout", aboutMe);
linkPage("#linkProjects", Projects);


Home();


