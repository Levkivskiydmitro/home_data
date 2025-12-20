import React, { useEffect, useState } from "react";
import type { Tag } from "../../../shared/types/tag";
import type { SelectTagsProps } from "./types";
import { TagsApi } from "../../../shared/api/tags";
import { Loader } from "../../../shared/ui/Loader";
import { ErrorBox } from "../../../shared/ui/ErrorBox";

export const SelectTags: React.FC<SelectTagsProps> = ({ selectedTags, onChange }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await TagsApi.getAll();
      setTags(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const toggle = (id: number) => {
    onChange(selectedTags.includes(id) ? selectedTags.filter((t) => t !== id) : [...selectedTags, id]);
  };

  if (loading) return <Loader text="Загружаем теги..." />;
  if (error) return <ErrorBox message={error} onRetry={load} />;

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
      {tags.map((tag) => {
        const active = selectedTags.includes(tag.id);
        return (
          <button
            key={tag.id}
            onClick={() => toggle(tag.id)}
            style={{
              padding: "6px 10px",
              borderRadius: 12,
              border: "1px solid #ddd",
              background: active ? "#111" : "#fff",
              color: active ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
};
