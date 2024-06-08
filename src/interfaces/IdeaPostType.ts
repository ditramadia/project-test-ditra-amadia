import { ImageType } from "@/interfaces/ImageType";

export interface IdeaPostType {
  id: number,
  slug: string,
  title: string,
  content: string,
  published_at: string,
  deleted_at: string,
  created_at: string,
  updated_at: string,
  small_image?: ImageType[],
  medium_image?: ImageType[],
};