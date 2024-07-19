// script.js
const translations = {
    en: {
        title: "Welcome to ViDLR's GitHub Pages Site",
        menuAbout: "About Me",
        menuProjects: "Projects",
        menuContact: "Contact",
        aboutTitle: "About Me",
        aboutContent: "Hello! My name is Virgile de La Rochefoucauld, and I am passionate about robotics and trans-media multi-robot systems. I am currently pursuing a double degree program between Japan and France, where I have the opportunity to work on cutting-edge research in robotics and artificial intelligence.",
        projectsTitle: "Projects",
        projectsContent: "Details about your projects and links to their repositories.",
        contactTitle: "Contact",
        contactContent: "Ways to get in touch with you."
    },
    fr: {
        title: "Bienvenue sur le site GitHub Pages de ViDLR",
        menuAbout: "À propos de moi",
        menuProjects: "Projets",
        menuContact: "Contact",
        aboutTitle: "À propos de moi",
        aboutContent: "Bonjour! Je m'appelle Virgile de La Rochefoucauld et je suis passionné par la robotique et les systèmes multi-robots trans-média. Je poursuis actuellement un programme de double diplôme entre le Japon et la France, où j'ai l'opportunité de travailler sur des recherches de pointe en robotique et en intelligence artificielle.",
        projectsTitle: "Projets",
        projectsContent: "Détails sur vos projets et liens vers leurs dépôts.",
        contactTitle: "Contact",
        contactContent: "Moyens de vous contacter."
    },
    jp: {
        title: "ViDLRのGitHubページへようこそ",
        menuAbout: "私について",
        menuProjects: "プロジェクト",
        menuContact: "連絡先",
        aboutTitle: "私について",
        aboutContent: "こんにちは！私はヴィルジル・ド・ラ・ロシュフォコーで、ロボティクスとトランスメディアマルチロボットシステムに情熱を持っています。現在、私は日本とフランスの間でダブルディグリープログラムを追求しており、ロボティクスと人工知能の最先端研究に取り組む機会を得ています。",
        projectsTitle: "プロジェクト",
        projectsContent: "あなたのプロジェクトに関する詳細とそのリポジトリへのリンク。",
        contactTitle: "連絡先",
        contactContent: "連絡方法。"
    }
};

function changeLanguage() {
    const language = document.getElementById("language").value;
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("menu-about").textContent = translations[language].menuAbout;
    document.getElementById("menu-projects").textContent = translations[language].menuProjects;
    document.getElementById("menu-contact").textContent = translations[language].menuContact;
    document.getElementById("about-title").textContent = translations[language].aboutTitle;
    document.getElementById("about-content").textContent = translations[language].aboutContent;
    document.getElementById("projects-title").textContent = translations[language].projectsTitle;
    document.getElementById("projects-content").textContent = translations[language].projectsContent;
    document.getElementById("contact-title").textContent = translations[language].contactTitle;
    document.getElementById("contact-content").textContent = translations[language].contactContent;
}

// Set the default language to English on page load
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage();
});
