const translations = {
    en: {
        title: "Welcome to ViDLR's GitHub Pages Site",
        menuAbout: "About Me",
        menuProjects: "Projects",
        menuContact: "Contact",
        menuDownload: "Downloads",
        aboutTitle: "About Me",
        aboutContent: "Hello! My name is Virgile de La Rochefoucauld, and I am passionate about robotics, trans-media agents and multi-robot systems. I am currently pursuing a double degree PhD program between Japan and France, where I have the opportunity to work on cutting-edge research in robotics and AI planning. I specialize in developing autonomous systems capable of handling high-complexity missions. My current research focuses on creating a modular framework for trans-media multi-robot mission planning and execution. Throughout my academic journey, I have been fortunate to collaborate with esteemed researchers and institutions, including presenting my work at IROS 2024. My dedication to advancing robotics technology is driven by the potential to solve real-world problems, improve quality of life and efficiency. In addition to my academic pursuits, I enjoy hiking and exploring historical places. I have a German Shepherd Husky mix dog who accompanies me on my outdoor adventures. Always eager to learn and share knowledge.Feel free to explore my projects and get in touch with me if you share similar interests or have any questions ! ",
        projectsTitle: "Projects",
        projectsContent: "Details about my projects and links to their repositories.",
        project1: "Infrared pattern and client identification with Computer Vision for Sysmex Corporation",
        project2: "End of master degree project on drone and mobile robot search and rescue cooperation",
        contactTitle: "Contact",
        contactContent: "Ways to get in touch with me."
    },
    fr: {
        title: "Bienvenue sur le site GitHub Pages de ViDLR",
        menuAbout: "À propos de moi",
        menuProjects: "Projets",
        menuContact: "Contact",
        menuDownload: "Téléchargements",
        aboutTitle: "À propos de moi",
        aboutContent: "Bonjour ! Je m'appelle Virgile de La Rochefoucauld, et je suis passionné par la robotique, les agents trans-médias et les systèmes multi-robots. Je poursuis actuellement un programme de doctorat à double diplôme entre le Japon et la France, où j'ai l'opportunité de travailler sur des recherches de pointe en robotique et en planification d'IA. Je me spécialise dans le développement de systèmes autonomes capables de gérer des missions très complexes. Mes recherches actuelles portent sur la création d'un cadre modulaire pour la planification et l'exécution de missions multi-robots trans-médias. Tout au long de mon parcours universitaire, j'ai eu la chance de collaborer avec des chercheurs et des institutions réputés, notamment en présentant mes travaux à l'occasion de l'IROS 2024. Ma volonté de faire progresser la technologie robotique est motivée par la possibilité de résoudre des problèmes concrets et d'améliorer la qualité de vie et l'efficacité. Outre mes activités académiques, j'aime faire de la randonnée et explorer des lieux historiques. J'ai un berger allemand, mélange de Husky, qui m'accompagne dans mes aventures en plein air. N'hésitez pas à explorer mes projets et à me contacter si vous partagez les mêmes intérêts ou si vous avez des questions ! ",
        projectsTitle: "Projets",
        projectsContent: "Détails sur mes projets et liens vers leurs dépôts.",
        project1: "Identification de motif infrarouge et client avec Vision par Ordinateur pour Sysmex Corporation",
        project2: "Projet de fin de master sur la coopération entre drones et robots mobiles pour la recherche et le sauvetage",
        contactTitle: "Contact",
        contactContent: "Moyens de me contacter."
    },
    jp: {
        title: "私のページへようこそ",
        menuAbout: "私について",
        menuProjects: "プロジェクト",
        menuContact: "連絡先",
        menuDownload: "ダウンロード",
        aboutTitle: "私について",
        aboutContent: "こんにちは! 私の名前はヴィルジル・ド・ラ・ロシュフコーです。ロボット工学、トランスメディアエージェント、マルチロボットシステムに情熱を注いでいます。現在、日本とフランスでダブルディグリー博士課程に在籍しており、ロボット工学とAI計画の最先端の研究に取り組む機会を得ています。私は、非常に複雑なミッションを処理できる自律システムの開発を専門としています。現在の研究は、トランスメディアマルチロボットミッションの計画と実行のためのモジュールフレームワークの作成に焦点を当てています。学問の旅を通して、私はIROS 2024で自分の研究を発表するなど、尊敬される研究者や機関と協力する機会に恵まれました。ロボット技術の進歩に対する私の献身は、現実世界の問題を解決し、生活の質と効率を向上させる可能性に駆り立てられています。学問の追求に加えて、ハイキングや歴史的な場所の探索を楽しんでいます。私は、アウトドアアドベンチャーに同行してくれるジャーマンシェパードハスキーのミックス犬を飼っています。常に学び、知識を共有することに熱心です。私のプロジェクトを自由に探索し、同様の興味を共有したり質問がある場合は私に連絡してください。",
        projectsTitle: "プロジェクト",
        projectsContent: "私のプロジェクトの詳細とリポジトリへのリンク。",
        project1: "シスメックス株式会社のコンピュータビジョンによる赤外線パターンとクライアント識別",
        project2: "ドローンとモバイルロボットの捜索救助協力に関する修士学位プロジェクト",
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
    document.getElementById("menu-download").textContent = translations[language].menuDownload;
    document.getElementById("about-title").textContent = translations[language].aboutTitle;
    document.getElementById("about-content").textContent = translations[language].aboutContent;
    document.getElementById("projects-title").textContent = translations[language].projectsTitle;
    document.getElementById("projects-content").textContent = translations[language].projectsContent;
    document.getElementById("project1").textContent = translations[language].project1;
    document.getElementById("project2").textContent = translations[language].project2;
    document.getElementById("contact-title").textContent = translations[language].contactTitle;
    document.getElementById("contact-content").textContent = translations[language].contactContent;
}

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage();
});
