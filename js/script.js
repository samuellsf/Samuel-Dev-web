document.addEventListener("DOMContentLoaded", () => {
    fetch("api/projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            projects.forEach(proj => {
                const card = document.createElement("div");
                card.classList.add("projeto-card");
                card.innerHTML = `
                    <img src="${proj.image}" alt="${proj.title}">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Erro ao carregar projetos:", error));
});
