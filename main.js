
import './style.css'

import { Header } from './components/Navbar/Navbar'
import { Footer } from './components/footer/footer';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { linkPage } from './utils/linkPage';








document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();


linkPage("#linkProjects", ProjectCard);





