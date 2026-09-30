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
  lessonTabContent: {
    exploreModules: {
      title: string;
      description: string;
    };
    lessonList: {
      title: string;
      modules: {
        id: string;
        title: string;
        description: string;
      }[];
    };
    lessonContent: {
      title: string;
      description: string;
    };
    progressTracking: {
      title: string;
      description: string;
      label: string;
      percentage: number;
    };
  };
  reviewsTabContent: {
    title: string;
    description: string;
    averageRating: string;
    breakdown: {
      stars: number;
      count: number;
      percentage: number;
    }[];
    reviews: {
      id: string;
      name: string;
      role: string;
      avatar: string;
      rating: number;
      timeAgo: string;
      content: string;
    }[];
  };
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
  tabs: ["About", "Lesson", "Reviews"],
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
  lessonTabContent: {
    exploreModules: {
      title: "Explore the Modules",
      description:
        "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    },
    lessonList: {
      title: "Lesson List",
      modules: [
        {
          id: "mod-1",
          title: "Module 1: Introduction to Digital Assets",
          description:
            "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
        },
        {
          id: "mod-2",
          title: "Module 2: Design Principles for Impact",
          description:
            "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
        },
        {
          id: "mod-4",
          title: "Module 4: User-Centric Design Strategies",
          description:
            "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
        },
        {
          id: "mod-5",
          title: "Module 5: Interactive Media and Engagement",
          description:
            "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
        },
        {
          id: "mod-6",
          title: "Module 6: Project Showcase and Critique",
          description:
            "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
        },
        {
          id: "mod-7",
          title: "Module 7: Optimizing Digital Assets for Various Platforms",
          description:
            "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
        },
      ],
    },
    lessonContent: {
      title: "Lesson Content",
      description:
        "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    },
    progressTracking: {
      title: "Lesson Progress Tracking",
      description:
        "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
      label: "Learning Progress",
      percentage: 55,
    },
  },
  reviewsTabContent: {
    title: "What Learners Are Saying",
    description:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    averageRating: "4.7",
    breakdown: [
      { stars: 5, count: 720, percentage: 92.28 },
      { stars: 4, count: 120, percentage: 36.49 },
      { stars: 3, count: 21, percentage: 9.47 },
      { stars: 2, count: 12, percentage: 3.51 },
      { stars: 1, count: 16, percentage: 5.26 },
    ],
    reviews: [
      {
        id: "rev-1",
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/images/course-details/reviewer-1.png",
        rating: 5,
        timeAgo: "a year ago",
        content:
          '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        id: "rev-2",
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/course-details/reviewer-2.png",
        rating: 5,
        timeAgo: "a year ago",
        content:
          "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "rev-3",
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/images/course-details/reviewer-3.png",
        rating: 5,
        timeAgo: "a year ago",
        content:
          "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "rev-4",
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/images/course-details/reviewer-4.png",
        rating: 5,
        timeAgo: "a year ago",
        content:
          "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
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
