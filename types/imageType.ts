export interface ImageFile {
  _id: string;
  fileName: string;
  originalName: string;
  size: number;
  mimeType: string;
  fileType: string;
  url: string;
  key: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImagesWithCount {
  images: ImageFile[];
  count: number;
  nextPage: boolean | number;
}
