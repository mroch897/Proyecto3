export const linkPage = (id, page) => {
    const element = document.querySelector(id);
    if (element) {
        element.addEventListener('click', () => {
            page();
        });
    } else {
        console.error(`Elemento con ID '${id}' no encontrado en el DOM.`);
    }
};