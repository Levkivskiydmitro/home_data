import type { Tag } from "../../../shared/types/tag";

export interface SelectTagsProps {
  selectedTags: number[];
  onChange: (ids: number[]) => void;
}
