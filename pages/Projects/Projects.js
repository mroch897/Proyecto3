import "./style.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const Projects=()=>{
    const main= document.querySelector("main");
    cleanPage(main);
    main.innerHTML=`
    <section class="projects">
    <h2>Featured Projects</h2>
    <div class="projects-container"></div>
    </section>
    `;

    const container= document.querySelector(".projects-container");
    for(const project of projects){
        const pr=document.createElement("figure");
        pr.innerHTML=ProjectCard(project);
        container.appendChild(pr);
    }

    

    
    
    
    
    
    

}