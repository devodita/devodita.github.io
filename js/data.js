// ============================================================
//  DATA.JS — Edit YOUR content here. The site auto-renders.
//  Adding a publication = adding one object to the array.
//  No HTML knowledge needed for basic edits.
// ============================================================

const SITE = {

  // ── Personal Info ──────────────────────────────────────────
  name: "Devodita Chakravarty",
  taglines: [
    "Autonomous Driving Researcher",
    "Robotics & Motion Planning",
    "IIT Kharagpur · IIT Madras",
    "Belief-Space MPC · Risk-Aware Planning",
  ],
  bio: `I am a pre-final year Dual Degree (B.Tech + M.Tech) student in Mechanical Engineering
    at <a href="https://iitkgp.ac.in" target="_blank">IIT Kharagpur</a>, with a Minor in Computer Science
    and a parallel B.S. in Data Science from <a href="https://www.iitm.ac.in" target="_blank">IIT Madras</a>.
    <br><br>
    My research lies at the intersection of <strong>autonomous driving</strong>, <strong>robot motion planning</strong>,
    and <strong>risk-aware decision-making</strong>. I work on belief-space model predictive control (MPC),
    CVaR-based safety constraints, and active intent probing for interactive driving scenarios.
    <br><br>
    I currently collaborate remotely with
    <a href="https://engineering.tamu.edu/cse/profiles/lyu-yiwei.html" target="_blank">Prof.&nbsp;Yiwei&nbsp;Lyu</a>
    at Texas A&M University, and have previously worked at CMU's
    <a href="https://drive-lab-cmu.github.io/people/" target="_blank">DRIVE Lab</a>
    under <a href="https://www.ri.cmu.edu/ri-faculty/john-m-dolan/" target="_blank">Prof.&nbsp;John&nbsp;Dolan</a>.
    My goal is to pursue a PhD and eventually an academic career in robotics.`,
  profilePhoto: "assets/profile.jpeg",  // Replace with your photo
  email: "devoditac@gmail.com",
  phone: "+91-7319158229",

  // ── Social Links ───────────────────────────────────────────
  socials: [
    { platform: "GitHub",   url: "https://github.com/devodita",          icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/devodita",     icon: "linkedin" },
    { platform: "Scholar",  url: "https://scholar.google.com/citations?user=4FhRmR4AAAAJ", icon: "graduation-cap" },
    { platform: "Email",    url: "mailto:devoditac@gmail.com",           icon: "envelope" },
    { platform: "Phone",    url: "tel:+917319158229",                    icon: "phone" },
  ],

  // ── Publications ───────────────────────────────────────────
  // status: "accepted" | "review" | "report"
  publications: [
    {
      title: "When to Probe and When to Act: Clarity-Aware Risk-Adaptive Control for Interactive Driving",
      authors: "<u>Devodita Chakravarty</u>, Yiwei Lyu",
      venue: "IEEE/RSJ Int. Conf. on Intelligent Robots and Systems (IROS 2026)",
      year: 2026,
      status: "review",
      links: { /* paper: "#", code: "#" */ },
    },
    {
      title: "Diffusion Supervised Video Test Time Adaptation",
      authors: "O. Iqbal, A. Dey, <u>Devodita Chakravarty</u>, S. Marjit, O. Chakraborty, S. Basu, A. Chakraborty, A. Das",
      venue: "European Conf. on Computer Vision (ECCV 2026)",
      year: 2026,
      status: "review",
      links: {},
    },
    {
      title: "Multimodal Belief-Space Covariance Steering with Active Probing and Influence for Autonomous Driving",
      authors: "<u>Devodita Chakravarty</u>, John Dolan, Yiwei Lyu",
      venue: "IEEE Int. Conf. on Robotics and Automation (ICRA 2026)",
      year: 2026,
      status: "accepted",
      note: "First Author",
      links: { paper: "https://arxiv.org/abs/2602.14540" },
    },
    {
      title: "MultiAgent-DeepQ: A Reinforcement Learning Framework for Multi-Agent Robotic Exploration",
      authors: "D. Ghosh, <u>Devodita Chakravarty</u>",
      venue: "22nd Int. Conf. on Advanced Robotics (ICAR 2025)",
      year: 2025,
      status: "accepted",
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/11338643/" },
    },
    {
      title: "RL-BiRRT: A Reinforcement Learning-Driven Framework for Intelligent Robot Path Planning",
      authors: "D. Ghosh, <u>Devodita Chakravarty</u>, A. Gupta, D. Chakravarty",
      venue: "22nd Int. Conf. on Advanced Robotics (ICAR 2025)",
      year: 2025,
      status: "accepted",
      links: { paper: "https://ieeexplore.ieee.org/abstract/document/11338619" },
    },
    {
      title: "Anomaly Detection for Industrial Quality Assurance: A Comparative Analysis of AER and TadGAN",
      authors: "C. Biswas, <u>Devodita Chakravarty</u>, I. Ghosh, B. Nayak",
      venue: "Technical Report — collaboration with Deakin University",
      year: 2024,
      status: "report",
      links: { paper: "https://github.com/devodita/Time-Series-Anomaly-Detection-In-Industry-and-Quality-Assurance/blob/main/technical_report_ftp_final.pdf" },
    },
  ],

  // ── Research Experience ────────────────────────────────────
  research: [
    {
      role: "Research Intern (Remote)",
      org: "Texas A&M University",
      lab: "Dept. of CSE — Prof. Yiwei Lyu",
      location: "Remote",
      dates: "Sep 2025 – Present",
      bullets: [
        "Formulated a unified belief-space MPC coupling clarity-adaptive CVaR barriers with multistep information planning.",
        "Introduced clarity as an endogenous planning variable from the Riccati covariance recursion for intent estimation.",
        "Designed self-terminating probing via submodular diminishing returns, eliminating explicit mode-switching logic.",
        "Proved formal regret bounds on uncertainty-aware conservatism; validated across 4,000 simulations (91.8% success).",
      ],
    },
    {
      role: "Research Intern",
      org: "Carnegie Mellon University",
      lab: "DRIVE Lab, Robotics Institute — Prof. John Dolan",
      location: "Pittsburgh, USA",
      dates: "Nov 2024 – Sep 2025",
      bullets: [
        "Developed a hierarchical Bayesian belief model for multimodal human intent prediction in interactive driving.",
        "Designed risk-aware active probing with CVaR-based covariance steering for safe planning under uncertainty.",
        "Implemented MPC-based multimodal trajectory optimization; evaluated across 1,000+ interactive simulations.",
        "Achieved 96% merge success rate with significantly reduced decision latency vs. baseline planners.",
      ],
    },
    {
      role: "Computer Vision Intern",
      org: "IIT Gandhinagar",
      lab: "Sustainability Lab — Prof. Nipun Batra",
      location: "Gandhinagar, India",
      dates: "May 2024 – Jul 2024",
      bullets: [
        "Applied super-resolution (SRCNN, ESRGAN) on Sentinel-2 imagery to improve industrial structure detection.",
        "Integrated YOLO detection pipelines for brick kiln identification and environmental monitoring.",
        "Evaluated temporal pollution trends; presented data-driven findings for scalable monitoring.",
      ],
    },
    {
      role: "ML Intern (Remote)",
      org: "Deakin University, Australia",
      lab: "TULIP Lab — Prof. Ye Zhu",
      location: "Remote",
      dates: "Feb 2024 – Aug 2024",
      bullets: [
        "Utilized TadGAN and Autoencoder Regression (AER) for anomaly detection in time-series data.",
        "Assessed model performance with AUC-ROC up to 0.997 on NASA, SCADA, and other datasets.",
      ],
    },
    {
      role: "Summer Trainee",
      org: "IIRS, ISRO",
      lab: "Digital Image Processing",
      location: "Dehradun, India",
      dates: "Jul 2023",
      bullets: [
        "Applied remote sensing and GIS techniques for flood risk mapping using ERDAS, ILWIS, ArcGIS.",
      ],
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree: "Dual Degree (B.Tech + M.Tech)",
      field: "Mechanical Engineering",
      minor: "Minor in Computer Science & Engineering",
      institute: "Indian Institute of Technology Kharagpur",
      years: "2022 – 2027",
      cgpa: "8.39 / 10",
      coursework: "Mechatronics, Robotics, Algorithms, Data Structures, Machine Learning, Linear Algebra, Dynamics, Soft Computing",
    },
    {
      degree: "Bachelor of Science",
      field: "Data Science and Applications (Online)",
      institute: "Indian Institute of Technology Madras",
      years: "2023 – 2027",
      cgpa: "9.43 / 10",
      coursework: "ML Foundations & Techniques, DBMS, Statistics, DSA in Python",
    },
  ],

  // ── Skills ─────────────────────────────────────────────────
  skills: {
    "Languages & Platforms": ["Python", "C++", "C", "MATLAB", "SQL", "Linux", "ROS 1/2", "Gazebo"],
    "Libraries & Tools":     ["PyTorch", "OpenCV", "NumPy", "Matplotlib", "Git", "SolidWorks", "Arduino"],
    "Research Areas":        ["Motion Planning", "Model Predictive Control", "Probabilistic Modeling",
                              "Risk-Aware Planning", "Belief-Space Optimization", "Multi-Agent Systems",
                              "Computer Vision", "Test-Time Adaptation"],
    "Languages":             ["English", "Hindi", "Bengali", "German (A1)"],
  },

  // ── Awards ─────────────────────────────────────────────────
  awards: [
    "Bhalodia-Khetan Summer Research Award — Ranked 1st among 200+ engineering interns, IIT Gandhinagar",
    "Gold Overall & 2nd place (ISRO Problem Statement) among 20+ IITs at the 13th InterIIT Tech Meet",
    "2nd position among 20 hostels in IIT Kharagpur GC for Hardware Modelling",
    "$7,150+ grant by KGPF Scholarship and CMU for research in the USA",
    "Certificate of Merit, top 1% in AI4ICPS (IIT Kharagpur) & TCS iON",
    "Qualified JEE Advanced 2022 — Top 1% nationally among 1M+ candidates",
    "Qualified Pre-Regional Mathematics Olympiad (PRMO) 2020",
  ],

  // ── Positions of Responsibility ────────────────────────────
  positions: [
    { role: "Advisor, Autonomous Ground Vehicle (AGV.AI)", org: "IIT Kharagpur", dates: "2023 – Present",
      desc: "Led technical discussions and research reading groups on autonomous driving and motion planning." },
    { role: "Advisor, Kharagpur Data Analytics Group (KDAG)", org: "IIT Kharagpur", dates: "2023 – Present",
      desc: "Organized a nationwide data science hackathon with 6,000+ registrations." },
    { role: "Head, SPICMACAY Chapter", org: "IIT Kharagpur", dates: "2024 – Present",
      desc: "Organized events with esteemed personalities; coordinated cultural awareness initiatives." },
    { role: "Student Lecturer, Winter School of AI and Robotics", org: "IIT Kharagpur", dates: "Dec 2023",
      desc: "Delivered a machine learning workshop for 40 students." },
  ],

  // ── Footer ─────────────────────────────────────────────────
  footerNote: "Last updated: March 2026",
};
