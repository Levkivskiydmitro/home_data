import { tags } from "../../data/tags";

interface Props {
  selectedTags: number[];
  onChange: (tags: number[]) => void;
}

export const SelectTags: React.FC<Props> = ({ selectedTags, onChange }) => {
  const toggleTag = (id: number) => {
    onChange(
      selectedTags.includes(id)
        ? selectedTags.filter(t => t !== id)
        : [...selectedTags, id]
    );
  };

  return (
    <>
      {tags.map(tag => (
        <button key={tag.id} onClick={() => toggleTag(tag.id)}>
          {tag.name}
        </button>
      ))}
    </>
  );
};
