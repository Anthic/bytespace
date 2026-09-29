export interface CategoryCardItem {
  id: string;
  name: string;
  icon: string;
}

export const categoriesHeaderData = {
  title: "Explore Diverse Learning Paths at Bytespace",
  subtitle:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
};

export const categoriesListData: CategoryCardItem[] = [
  {
    id: "cat-design",
    name: "Design",
    icon: "/icons/categories/design.svg",
  },
  {
    id: "cat-dev",
    name: "Development",
    icon: "/icons/categories/development.svg",
  },
  {
    id: "cat-it",
    name: "IT & Software",
    icon: "/icons/categories/it-software.svg",
  },
  {
    id: "cat-business",
    name: "Business",
    icon: "/icons/categories/business.svg",
  },
  {
    id: "cat-marketing",
    name: "Marketing",
    icon: "/icons/categories/marketing.svg",
  },
  {
    id: "cat-photography",
    name: "Photography",
    icon: "/icons/categories/photography.svg",
  },
];
