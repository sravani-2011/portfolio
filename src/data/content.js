// Single source of truth for every piece of text on the site.
// Edit here — the components read from this file.

export const profile = {
  name: 'Sravani Devaguptapu',
  shortName: 'Sravani',
  logo: 'Sravani',
  role: 'Cloud & AI Engineer',
  tagline:
    'I build production-grade applications with Python, FastAPI and Docker, deploy them on AWS, and ship ML/AI systems with measurable outcomes.',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'sd1442@srmist.edu.in',
  github: 'https://github.com/sravani-2011',
  githubHandle: 'sravani-2011',
  linkedin: 'https://linkedin.com/in/sravani-devaguptapu-576906295',
  linkedinHandle: 'sravani-devaguptapu',
  resume: '/sravani_resume.pdf',
  intro:
    'a final-year B.Tech CSE (Cloud Computing) student at SRMIST with a 9.07 CGPA. I work across the full SDLC — requirements, design, development, testing, deployment and documentation — and I like shipping things that hold up in production, not just in a notebook.',
}

export const stats = [
  { value: '9.07', label: 'CGPA / 10' },
  { value: '3', label: 'Cloud certifications' },
  { value: '284K+', label: 'Records processed' },
  { value: '1st', label: 'Prize, NWC Expo 2026' },
]

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'SQL', 'Bash / Shell', 'HTML / CSS'],
  },
  {
    title: 'Frameworks & APIs',
    items: [
      'FastAPI',
      'Flask',
      'REST API Design',
      'Streamlit',
      'LangChain',
      'Microservice architecture',
      'React',
      'Node',
    ],
  },
  {
    title: 'Dev & Testing',
    items: [
      'Unit & integration testing',
      'GitHub Actions (CI/CD)',
      'Docker',
      'Git',
      'Agile / SDLC',
      'Technical documentation',
    ],
  },
  {
    title: 'Cloud & Infra',
    items: [
      'AWS EC2 · S3 · RDS',
      'ECS · EMR · SNS · SQS',
      'CloudFormation',
      'Azure (DP-900)',
      'Nginx',
      'Containerization',
    ],
  },
  {
    title: 'Data & Analytics',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'XGBoost',
      'SHAP (Explainable AI)',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    title: 'AI & ML',
    items: [
      'PyTorch',
      'TensorFlow',
      'HuggingFace Transformers',
      'ChromaDB',
      'LLaMA-3.3-70B',
      'RAG pipelines',
      'NLP',
      'Computer Vision',
    ],
  },
]

// Scrolling ticker under the hero.
export const marquee = [
  'Python',
  'FastAPI',
  'AWS',
  'Docker',
  'PyTorch',
  'LangChain',
  'SQL',
  'RAG',
  'XGBoost',
  'Streamlit',
  'Nginx',
  'CI/CD',
]

export const projects = [
  {
    number: '01',
    title: 'Fraud Detection & Risk Scoring',
    kicker: 'Full-Stack Application · Data & Analytics',
    text: 'End-to-end system over 284K+ financial transactions — ingestion, feature engineering, model, REST API, dashboard and docs, delivered solo. FastAPI serves real-time risk scores at 120ms latency; Dockerized, with Nginx load balancing for 500+ concurrent requests. SHAP turns model output into business-readable reasons.',
    stack: ['Python', 'FastAPI', 'XGBoost', 'SHAP', 'SMOTE', 'Docker', 'Streamlit', 'Nginx'],
    metrics: [
      { value: '120ms', label: 'API latency' },
      { value: '500+', label: 'Concurrent reqs' },
      { value: '284K', label: 'Transactions' },
    ],
  },
  {
    number: '02',
    title: 'NexGen Tutor AI',
    kicker: 'Full-Stack SaaS · AI Application Development',
    text: 'An AI learning assistant designed, built, tested and deployed independently, with a modular microservice-style backend supporting multi-user concurrent workflows across 8 feature modules. A hallucination-detection module runs as an integration-level quality gate. Won First Prize at NWC Expo 2026.',
    stack: ['LangChain', 'LLaMA-3.3-70B', 'ChromaDB', 'Groq API', 'RAG', 'FastAPI', 'Streamlit'],
    metrics: [
      { value: '91%', label: 'Hallucination precision' },
      { value: '0.74', label: 'ROUGE-L F1' },
      { value: '6.7%', label: 'Hallucination rate' },
    ],
  },
  {
    number: '03',
    title: 'Bidirectional Chest X-Ray Framework',
    kicker: 'Summer Research Internship, NWC SRMIST · Deep Learning',
    text: 'A joint deep learning model in PyTorch that denoises chest X-rays and localizes pathology simultaneously, built to functional requirements with measurable quality gates. Root-caused and fixed three defects — a normalization bug, a scale misconfiguration and an evaluation threshold error — then shipped a Flask demo from ingestion through inference to annotated output.',
    stack: ['PyTorch', 'ResNet-50', 'BiFPN', 'FiLM', 'FCOS', 'Flask', 'Synthetic Data'],
    metrics: [
      { value: '0.122', label: 'mAP@0.5' },
      { value: '4.2×', label: 'Over baseline' },
      { value: '3', label: 'Defects resolved' },
    ],
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', period: 'Feb 2026 – Feb 2029' },
  { name: 'AWS Certified Cloud Practitioner', period: 'Feb 2026 – Feb 2029' },
  { name: 'Microsoft Azure Data Fundamentals (DP-900)', period: 'Apr 2026' },
]

export const education = [
  {
    school: 'SRM Institute of Science and Technology, Kattankulathur',
    detail: 'B.Tech, Computer Science and Engineering — Cloud Computing',
    score: 'CGPA 9.07 / 10',
    period: 'Expected 2027',
  },
  {
    school: 'FIITJEE, Vijayawada',
    detail: 'Class XII — BIEAP, MPC',
    score: '90.6%',
    period: '2023',
  },
  {
    school: 'Sri Chaitanya High School, Vijayawada',
    detail: 'Class X — Board of Secondary Education',
    score: '100%',
    period: '2021',
  },
]

export const navLinks = ['Home', 'About', 'Projects', 'Resume', 'Contact']
