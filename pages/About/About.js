import "./style.css";

import { cleanPage } from "../../utils/cleanPage";
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";
import { experience } from "../../data/experience";

export const aboutMe=()=>{
const main =document.querySelector("main");
cleanPage(main);

main.innerHTML = `

<section class="container">
<h2 class="title">Experiencia Laboral</h2>
<article class="facts">
<div class="experience-container"></div>
</article>
</section>
`;

const container= document.querySelector('.experience-container');
for(const experiences of experience){
    const ex=document.createElement("figure");
    ex.classList.add("experienceFigure");
    ex.innerHTML=ExperienceCard(experiences);
    container.appendChild(ex);
}


}