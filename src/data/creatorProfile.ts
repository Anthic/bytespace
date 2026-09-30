export interface CreatorCourse {
  id: string;
  title: string;
  author: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: string;
  level: string;
  price: string;
  period: string;
  thumbnail: string;
  href: string;
}

export interface CreatorProfileData {
  name: string;
  badge: string;
  role: string;
  avatar: string;
  bio: string[];
  stats: {
    productsCount: string;
    productsLabel: string;
    followersCount: string;
    followersLabel: string;
  };
  followButtonText: string;
  courses: CreatorCourse[];
  studentAvatars: string[];
  moreStudentsCount: string;
}

export const creatorProfileData: CreatorProfileData = {
  name: "PurePearl Studio",
  badge: "Creator",
  role: "Passionate UI/UX, Web designer",
  avatar: "/images/creator-profile/creator-avatar.png",
  bio: [
    "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  stats: {
    productsCount: "3",
    productsLabel: "Products",
    followersCount: "12",
    followersLabel: "Followers",
  },
  followButtonText: "Follow",
  studentAvatars: [
    "/images/creator-profile/student-1.png",
    "/images/creator-profile/student-2.png",
    "/images/creator-profile/student-3.png",
    "/images/creator-profile/student-4.png",
  ],
  moreStudentsCount: "26+",
  courses: [
    {
      id: "course-1",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
      thumbnail: "/images/creator-profile/course-1.png",
      href: "/course-details",
    },
    {
      id: "course-2",
      title: "Build Digital Asset",
      author: "purepearl studio",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
      thumbnail: "/images/creator-profile/course-2.png",
      href: "/course-details",
    },
    {
      id: "course-3",
      title: "the Power of Big Data",
      author: "purepearl studio",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
      thumbnail: "/images/creator-profile/course-3.png",
      href: "/course-details",
    },
    {
      id: "course-4",
      title: "Balancing Productivity and Self-Care",
      author: "purepearl studio",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
      thumbnail: "/images/creator-profile/course-4.png",
      href: "/course-details",
    },
    {
      id: "course-5",
      title: "Mastering Money Management",
      author: "purepearl studio",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
      thumbnail: "/images/creator-profile/course-5.png",
      href: "/course-details",
    },
    {
      id: "course-6",
      title: "From Idea to Startup Success",
      author: "purepearl studio",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
      period: "/lifetime",
      thumbnail: "/images/creator-profile/course-6.png",
      href: "/course-details",
    },
  ],
};
