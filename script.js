const translations = {
    en: {
        title: "Welcome !",
        menuAbout: "About Me",
        menuProjects: "Projects",
        menuContact: "Contact",
        menuDownload: "Downloads",
        aboutTitle: "About Me",
        aboutContent: "Hello! My name is Virgile de La Rochefoucauld, and I am passionate about robotics, trans-media agents and multi-robot systems. I am currently pursuing a double degree PhD program between Japan and France, where I have the opportunity to work on cutting-edge research in robotics and AI planning. I specialize in developing autonomous systems capable of handling high-complexity missions. My current research focuses on creating a modular framework for trans-media multi-robot mission planning and execution. Throughout my academic journey, I have been fortunate to collaborate with esteemed researchers and institutions, including presenting my work at IROS 2024. My dedication to advancing robotics technology is driven by the potential to solve real-world problems, improve quality of life and efficiency. In addition to my academic pursuits, I enjoy hiking and exploring historical places. I have a German Shepherd Husky mix dog who accompanies me on my outdoor adventures. Always eager to learn and share knowledge.Feel free to explore my projects and get in touch with me if you share similar interests or have any questions ! ",
        aboutSummary: "Specialized in Robotic, planning and AI with a focus on multi-agents systems and complex planning and acting problems.",
        projectsTitle: "Projects",
        projectsContent: "Details about my projects and links to their repositories.",
        project1: "Infrared pattern and client identification with Computer Vision for Sysmex Corporation",
        project1description: "Created an infrared pattern vein image recognition system for client identification using computer vision. Technologies used: OpenCV, C++, Machine Learning.",
        project1media1caption: "Simulation of collaboration with drone and mobile robot in SAR mission",
        project1media2caption: "Mobile and drone agents",
        project1media3caption: "Simulated environment on Gazebo",
        project2: "End of master degree project on drone and mobile robot search and rescue cooperation",
        project2description: "Managed a team of 7 students to create a cooperative system using algorithms for coordination and communication between robots in 2 months. Technologies used: OpenCV, Python, C++, ROS.",
        project2media1caption: "Process to acquire vein pattern data",
        project2media2caption: "A random example of fingervein pattern",
        project3description: "Construction of AUV with hydraulic grapping arm and teleoperation",
        project4description: "multi-agents mobile robot patrolling scenario simulation and control",
        project4media1caption: "A typical patrolling representation with designated area in a maze",
        project4media2caption: "The Turtlebot3 burger used in the multi-agents system",
        project5description: "Localization and mapping with fusion of data from Stereo camera SLAM and IMU for complex base-varying mobile robot",
        project5media1caption: "Testing device used for data fusion trials with IMU and stereo camera",
        project5media2caption: "Exampe of Output for basic visual stereo SLAM",
        project6description: "SLAM and path planning for building mapping in the context of MBZIRC 2020 with TakemuraLab team from Osaka University",
        project6media1caption: "Simulated building on Gazebo",
        project6media2caption: "A representation of the two challenges for the drone",
        project6media3caption: "Fully equiped drone",
        project6media4caption: "A representation of the evolution of the exploration following RRT algorithm",
        project6media5caption: "Testing building in Kobe firestation, Japan",
        iros2024: "IROS2024 - Solving Multi-Robot Task Allocation and Planning in Trans-media Scenarios - Abstracting and restructuring MRTA problems to solve complex trans-media automated planning missions",
        contactTitle: "Contact",
        contactContent: "Ways to get in touch with me.",
        contactGithub: "GitHub",
        contactGitlab: "GitLab",
        contactLinkedin: "Linkedin",
        contactEmail: "Send me an Email"
    },
    fr: {
        title: "Bienvenue !",
        menuAbout: "À propos de moi",
        menuProjects: "Projets",
        menuContact: "Contact",
        menuDownload: "Téléchargements",
        aboutTitle: "À propos de moi",
        aboutContent: "Bonjour ! Je m'appelle Virgile de La Rochefoucauld, et je suis passionné par la robotique, les agents trans-médias et les systèmes multi-robots. Je poursuis actuellement un programme de doctorat à double diplôme entre le Japon et la France, où j'ai l'opportunité de travailler sur des recherches de pointe en robotique et en planification d'IA. Je me spécialise dans le développement de systèmes autonomes capables de gérer des missions très complexes. Mes recherches actuelles portent sur la création d'un cadre modulaire pour la planification et l'exécution de missions multi-robots trans-médias. Tout au long de mon parcours universitaire, j'ai eu la chance de collaborer avec des chercheurs et des institutions réputés, notamment en présentant mes travaux à l'occasion de l'IROS 2024. Ma volonté de faire progresser la technologie robotique est motivée par la possibilité de résoudre des problèmes concrets et d'améliorer la qualité de vie et l'efficacité. Outre mes activités académiques, j'aime faire de la randonnée et explorer des lieux historiques. J'ai un berger allemand, mélange de Husky, qui m'accompagne dans mes aventures en plein air. N'hésitez pas à explorer mes projets et à me contacter si vous partagez les mêmes intérêts ou si vous avez des questions ! ",
        aboutSummary: "Spécialisé dans la robotique, la planification et l'intelligence artificielle, avec un accent particulier sur les systèmes multi-agents et les problèmes complexes de planification et d'action.",
        projectsTitle: "Projets",
        projectsContent: "Détails sur mes projets et liens vers leurs dépôts.",
        project1: "Identification de motif infrarouge et client avec Vision par Ordinateur pour Sysmex Corporation",
        project1description: "Création d'un système de reconnaissance d'images infrarouges pour l'identification des clients à l'aide de la vision par ordinateur. Technologies utilisées : OpenCV, C++, apprentissage machine.",
        project1media1caption: "Simulation de la collaboration entre un drone et un robot mobile dans le cadre d'une mission RES",
        project1media2caption: "Agents mobiles et drones ",
        project1media3caption: "Environnement simulé sur Gazebo",
        project2: "Projet de fin de master sur la coopération entre drones et robots mobiles pour la recherche et le sauvetage",
        project2description: "Gestion d'une équipe de 7 étudiants pour créer un système coopératif utilisant des algorithmes de coordination et de communication entre robots en 2 mois. Technologies utilisées : OpenCV, Python, C++, ROS.",
        project2media1caption: "Processus d'acquisition de données sur les veines",
        project2media2caption: "Un exemple aléatoire de motif de veine de doigt",
        project3description: "Construction d'un AUV avec bras de préhension hydraulique et téléopération",
        project4description: "Simulation et contrôle d'un scénario de patrouille de robots mobiles multi-agents ",
        project4media1caption: "Représentation d'une patrouille typique avec une zone désignée dans un labyrinthe",
        project4media2caption: "Le Turtlebot3 burger utilisé dans le système multi-agents",
        project5description: "Localisation et cartographie avec fusion des données de la caméra stéréo SLAM et de l'IMU pour un robot mobile complexe à base variable",
        project5media1caption: "Dispositif de test utilisé pour les essais de fusion de données avec IMU et caméra stéréo",
        project5media2caption: "Exemple de données de sortie pour le SLAM stéréo visuel ",
        project6description: "SLAM et planification de trajectoire pour la cartographie de bâtiments dans le contexte de MBZIRC 2020 avec l'équipe TakemuraLab de l'université d'Osaka,",
        project6media1caption: "Bâtiment simulé sur Gazebo",
        project6media2caption: "Représentation des deux défis pour le drone",
        project6media3caption: "Drone entièrement équipé",
        project6media4caption: "Représentation de l'évolution de l'exploration suivant l'algorithme RRT",
        project6media5caption: "Bâtiment d'essai de la caserne de pompiers de Kobe, au Japon",
        iros2024: "IROS2024 - Solving Multi-Robot Task Allocation and Planning in Trans-media Scenarios - Abstraction et restructuration des problèmes MRTA pour résoudre des missions complexes de planification automatisée trans-médias.",
        contactTitle: "Contact",
        contactContent: "Moyens de me contacter.",
        contactGithub: "GitHub",
        contactGitlab: "GitLab",
        contactLinkedin: "Linkedin",
        contactEmail: "Envoyez-moi un e-mail "
    },
    jp: {
        title: "ようこそ !",
        menuAbout: "私について",
        menuProjects: "プロジェクト",
        menuContact: "連絡先",
        menuDownload: "ダウンロード",
        aboutTitle: "私について",
        aboutContent: "こんにちは! 私の名前はヴィルジル・ド・ラ・ロシュフコーです。ロボット工学、トランスメディアエージェント、マルチロボットシステムに情熱を注いでいます。現在、日本とフランスでダブルディグリー博士課程に在籍しており、ロボット工学とAI計画の最先端の研究に取り組む機会を得ています。私は、非常に複雑なミッションを処理できる自律システムの開発を専門としています。現在の研究は、トランスメディアマルチロボットミッションの計画と実行のためのモジュールフレームワークの作成に焦点を当てています。学問の旅を通して、私はIROS 2024で自分の研究を発表するなど、尊敬される研究者や機関と協力する機会に恵まれました。ロボット技術の進歩に対する私の献身は、現実世界の問題を解決し、生活の質と効率を向上させる可能性に駆り立てられています。学問の追求に加えて、ハイキングや歴史的な場所の探索を楽しんでいます。私は、アウトドアアドベンチャーに同行してくれるジャーマンシェパードハスキーのミックス犬を飼っています。常に学び、知識を共有することに熱心です。私のプロジェクトを自由に探索し、同様の興味を共有したり質問がある場合は私に連絡してください。",
        aboutSummary: "ロボット、プランニング、AIを専門とし、マルチエージェントシステム、複雑なプランニングや行動問題に焦点をあてる。",
        projectsTitle: "プロジェクト",
        projectsContent: "私のプロジェクトの詳細とリポジトリへのリンク。",
        project1: "シスメックス株式会社のコンピュータビジョンによる赤外線パターンとクライアント識別",
        project1description: "コンピュータ・ビジョンによる顧客識別のための赤外線パターン静脈画像認識システムを開発。使用した技術 OpenCV、C++、機械学習。",
        project1media1caption: "SARミッションにおけるドローンと移動ロボットの連携シミュレーション",
        project1media2caption: "モバイルエージェントとドローンエージェント",
        project1media3caption: "Gazebo上のシミュレーション環境",
        project2: "ドローンとモバイルロボットの捜索救助協力に関する修士学位プロジェクト",
        project2description: "7人の学生からなるチームを管理し、2ヶ月間でロボット間の協調と通信のためのアルゴリズムを使用した協調システムを作成。使用した技術 OpenCV、Python、C++、ROS。",
        project2media1caption: "静脈パターンデータの取得プロセス",
        project2media2caption: "指静脈パターンのランダムな例",
        project3description: "油圧グラッピングアームと遠隔操作によるAUVの構築",
        project4description: "複数のエージェントによる移動ロボットのパトロールシナリオのシミュレーションと制御",
        project4media1caption: "迷路の中で指定されたエリアをパトロールする典型的な表現",
        project4media2caption: "マルチエージェントシステムで使用されているTurtlebot3バーガー",
        project5description: "ステレオカメラSLAMとIMUのフュージョンによる複雑なベース変動移動ロボットのローカライゼーションとマッピング",
        project5media1caption: "MUとステレオカメラのデータフュージョン実験に使用されたテスト装置",
        project5media2caption: "基本的なビジュアルステレオSLAMの出力例",
        project6description: "大阪大学竹村研究室チームとのMBZIRC2020における建物マッピングのためのSLAMとパスプランニング",
        project6media1caption: "Gazeboでシミュレーションされた建物",
        project6media2caption: "ドローンの2つの課題の表現",
        project6media3caption: "フル装備のドローン",
        project6media4caption: "RRTアルゴリズムに従った探査の進化の表現",
        project6media5caption: "神戸消防署の試験棟（日本",
        iros2024: "IROS2024 - Solving Multi-Robot Task Allocation and Planning in Trans-media Scenarios - - 複雑なトランスメディア自動プランニングミッションを解決するためのMRTA問題の抽象化と再構築",
        contactTitle: "連絡先",
        contactContent: "連絡方法。",
        contactGithub: "GitHub",
        contactGitlab: "GitLab",
        contactLinkedin: "Linkedin",
        contactEmail: "メールを送る"
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
    document.getElementById("about-summary").textContent = translations[language].aboutSummary;
    document.getElementById("projects-title").textContent = translations[language].projectsTitle;
    document.getElementById("projects-content").textContent = translations[language].projectsContent;
    document.getElementById("project1").textContent = translations[language].project1;
    document.getElementById("project1-description").textContent = translations[language].project1description;
    document.getElementById("project1-media1-caption").textContent = translations[language].project1media1caption;
    document.getElementById("project1-media2-caption").textContent = translations[language].project1media2caption;
    document.getElementById("project1-media3-caption").textContent = translations[language].project1media3caption;
    document.getElementById("project2").textContent = translations[language].project2;
    document.getElementById("project2-description").textContent = translations[language].project2description;
    document.getElementById("project2-media1-caption").textContent = translations[language].project2media1caption;
    document.getElementById("project2-media2-caption").textContent = translations[language].project2media2caption;
    document.getElementById("project3-description").textContent = translations[language].project3description;
    document.getElementById("project4-description").textContent = translations[language].project4description;
    document.getElementById("project4-media1-caption").textContent = translations[language].project4media1caption;
    document.getElementById("project4-media2-caption").textContent = translations[language].project4media2caption;
    document.getElementById("project5-description").textContent = translations[language].project5description;
    document.getElementById("project5-media1-caption").textContent = translations[language].project5media1caption;
    document.getElementById("project5-media2-caption").textContent = translations[language].project5media2caption;
    document.getElementById("project6-description").textContent = translations[language].project6description;
    document.getElementById("project6-media1-caption").textContent = translations[language].project6media1caption;
    document.getElementById("project6-media2-caption").textContent = translations[language].project6media2caption;
    document.getElementById("project6-media3-caption").textContent = translations[language].project6media3caption;
    document.getElementById("project6-media4-caption").textContent = translations[language].project6media4caption;
    document.getElementById("project6-media5-caption").textContent = translations[language].project6media5caption;
    document.getElementById("IROS2024-description").textContent = translations[language].iros2024;
    document.getElementById("contact-title").textContent = translations[language].contactTitle;
    document.getElementById("contact-content").textContent = translations[language].contactContent;
    document.getElementById("contact-github").textContent = translations[language].contactGithub;
    document.getElementById("contact-gitlab").textContent = translations[language].contactGitlab;
    document.getElementById("contact-linkedin").textContent = translations[language].contactLinkedin;
    document.getElementById("contact-email").textContent = translations[language].contactEmail;
}

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage();
});
