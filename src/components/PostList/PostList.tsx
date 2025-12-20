import React, { useEffect, useMemo, useState } from "react";
import type { Post } from "../../shared/types/post";
import type { PostListProps } from "./types";
import { PostsApi } from "../../shared/api/posts";
import { Loader } from "../../shared/ui/Loader";
import { ErrorBox } from "../../shared/ui/ErrorBox";
import { PostCard } from "../PostCard/PostCard";



export const PostList: React.FC<PostListProps> = ({ filters }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await PostsApi.getAll();
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (filters.search && !post.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.minLikes && post.likes < filters.minLikes) return false;

      if (filters.selectedTags.length) {
       
        const postTagIds = post.tags; 
        const ok = filters.selectedTags.some((id) => postTagIds.includes(id));
        if (!ok) return false;

      }

      return true;
    });
  }, [posts, filters]);

  if (loading) return <Loader text="Загружаем посты..." />;
  if (error) return <ErrorBox message={error} onRetry={load} />;

  return (
    <div>
      {filteredPosts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
};
