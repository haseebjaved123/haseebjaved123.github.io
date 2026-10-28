/* Publication, news, and dataset records for Haseeb Javed. */
window.SITE = {
  news: [
    { year: "2026", date: "2026", highlight: true, html: "<strong>Adaptive Consent</strong> was published in the Proceedings of the AAAI Symposium Series, vol. 9, no. 1, pp. 152–156." },
    { year: "2026", date: "2026", highlight: true, html: "The <strong>LLM–NLP survey</strong> appeared in the Journal of Big Data, vol. 13, no. 1 (IF: 6.4 | SCIE | Top 10%)." },
    { year: "2026", date: "2026", html: "<strong>DepressXLM-PEFT</strong>, a multi-LoRA depression language-model manuscript, is in preparation." },
    { year: "2025", date: "2025", highlight: true, html: "<strong>MediGuard</strong> was published in the IEEE Journal of Biomedical and Health Informatics (IF: 6.8 | SCIE | Top 5%)." },
    { year: "2025", date: "2025", html: "The <strong>medical-diagnostics robustness survey</strong> was published in Artificial Intelligence Review, vol. 58, no. 1 (IF: 18.8 | SCIE | Top 5%)." },
    { year: "2025", date: "2025", html: "Binary code analysis for cybersecurity was published in IEEE Access, vol. 13, pp. 167139–167164 (IF: 3.6 | SCIE)." },
    { year: "2025", date: "2025", html: "Sustainable energy management in the AI era was published in Computing, vol. 107, no. 6 (IF: 2.8 | SCIE | Q2)." },
    { year: "2024", date: "2024", html: "Two applied-ML papers — healthcare ensembles and ethical frameworks for sensitive healthcare — were published in IEEE Access, vol. 12 (IF: 3.6 | SCIE)." },
    { year: "2022", date: "2022", html: "Began doctoral research in Computer Science and Engineering at Sungkyunkwan University. Campus-microgrid scheduling appeared in Sensors, vol. 22, no. 16 (IF: 3.5 | SCIE | Q2)." },
    { year: "2021", date: "2021", html: "Optimal energy management of a campus microgrid was published in Energies, vol. 14, no. 24 (IF: 3.2 | SCIE | Q3). <strong>Design, Model and Planning of Prosumer Microgrid for MNSUET Multan Campus</strong> appeared in Sir Syed University Research Journal of Engineering &amp; Technology, vol. 11, no. 2." }
  ],

  pubs: [
    {
      year: 2026, type: "conference", area: "ml", featured: true, featuredOrder: 3,
      badge: "AAAI Symposium", short: "Adaptive Consent",
      title: "Adaptive Consent in Crisis AI: A Privacy-Ethics Framework for Continual Data Use in Resilient Communities",
      authors: "Haseeb Javed, Shynar Mussiraliyeva, Hayoung Oh, Farman Ali",
      venue: "Proceedings of the AAAI Symposium Series, vol. 9, no. 1, pp. 152–156, 2026",
      img: "assets/figures/consent.png", alt: "Adaptive Consent reuse gates",
      links: { paper: "https://doi.org/10.1609/aaaiss.v9i1.42918", code: "https://github.com/haseebjaved123/AdaptiveConsent_AAAI_2026" },
      bibtex: "@article{javed2026adaptive,\n  title={Adaptive Consent in Crisis AI: A Privacy-Ethics Framework for Continual Data Use in Resilient Communities},\n  author={Javed, Haseeb and Mussiraliyeva, Shynar and Oh, Hayoung and Ali, Farman},\n  journal={Proceedings of the AAAI Symposium Series},\n  volume={9},\n  number={1},\n  pages={152--156},\n  year={2026},\n  doi={10.1609/aaaiss.v9i1.42918}\n}"
    },
    {
      year: 2026, type: "journal", area: "ml", featured: true, featuredOrder: 5,
      badge: "J. Big Data", short: "LLM–NLP survey",
      title: "Large Language Models in NLP: Evolution, Architectural Trends, and Open Challenges",
      authors: "Haseeb Javed, Babar Shah, Farman Ali, Daehan Kwak",
      venue: "Journal of Big Data, vol. 13, no. 1, 2026",
      metrics: "IF: 6.4 | SCIE | Top 10%",
      img: "assets/figures/llm-evolution.png", alt: "Evolution of AI architectures from rule-based systems to multimodal models",
      links: { paper: "https://doi.org/10.1186/s40537-026-01429-1", code: "https://github.com/haseebjaved123/LLM_NLP_JBD_2026" },
      bibtex: "@article{javed2026llm,\n  title={Large Language Models in NLP: Evolution, Architectural Trends, and Open Challenges},\n  author={Javed, Haseeb and Shah, Babar and Ali, Farman and Kwak, Daehan},\n  journal={Journal of Big Data},\n  volume={13},\n  number={1},\n  year={2026},\n  doi={10.1186/s40537-026-01429-1}\n}"
    },
    {
      year: 2026, type: "manuscript", area: "ml", featured: true, featuredOrder: 2,
      badge: "Manuscript", short: "DepressXLM",
      title: "DepressXLM-PEFT: Parameter-Efficient Instruction Tuning with Multi-LoRA for a Depression-Centric LLM",
      authors: "Haseeb Javed, Hayoung Oh, Manel Ayadi, Daehan Kwak, Farman Ali",
      venue: "Manuscript in preparation. No DOI yet.",
      img: "assets/figures/depressxlm_arch.png", alt: "DepressXLM multi-LoRA architecture",
      links: { code: "https://github.com/haseebjaved123/DepressXLM_PEFT" },
      bibtex: "@unpublished{javed2026depressxlm,\n  title={DepressXLM-PEFT: Parameter-Efficient Instruction Tuning with Multi-LoRA for a Depression-Centric LLM},\n  author={Javed, Haseeb and Oh, Hayoung and Ayadi, Manel and Kwak, Daehan and Ali, Farman},\n  note={Manuscript in preparation},\n  year={2026}\n}"
    },
    {
      year: 2025, type: "journal", area: "ml", featured: true, featuredOrder: 1,
      badge: "IEEE JBHI", short: "MediGuard",
      title: "MediGuard: Protecting Sensitive Healthcare Data with Privacy-Preserving Language Models",
      authors: "Haseeb Javed, Farman Ali, Babar Shah, Naqqash Dilshad, Daehan Kwak",
      venue: "IEEE Journal of Biomedical and Health Informatics, 2025",
      metrics: "IF: 6.8 | SCIE | Top 5%",
      img: "assets/figures/mediguard.png", alt: "MediGuard privacy-preserving pipeline",
      links: { paper: "https://doi.org/10.1109/jbhi.2025.3602983", code: "https://github.com/haseebjaved123/MediGuard_JBHI_2025" },
      bibtex: "@article{javed2025mediguard,\n  title={MediGuard: Protecting Sensitive Healthcare Data with Privacy-Preserving Language Models},\n  author={Javed, Haseeb and Ali, Farman and Shah, Babar and Dilshad, Naqqash and Kwak, Daehan},\n  journal={IEEE Journal of Biomedical and Health Informatics},\n  year={2025},\n  doi={10.1109/jbhi.2025.3602983}\n}"
    },
    {
      year: 2025, type: "journal", area: "ml", featured: true, featuredOrder: 4,
      badge: "AI Review", short: "Medical-DL robustness",
      title: "Robustness in Deep Learning Models for Medical Diagnostics: Security and Adversarial Challenges Towards Robust AI Applications",
      authors: "Haseeb Javed, Shaker El-Sappagh, Tamer Abuhmed",
      venue: "Artificial Intelligence Review, vol. 58, no. 1, 2025",
      metrics: "IF: 18.8 | SCIE | Top 5%",
      img: "assets/figures/adversarial-perturbations.png", alt: "Adversarial perturbations in medical diagnostics, with chest X-ray and fundus images",
      links: { paper: "https://doi.org/10.1007/s10462-024-11005-9", code: "https://github.com/haseebjaved123/MedicalDL_AIR_2025" },
      bibtex: "@article{javed2025robustness,\n  title={Robustness in Deep Learning Models for Medical Diagnostics: Security and Adversarial Challenges Towards Robust AI Applications},\n  author={Javed, Haseeb and El-Sappagh, Shaker and Abuhmed, Tamer},\n  journal={Artificial Intelligence Review},\n  volume={58},\n  number={1},\n  year={2025},\n  doi={10.1007/s10462-024-11005-9}\n}"
    },
    {
      year: 2025, type: "journal", area: "ml",
      badge: "IEEE Access", short: "Binary Code Analysis",
      title: "Binary Code Analysis for Cybersecurity: A Systematic Review of Forensic Techniques in Vulnerability Detection and Anti-Evasion Strategies",
      authors: "Haseeb Javed, Farman Ali, Babar Shah, Daehan Kwak",
      venue: "IEEE Access, vol. 13, pp. 167139–167164, 2025",
      metrics: "IF: 3.6 | SCIE",
      img: "assets/figures/binary.jpg", alt: "Binary-code fingerprint taxonomy",
      links: { paper: "https://doi.org/10.1109/access.2025.3610616", code: "https://github.com/haseebjaved123/BinaryCode_Access_2025" },
      bibtex: "@article{javed2025binary,\n  title={Binary Code Analysis for Cybersecurity: A Systematic Review of Forensic Techniques in Vulnerability Detection and Anti-Evasion Strategies},\n  author={Javed, Haseeb and Ali, Farman and Shah, Babar and Kwak, Daehan},\n  journal={IEEE Access},\n  volume={13},\n  pages={167139--167164},\n  year={2025},\n  doi={10.1109/access.2025.3610616}\n}"
    },
    {
      year: 2025, type: "journal", area: "energy",
      badge: "Computing", short: "Energy AI",
      title: "Sustainable Energy Management in the AI Era: A Comprehensive Analysis of ML and DL Approaches",
      authors: "Haseeb Javed, Fatma Eid, Shaker El-Sappagh, Tamer Abuhmed",
      venue: "Computing, vol. 107, no. 6, 2025",
      metrics: "IF: 2.8 | SCIE | Q2",
      img: "assets/figures/energy.jpg", alt: "AI and machine-learning diagram from the energy survey",
      links: { paper: "https://doi.org/10.1007/s00607-025-01485-0", code: "https://github.com/haseebjaved123/EnergyAI_Computing_2025" },
      bibtex: "@article{javed2025energy,\n  title={Sustainable Energy Management in the AI Era: A Comprehensive Analysis of ML and DL Approaches},\n  author={Javed, Haseeb and Eid, Fatma and El-Sappagh, Shaker and Abuhmed, Tamer},\n  journal={Computing},\n  volume={107},\n  number={6},\n  year={2025},\n  doi={10.1007/s00607-025-01485-0}\n}"
    },
    {
      year: 2024, type: "journal", area: "ml",
      badge: "IEEE Access", short: "Healthcare Ensemble",
      title: "Impact of AI and Dynamic Ensemble Techniques in Enhancing Healthcare Services: Opportunities and Ethical Challenges",
      authors: "Haseeb Javed, Hafiz Abdul Muqeet, A. Danesh, A. Rehman, T. Javed, A. Bermak",
      venue: "IEEE Access, vol. 12, pp. 141064–141087, 2024",
      metrics: "IF: 3.6 | SCIE",
      img: "assets/figures/ensemble.png", alt: "Dynamic ensemble healthcare diagram",
      links: { paper: "https://doi.org/10.1109/access.2024.3443812", code: "https://github.com/haseebjaved123/HealthcareEnsemble_Access_2024" },
      bibtex: "@article{javed2024ensemble,\n  title={Impact of AI and Dynamic Ensemble Techniques in Enhancing Healthcare Services: Opportunities and Ethical Challenges},\n  author={Javed, Haseeb and Muqeet, Hafiz Abdul and Danesh, A. and Rehman, A. and Javed, T. and Bermak, A.},\n  journal={IEEE Access},\n  volume={12},\n  pages={141064--141087},\n  year={2024},\n  doi={10.1109/access.2024.3443812}\n}"
    },
    {
      year: 2024, type: "journal", area: "ml", featured: true, featuredOrder: 6,
      badge: "IEEE Access", short: "Ethical ML",
      title: "Ethical Frameworks for Machine Learning in Sensitive Healthcare Applications",
      authors: "Haseeb Javed, Hafiz Abdul Muqeet, T. Javed, A. Rehman, R. Sadiq",
      venue: "IEEE Access, vol. 12, pp. 16233–16254, 2024",
      metrics: "IF: 3.6 | SCIE",
      img: "assets/figures/ethical.png", alt: "Ethical and legal pillars for healthcare machine learning",
      links: { paper: "https://doi.org/10.1109/access.2023.3340884", code: "https://github.com/haseebjaved123/EthicalML_Access_2024" },
      bibtex: "@article{javed2024ethical,\n  title={Ethical Frameworks for Machine Learning in Sensitive Healthcare Applications},\n  author={Javed, Haseeb and Muqeet, Hafiz Abdul and Javed, T. and Rehman, A. and Sadiq, R.},\n  journal={IEEE Access},\n  volume={12},\n  pages={16233--16254},\n  year={2024},\n  doi={10.1109/access.2023.3340884}\n}"
    },
    {
      year: 2022, type: "journal", area: "energy",
      badge: "UWJST",
      title: "A Comparative Analysis of Artificial Intelligence and Machine Learning Approach to Estimate Currents in Electrical Power Transmission Lines",
      authors: "Haseeb Javed, Muhammad Shahzad Pansota, Hamza Ali Khan, Ali Rehman",
      venue: "University of Wah Journal of Science and Technology, vol. 6, pp. 45–53, 2022",
      img: "assets/figures/uwjst.png", alt: "Transmission-line current estimation process",
      links: { paper: "https://doi.org/10.56220/uwjst.v6i0.71", code: "https://github.com/haseebjaved123/TransCurrents_UWJST_2022" },
      bibtex: "@article{javed2022currents,\n  title={A Comparative Analysis of Artificial Intelligence and Machine Learning Approach to Estimate Currents in Electrical Power Transmission Lines},\n  author={Javed, Haseeb and Pansota, Muhammad Shahzad and Khan, Hamza Ali and Rehman, Ali},\n  journal={University of Wah Journal of Science and Technology},\n  volume={6},\n  pages={45--53},\n  year={2022},\n  doi={10.56220/uwjst.v6i0.71}\n}"
    },
    {
      year: 2022, type: "journal", area: "energy",
      badge: "Sensors",
      title: "Scheduling and Sizing of Campus Microgrid Considering Demand Response and Economic Analysis",
      authors: "Bin Li, Muhammad Shahzad, Haseeb Javed, Hafiz Abdul Muqeet, Muhammad Naveed Akhter, Rehan Liaqat",
      venue: "Sensors, vol. 22, no. 16, 6150, 2022",
      metrics: "IF: 3.5 | SCIE | Q2",
      img: "assets/figures/sensors.png", alt: "Campus microgrid scheduling and sizing study",
      links: { paper: "https://doi.org/10.3390/s22166150", code: "https://github.com/haseebjaved123/CampusMG_Sensors_2022" },
      bibtex: "@article{li2022scheduling,\n  title={Scheduling and Sizing of Campus Microgrid Considering Demand Response and Economic Analysis},\n  author={Li, Bin and Shahzad, Muhammad and Javed, Haseeb and Muqeet, Hafiz Abdul and Akhter, Muhammad Naveed and Liaqat, Rehan},\n  journal={Sensors},\n  volume={22},\n  number={16},\n  pages={6150},\n  year={2022},\n  doi={10.3390/s22166150}\n}"
    },
    {
      year: 2021, type: "journal", area: "energy",
      badge: "Energies",
      title: "Optimal Energy Management of a Campus Microgrid Considering Financial and Economic Analysis with Demand Response Strategies",
      authors: "Haseeb Javed, Hafiz Abdul Muqeet, Moazzam Shehzad, Mohsin Jamil, Ashraf Ali Khan, Josep M. Guerrero",
      venue: "Energies, vol. 14, no. 24, 8501, 2021",
      metrics: "IF: 3.2 | SCIE | Q3",
      img: "assets/figures/energies.png", alt: "Proposed campus microgrid energy-management structure",
      links: { paper: "https://doi.org/10.3390/en14248501", code: "https://github.com/haseebjaved123/CampusMG_Energies_2021" },
      bibtex: "@article{javed2021optimal,\n  title={Optimal Energy Management of a Campus Microgrid Considering Financial and Economic Analysis with Demand Response Strategies},\n  author={Javed, Haseeb and Muqeet, Hafiz Abdul and Shehzad, Moazzam and Jamil, Mohsin and Khan, Ashraf Ali and Guerrero, Josep M.},\n  journal={Energies},\n  volume={14},\n  number={24},\n  pages={8501},\n  year={2021},\n  doi={10.3390/en14248501}\n}"
    },
    {
      year: 2021, type: "journal", area: "energy",
      badge: "SSURJET",
      title: "Design, Model and Planning of Prosumer Microgrid for MNSUET Multan Campus",
      authors: "Haseeb Javed, Hafiz Abdul Muqeet",
      venue: "Sir Syed University Research Journal of Engineering & Technology, vol. 11, no. 2, 2021",
      img: "assets/figures/prosumer.png", alt: "Rooftop PV layout for the MNSUET Multan campus microgrid",
      links: { paper: "https://doi.org/10.33317/ssurj.381", code: "https://github.com/haseebjaved123/ProsumerMG_SSURJET_2021" },
      bibtex: "@article{javed2021prosumer,\n  title={Design, Model and Planning of Prosumer Microgrid for MNSUET Multan Campus},\n  author={Javed, Haseeb and Muqeet, Hafiz Abdul},\n  journal={Sir Syed University Research Journal of Engineering and Technology},\n  volume={11},\n  number={2},\n  year={2021},\n  doi={10.33317/ssurj.381}\n}"
    }
  ],

  datasets: [
    {
      tagline: "Depression-language training sources",
      name: "DepressXLM corpora",
      description: "The DepressXLM manuscript draws on public depression-language corpora (Dreaddit, SDCNL, HelaDepDet, and DepressionEmo) together with credentialed MIMIC-IV clinical notes. MIMIC-IV is not redistributed. Code and documentation live in the paper repository.",
      links: { dataset: "https://github.com/haseebjaved123/DepressXLM_PEFT", paper: null },
      bibtex: "@unpublished{javed2026depressxlm,\n  title={DepressXLM-PEFT: Parameter-Efficient Instruction Tuning with Multi-LoRA for a Depression-Centric LLM},\n  author={Javed, Haseeb and Oh, Hayoung and Ayadi, Manel and Kwak, Daehan and Ali, Farman},\n  note={Manuscript in preparation},\n  year={2026}\n}"
    },
    {
      tagline: "Privacy-preserving consultation protocol",
      name: "MediGuard materials",
      description: "Evaluation protocol, figures, and implementation notes for privacy-preserving clinical consultation are documented in the MediGuard repository and the IEEE JBHI paper. No patient-level dataset is released from this work.",
      links: { dataset: "https://github.com/haseebjaved123/MediGuard_JBHI_2025", paper: "https://doi.org/10.1109/jbhi.2025.3602983" },
      bibtex: "@article{javed2025mediguard,\n  title={MediGuard: Protecting Sensitive Healthcare Data with Privacy-Preserving Language Models},\n  author={Javed, Haseeb and Ali, Farman and Shah, Babar and Dilshad, Naqqash and Kwak, Daehan},\n  journal={IEEE Journal of Biomedical and Health Informatics},\n  year={2025},\n  doi={10.1109/jbhi.2025.3602983}\n}"
    }
  ]
};
