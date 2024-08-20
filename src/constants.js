export const name = 'Ishan';

export const technicalSkills = {
    technologies: [
        { name: "Java", experience: 4 },
        { name: "Python", experience: 3 },
        { name: "R", experience: 2 },
        { name: "C", experience: 1 },
        { name: "C++", experience: 1 },
        { name: "HTML", experience: 2 },
        { name: "CSS", experience: 2 },
        { name: "JavaScript", experience: 2 },
        { name: "MySQL", experience: 1 },
        { name: "MongoDB", experience: 2 },
    ],
    frameworks: [
        { name: "Flutter", experience: 1 },
        { name: "React Native", experience: 1 },
        { name: "ReactJS", experience: 2 },
        { name: "Spring Boot", experience: 1 },
        { name: "MERN Stack", experience: 1 },
    ],
    developerTools: [
        { name: "Git", experience: 2 },
        { name: "Linux", experience: 3 },
        { name: "VSCode", experience: 4 },
        { name: "Android Studio", experience: 1 },
        { name: "Microsoft Azure", experience: 1 },
        { name: "Postman", experience: 2 },
        { name: "Eclipse", experience: 4 },
        { name: "IntelliJ IDEA", experience: 4 },
        { name: "Figma", experience: 1 },
    ]
};

export const skillColors = {
  Java: 'bg-purple-600',
  Python: 'bg-green-500',
  R: 'bg-blue-500',
  C: 'bg-red-600',
  'C++': 'bg-red-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  MySQL: 'bg-blue-600',
  MongoDB: 'bg-green-600',
  Flutter: 'bg-cyan-400',
  'React Native': 'bg-blue-300',
  ReactJS: 'bg-blue-500',
  'Spring Boot': 'bg-green-400',
  'MERN Stack': 'bg-teal-500',
  Git: 'bg-red-500',
  Linux: 'bg-yellow-600',
  VSCode: 'bg-blue-500',
  'Android Studio': 'bg-green-500',
  'Microsoft Azure': 'bg-blue-600',
  Postman: 'bg-orange-500',
  Eclipse: 'bg-purple-400',
  'IntelliJ IDEA': 'bg-pink-500',
  Figma: 'bg-purple-500'
};


export const experiences = [
    {
        'company': 'L&T Technology Services, Dallas TX',
        'role': 'Software Engineer Intern',
        'duration': 'June 2024 - August 2024',
        'logo': 'l&t.png',
        'points': [
            'Developed a Flutter-based visitor management system with automated ID scanning and real-time face detection, successfully launching the app on Google Play Store and App store.',
            'Integrated RESTful APIs built on Spring Boot, resulting in a 70% reduction in check-in time and enhanced multi-location security.',
            'Implemented Bluetooth printer connectivity through flutter for instant badge creation and designed an efficient system for real-time data synchronization across distributed locations.',
        ],
        'url': 'https://www.ltts.com/',
    },
    {
        'company': 'Tata Consultancy Services, Bangalore IN',
        'role': 'Software Engineer Intern',
        'duration': 'June 2023 - August 2023',
        'logo': 'tcs.png',
        'points': [
            'Developed an automated algorithm categorization system with a 4-member team, reducing manual workload for software developers by 40%.',
            'Partnered with a 5-member cross functional team (across product, engineering, sales, support) to define requirements, design, develop, and test a tool for automating data analysis saving around $20,000 within a tight timeline of 3 months.'
        ],
        'url': 'https://www.tcs.com/',
    },
    {
        'company': 'FIGHTRIGHT Technologies (AI-based Litigation start-up), Kolkata IN',
        'role': 'Data Science Intern',
        'duration': 'May 2022 - August 2022',
        'logo': 'fr.jpg',
        'points': [
            'Achieved a 75% increase in accuracy by implementing an advanced algorithm for analyzing and extracting final judgments from 60,000+ apex and high court cases across India.',
            'Innovated data cleaning techniques that reduced processing errors by 50% and saved 20 hours of labor per week, significantly enhancing the efficiency and accuracy of key data insights.'
        ],
        'url': 'https://fightright.in/',
    },
]

export const leadershipExperiences = [
    {
        'role': 'Undergraduate Teaching Assistant',
        'description': 'Guiding over 1,000 students at the UW-Madison, I transformed complex concepts into understandable lessons. My knack for creating engaging learning materials and providing personalized support not only boosted students\' confidence but also significantly improved their understanding. This role sharpened my mentorship skills and taught me the importance of patience and effective communication in leadership.',
        'image': 'peer-mentor.jpg'
    },
    {
        'role': 'National Level Squash Player',
        'description': 'Leading the West Bengal squash team to national prominence, I learned the value of strategy, discipline, and resilience. Something that started as a sibling rivalry turned into competing at the highest levels and achieving top rankings required not just physical prowess but also mental toughness. This experience instilled in me a relentless drive for excellence and the ability to lead by example, both on and off the court.',
        'image': 'squash.jpg'
    },
    {
        'role': 'WEBT Intern',
        'description': 'As a Wisconsin Experience Bus Trip Intern at UW-Madison, I successfully managed a week-long event for 40 students, showcasing my organizational and logistical skills. From budget management to event planning, I ensured everything ran smoothly. This role highlighted my ability to handle pressure, lead a team, and execute plans meticulously. It reinforced my belief in the power of detailed planning and effective team coordination.',
        'image': 'webt.jpeg'
    }
];



export const projects = [
    {
        'name': "Culinary Canvas",
        'description':
            "A simple recipe searching app that helps you search receipes based on your choice of ingredients.",
        'tags': [
            {
                'name': "React-Native",
                'color': "text-blue-500",
            },
            {
                'name': "MERN",
                'color': "text-green-500",
            },
            {
                'name': "APIs",
                'color': "text-pink-500",
            },
        ],
        'image': 'app.png',
        'source_code_link': "https://github.com/Ishan3842/Recipe-App",
    },
    {
        'name': "Weather Dashboard",
        'description': 'A weather dashboard that displays the weather for any city.',
        'tags': [
            {
                'name': "HTML",
                'color': "text-blue-500",
            },
            {
                'name': "CSS",
                'color': "text-red-500",
            },
            {
                'name': "JavaScript",
                'color': "text-yellow-500",
            },
            {
                'name': "APIs",
                'color': "text-pink-500",
            },      
            {
                'name': "React",
                'color': "text-purple-500",
            },
        ],
        'image': 'image.png',
        'source_code_link': "https://github.com/Ishan3842/Weather-Dashboard",
    } 
];

export const services = [
    {
        title: "Software Engineer",
        icon: 'swe.jpg',
    },
    {
        title: "Traveler",
        icon: 'london.jpeg',
    },
    {
        title: "Foodie",
        icon: 'foodie.jpg',
    },
    {
        title: "Athlete",
        icon: 'athlete.jpg',
    },
];

export const EMAIL_JS_SERVICE_ID = 'service_naj8uxe';
export const EMAIL_JS_TEMPLATE_ID = 'template_qiti28a';
export const EMAIL_JS_PUBLIC_KEY = 'ssS3dTKhkHdAE_N38';