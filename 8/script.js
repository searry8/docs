const articles = {
  article1: `
    <h2>README</h2>
    <p>Bienvenue dans ce projet 👋</p>
    <pre><code>npm install
npm start</code></pre>
  `,
  article2: `
    <h2>Installation</h2>
    <p>1. Télécharger le projet</p>
    <p>2. Installer les dépendances</p>
  `,
  article3: `
    <h2>Utilisation</h2>
    <p>Lance le projet avec <code>npm start</code></p>
  `
};

function loadArticle(name) {
  document.getElementById("content").innerHTML = articles[name];
}
