import "./style.css";

export const ExperienceCard = (experience) => `
<div class="experience-card">
<div class="header-card">
<div class="logo-card">
<h2>${experience.name}</h2>
<a href=${experience.web}>
<img src="${experience.logo}" alt="${experience.name}" />
</a>

</div>
<div class="description">
<p class="descriptiontext">${experience.description}</p>
<div class="date">
<p class="datetext">${experience.date}</p>
</div>
</div>

</div>
</div>


`;
