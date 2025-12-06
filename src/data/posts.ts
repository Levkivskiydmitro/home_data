import { Post } from "../types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Как установить Node.js",
    shortDescription: "Разбираем установку Node.js на Windows, Mac и Linux",
    fullDescription: "Полное описание поста",
    image: "/placeholder.png",
    category: { id: 1, name: "Программирование" },
    tags: [{ id: 1, name: "JS" }, { id: 3, name: "Backend" }],
    createdAt: "2025-10-10",
  },
  {
    id: 2,
    title: "Что нового в React 19?",
    shortDescription: "React 19 приносит множество улучшений",
    fullDescription: "Полное описание поста...",
    image: "/placeholder.png",
    category: { id: 2, name: "Frontend" },
    tags: [{ id: 2, name: "React" }],
    createdAt: "2025-10-12",
  },
];
