import { http } from "./http";
import type { Tag } from "../../shared/types/tag";

export const TagsApi = {
  getAll: () => http<Tag[]>("/tags"),
};
