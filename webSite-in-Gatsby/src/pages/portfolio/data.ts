export const portfolioList = [
	{
        name: "Netflix",
		title: 'Netflix - Clone Netflix',
		description: "Réalisation d'un clone du site web de Netflix dans le cadre d'un projet personnel",
		id: '1',
		technique: `Projet réalisé avec le framework React.js et le préprocesseur Sass (SCSS). J'ai réalisé ce projet dans le cadre d'un travail personnel.`,
        task: `
         - Développement des fonctionnalités avec React.JS
         - Intégration responsive SASS (SCSS)
         - Axios / React-router / Material-UI
         - Test avec React-Testing Library et JEST
         - CI/CD avec Heroku et Github`,
		technologies: ["React.js", "Javascript", "SASS (SCSS)", "Axios", "React Router", "Material-UI", "React-Testing-Library / JEST", "Heroku"],
		link: "https://clone-guillaumedavid.herokuapp.com/",
        images : ['netflix'],
	},

    {
        name: "01 Academie",
		title: '01 Academie',
		description: "Création d'un site web de quizz qui permet de tester ses connaissances en programmation.",
		id: '2',
		technique: `Plusieurs version du projet, une avec du Javascript Vanilla et une autre avec React.JS. Backend réalisé en PHP.`,
        task:`
         - Intégration Responsive
         - Optimisation SEO
         - Développement de l'application avec React.JS 
         - Développement API REST avec PHP
         - Base de donnée SQL / MySQL
         - Tests unitaire JEST / React Testing Library`,
		technologies: ["React.js", "Javascript", "SASS (SCSS)", "Axios", "React Router", "PHP", "SQL / MySQL", "React-Testing-Library / JEST", "API REST", "OVH"],
		link: "https://github.com/GuillaumeDaviid/01-Academie-Version-React",
        images : ["01academie", "01courses", "01home"],
	},

    {
        name: "Jeu de Dame",
		title: 'Jeu de Dame',
		description: "Création d'un jeu de Dame dans le cadre d'un projet personnel.",
		id: '3',
		technique: `Plusieurs version du projet, une avec du Javascript Vanilla et une autre avec React.JS. Backend réalisé en PHP.`,
        task:`
         - Intégration Responsive
         - Optimisation SEO
         - Développement du jeu en Javascript Vanilla
         - Déploiement via Github
         - Test unitaire avec Jasmine`,
		technologies: ["Javascript", "HTML/CSS", "Github", "Jasmine"],
		link: "https://guillaumedaviid.github.io/Checkers-Game/",
        images : ["checkers"],
	},

    {
        name: "Commercia",
		title: 'Commercia - site e-commerce',
		description: "Création d'un e-commerce en React.js.",
		id: '4',
		technique: `Développement d'un site e-commerce en React avec Redux comme state manager.`,
        task:`
        - Développement de l'application en React.JS
        - Utilisation de Redux pour la gestion du State
        - Déploiement / Hébergement via Vercel (CI/CD)
        - Test Unitaire React-testing-library`,
		technologies: ["React.js", "Javascript", "SASS (SCSS)", "Redux", "React Router", "React-Testing-Library / JEST", "CI/CD", "Vercel"],
		link: "https://commercia.vercel.app/",
        images : ["commercia", "commercia-panier"],
	},

    {
        name: "Leagora",
		title: 'Leagora - Site de Visio conférence',
		description: "Je suis intervenu sur le projet en tant que développeur front-end.",
		id: '5',
		technique: `Entreprise qui commercialise une solution de visio-conférence, J'ai eu pour tache 
        d'ajouter différentes fonctionnalités à la visio en Javascript Vanilla basé sur la bibliothèque open source galene.`,
        task:`
        - Bouton de Kick et mute d'un utilisateur pour l'admin
        - Partage de fichier à tous les utilisateurs
        - Possibilité de changer ses périphériques
        - développement d'un chat privée`,
		technologies: ["Javascript", "HTML/CSS", "Galene", "GitLab", "Docker", "CI/CD"],
		link: "https://visio.leagora.fr/",
        images : ["leagora_black","leagora", "leagora-salle"],
	},
]

export default portfolioList