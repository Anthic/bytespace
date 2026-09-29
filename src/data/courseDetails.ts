export interface CourseLesson {
  id: string;
  number: string;
  title: string;
  duration: string;
}

export interface CourseFeature {
  icon: string;
  text: string;
}

export interface CourseDetailsData {
  title: string;
  subtitle: string;
  instructor: {
    prefix: string;
    name: string;
    role: string;
    avatar: string;
    bioCallout: string;
  };
  badges: {
    level: string;
    reviews: string;
    students: string;
  };
  pricing: {
    amount: string;
    period: string;
  };
  callToAction: string;
  tabs: string[];
  description: string[];
  sneakPeakImages: string[];
  keyPoints: string[];
  lessonsSummary: {
    totalLessons: string;
    totalDuration: string;
    moreVideosCount: string;
    lessons: CourseLesson[];
  };
  features: CourseFeature[];
}

export const courseDetailsData: CourseDetailsData = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  instructor: {
    prefix: "by",
    name: "purepearl studio",
    role: "Professional Creator",
    avatar: "/images/course-details/instructor-avatar.png",
    bioCallout: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
  badges: {
    level: "Intermediate",
    reviews: "4.8 (172 reviews)",
    students: "199 Students",
  },
  pricing: {
    amount: "$25",
    period: "/lifetime",
  },
  callToAction: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  tabs: ["About", "Lessons", "Reviews"],
  description: [
    `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
    `In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.`,
    `As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
  ],
  sneakPeakImages: [
    "/images/course-details/sneak-1.png",
    "/images/course-details/sneak-2.png",
    "/images/course-details/sneak-3.png",
    "/images/course-details/sneak-4.png",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  lessonsSummary: {
    totalLessons: "112 Lessons",
    totalDuration: "24 hours",
    moreVideosCount: "99 more videos",
    lessons: [
      {
        id: "l-1",
        number: "01",
        title: "Introduction to Digital Assets",
        duration: "12 mins",
      },
      {
        id: "l-2",
        number: "02",
        title: "Design Principles for Impacts",
        duration: "21 mins",
      },
      {
        id: "l-3",
        number: "03",
        title: "Advanced Techniques in Digital Creation",
        duration: "16 mins",
      },
    ],
  },
  features: [
    {
      icon: "/icons/course-details/learning-resources.svg",
      text: "Learning Resources",
    },
    {
      icon: "/icons/course-details/lesson-videos.svg",
      text: "Quality Lesson Videos",
    },
    {
      icon: "/icons/course-details/certificate.svg",
      text: "Certificate of Completion",
    },
    {
      icon: "/icons/course-details/consultation.svg",
      text: "Private Consultation",
    },
  ],
};
