export interface SearchCategory {
  id: string;
  label: string;
}

export const SEARCH_CATEGORIES: SearchCategory[] = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing-painting", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social-media", label: "Social Media" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "creative-marketing", label: "Creative Marketing" },
  { id: "cooking", label: "Cooking" },
];

export const FILTER_OPTIONS = {
  levels: ["All Levels", "Beginner", "Intermediate", "Advanced"],
  categories: [
    "All Categories",
    "Design",
    "Marketing",
    "Animation",
    "Data & Tech",
    "Business",
  ],
  sort: [
    "Most relevant",
    "Highest rated",
    "Most popular",
    "Newest",
  ],
};
