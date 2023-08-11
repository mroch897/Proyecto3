import "./style.css";

export const Button = (icon, text, link) => `
    <a href="${link}" class="web-link">
        <button class="myBtn">
            <img src="${icon}" alt="${text}">
        </button>
    </a>
`;