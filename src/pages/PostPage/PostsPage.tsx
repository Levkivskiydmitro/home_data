import { useState } from "react";
import { PostList } from "../../components/PostList/PostList";
import { FilterBlock } from "../../shared/ui/FilterBlock";

export const PostsPage: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [minLikes, setMinLikes] = useState<number>(0);

  return (
    <>
      <FilterBlock
        search={search}
        setSearch={setSearch}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        minLikes={minLikes}
        setMinLikes={setMinLikes}
      />

      <PostList
        filters={{ search, selectedTags, minLikes }}
      />
    </>
  );
};

