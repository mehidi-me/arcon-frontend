export interface Project {
  relatedProjects: Project[];
  _id: string;
  userId: string;
  images: Image[];
  featureImg: Image;
  // projectImgs: Image[];
  challenges: string;
  ideas: string;
  category: any;
  workingYear: string;
  location: string;
  clients: string;
  description: string;
  name: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Image {
  _id: string;
  mimeType: string;
  fileType: string;
  size: number;
  originalName: string;
  key: string;
  url: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}
