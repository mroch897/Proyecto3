
import './style.css'

import { Header } from './components/Navbar/Navbar'
import { Footer } from './components/footer/footer';
import { Home } from './pages/Home/home';
import { linkPage } from './utils/linkPage';
import { Projects } from './pages/Projects/Projects';
import { aboutMe } from './pages/About/About';









document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();

linkPage("#homeLink", Home);
linkPage("#linkAbout", aboutMe);
linkPage("#linkProjects", Projects);


Home();


