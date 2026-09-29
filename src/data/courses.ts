export interface CourseItem {
  id: string;
  title: string;
  instructor: {
    prefix: string;
    name: string;
  };
  image: string;
  badgeLessons: string;
  badgeDuration: string;
  badgeComments: string;
  level: string;
  studentAvatars: string[];
  studentCountText: string;
  price: string;
  pricePeriod: string;
  rating: string;
}

export const coursesHeaderData = {
  title: "Discover Your Passion, Build Your Skills",
  subtitle:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
};

export const courseCategoryPills = {
  row1: [
    { id: "featured", label: "Featured", active: true },
    { id: "music", label: "Music", active: false },
    { id: "drawing-painting", label: "Drawing & Painting", active: false },
    { id: "marketing", label: "Marketing", active: false },
    { id: "animation", label: "Animation", active: false },
    { id: "social-media", label: "Social Media", active: false },
    { id: "ui-ux", label: "UI/UX Design", active: false },
    { id: "creative-marketing", label: "Creative Marketing", active: false },
  ],
  row2: [
    { id: "digital-illustration", label: "Digital Illustration", active: false },
    { id: "film-video", label: "Film & Video", active: false },
    { id: "crafts", label: "Crafts", active: false },
    { id: "freelance", label: "Freelance & Entrepreneurship", active: false },
    { id: "graphic-design", label: "Graphic Design", active: false },
    { id: "photography", label: "Photography", active: false },
  ],
  row3: [
    { id: "productivity", label: "Productivity", active: false },
    { id: "web-dev", label: "Web Development", active: false },
    { id: "data-science", label: "Data Science", active: false },
    { id: "cooking", label: "Cooking", active: false },
    { id: "more", label: "+ More", active: false, isMore: true },
  ],
};

export const coursesListData: CourseItem[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    instructor: {
      prefix: "by ",
      name: "purepearl studio",
    },
    image: "/images/courses/course-1.png",
    badgeLessons: "17 Lessons",
    badgeDuration: "2 hours 16 mins",
    badgeComments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/images/courses/avatar-c1.png",
      "/images/courses/avatar-c2.png",
      "/images/courses/avatar-c3.png",
      "/images/courses/avatar-c4.png",
    ],
    studentCountText: "26+",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: "4.5",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    instructor: {
      prefix: "by ",
      name: "purepearl studio",
    },
    image: "/images/courses/course-2.png",
    badgeLessons: "17 Lessons",
    badgeDuration: "2 hours 16 mins",
    badgeComments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/images/courses/avatar-c1.png",
      "/images/courses/avatar-c2.png",
      "/images/courses/avatar-c3.png",
      "/images/courses/avatar-c4.png",
    ],
    studentCountText: "26+",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: "4.5",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    instructor: {
      prefix: "by ",
      name: "purepearl studio",
    },
    image: "/images/courses/course-3.png",
    badgeLessons: "17 Lessons",
    badgeDuration: "2 hours 16 mins",
    badgeComments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/images/courses/avatar-c1.png",
      "/images/courses/avatar-c2.png",
      "/images/courses/avatar-c3.png",
      "/images/courses/avatar-c4.png",
    ],
    studentCountText: "26+",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: "4.5",
  },
  {
    id: "course-4",
    title: "Balancing Productivity and Self-Care",
    instructor: {
      prefix: "by ",
      name: "purepearl studio",
    },
    image: "/images/courses/course-4.png",
    badgeLessons: "17 Lessons",
    badgeDuration: "2 hours 16 mins",
    badgeComments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/images/courses/avatar-c1.png",
      "/images/courses/avatar-c2.png",
      "/images/courses/avatar-c3.png",
      "/images/courses/avatar-c4.png",
    ],
    studentCountText: "26+",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: "4.5",
  },
  {
    id: "course-5",
    title: "Mastering Money Management",
    instructor: {
      prefix: "by ",
      name: "purepearl studio",
    },
    image: "/images/courses/course-5.png",
    badgeLessons: "17 Lessons",
    badgeDuration: "2 hours 16 mins",
    badgeComments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/images/courses/avatar-c1.png",
      "/images/courses/avatar-c2.png",
      "/images/courses/avatar-c3.png",
      "/images/courses/avatar-c4.png",
    ],
    studentCountText: "26+",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: "4.5",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Success",
    instructor: {
      prefix: "by ",
      name: "purepearl studio",
    },
    image: "/images/courses/course-6.png",
    badgeLessons: "17 Lessons",
    badgeDuration: "2 hours 16 mins",
    badgeComments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/images/courses/avatar-c1.png",
      "/images/courses/avatar-c2.png",
      "/images/courses/avatar-c3.png",
      "/images/courses/avatar-c4.png",
    ],
    studentCountText: "26+",
    price: "$25",
    pricePeriod: "/lifetime",
    rating: "4.5",
  },
];
