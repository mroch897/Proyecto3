import "./style.css";

export const ProjectCard=(project) => `

<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="headerCard">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<img src="/icons/github.png" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="/icons/enlace.png" alt="Link icon" />
</a>
</div>
</div>

<div class="description">
<p>${project.description}</p>

<div class="tech">
${project.tech.map((techImage) => `<img src="${techImage}" alt="Tech Icon" />`).join("")}
</div>
</div>
</div>









`
