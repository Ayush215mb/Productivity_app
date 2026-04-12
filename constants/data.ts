export interface ProgressCardType {
  title: string;
  subtitle: string;
  progress: number;
  imgLinks: string[];
  bgColor: string;
}
export const progressCards: ProgressCardType[] = [
  {
    title: "React Mastery",
    subtitle: "Hooks & Performance",
    progress: 72,
    imgLinks: ["https://picsum.photos/200?1"],
    bgColor: "#3B82F6",
  },
  {
    title: "System Design",
    subtitle: "Scalable Architectures",
    progress: 45,
    imgLinks: ["https://picsum.photos/200?2"],
    bgColor: "#22C55E",
  },
  {
    title: "TypeScript Advanced",
    subtitle: "Generics & Utility Types",
    progress: 88,
    imgLinks: ["https://picsum.photos/200?3"],
    bgColor: "#A855F7",
  },
  {
    title: "Node.js Backend",
    subtitle: "APIs & Microservices",
    progress: 60,
    imgLinks: ["https://picsum.photos/200?4"],
    bgColor: "#EAB308",
  },
  {
    title: "Data Structures",
    subtitle: "Trees & Graphs",
    progress: 35,
    imgLinks: ["https://picsum.photos/200?5"],
    bgColor: "#EF4444",
  },
  {
    title: "Docker Basics",
    subtitle: "Containers & Images",
    progress: 50,
    imgLinks: ["https://picsum.photos/200?6"],
    bgColor: "#6366F1",
  },
  {
    title: "Kubernetes",
    subtitle: "Deployment & Scaling",
    progress: 25,
    imgLinks: ["https://picsum.photos/200?7"],
    bgColor: "#14B8A6",
  },
  {
    title: "GraphQL",
    subtitle: "Queries & Mutations",
    progress: 67,
    imgLinks: ["https://picsum.photos/200?8"],
    bgColor: "#EC4899",
  },
  {
    title: "Machine Learning",
    subtitle: "Models & Training",
    progress: 40,
    imgLinks: ["https://picsum.photos/200?9"],
    bgColor: "#F97316",
  },
  {
    title: "DevOps",
    subtitle: "CI/CD Pipelines",
    progress: 55,
    imgLinks: ["https://picsum.photos/200?10"],
    bgColor: "#1F2937",
  },
];
