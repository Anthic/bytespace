export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeroData {
  brand: {
    name: string;
    logoUrl: string;
  };
  navigation: NavItem[];
  authLinks: {
    signIn: { label: string; href: string };
    joinUs: { label: string; href: string };
  };
  headline: string;
  headlineHighlight?: string;
  subtitle: string;
  search: {
    placeholder: string;
    buttonText: string;
  };
  badges: {
    uiUx: {
      title: string;
      coursesCount: string;
      studentsCount: string;
    };
    progress: {
      label: string;
      percentage: string;
      numericValue: number;
    };
    students: {
      title: string;
      rating: string;
      reviewsCount: string;
      studentCountText: string;
      avatarImages: string[];
    };
  };
}

export const heroContent: HeroData = {
  brand: {
    name: "ByteSpace",
    logoUrl: "/logos/logo.svg",
  },
  navigation: [
    { label: "Home", href: "/", active: true },
    { label: "Courses", href: "/search" },
    { label: "Creators", href: "/creator-profile" },
  ],
  authLinks: {
    signIn: { label: "Sign In", href: "/login" },
    joinUs: { label: "Join Us", href: "/signup" },
  },
  headline: "Get Access to Hundreds Courses Available",
  subtitle:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  search: {
    placeholder: "Course, topic, creator",
    buttonText: "Search",
  },
  badges: {
    uiUx: {
      title: "UI/UX Design",
      coursesCount: "200 Courses",
      studentsCount: "1000+ Students",
    },
    progress: {
      label: "Learning Progress",
      percentage: "55%",
      numericValue: 55,
    },
    students: {
      title: "Happy Students",
      rating: "4.5",
      reviewsCount: "(240)",
      studentCountText: "2K+",
      avatarImages: [
        "/images/hero/avatar-1.png",
        "/images/hero/avatar-2.png",
        "/images/hero/avatar-3.png",
        "/images/hero/avatar-4.png",
        "/images/hero/avatar-5.png",
        "/images/hero/avatar-6.png",
        "/images/hero/avatar-7.png",
      ],
    },
  },
};
