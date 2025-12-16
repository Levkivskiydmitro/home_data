import { SearchPost } from "./SearchPost";
import { SelectTags } from "./SelectTags";
import { SelectMinimumLikes } from "./SelectMinimumLikes";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  selectedTags: number[];
  setSelectedTags: (v: number[]) => void;
  minLikes: number;
  setMinLikes: (v: number) => void;
}

export const FilterBlock: React.FC<Props> = (props) => {
  return (
    <div>
      <SearchPost value={props.search} onChange={props.setSearch} />
      <SelectTags
        selectedTags={props.selectedTags}
        onChange={props.setSelectedTags}
      />
      <SelectMinimumLikes
        value={props.minLikes}
        onChange={props.setMinLikes}
      />
    </div>
  );
};
