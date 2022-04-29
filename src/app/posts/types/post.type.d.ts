export type TPostRating = {
    rate: number;
    count: number;
  };
  
  export type TPost = {
    id: number;
    title: string;
    userId: number;
    content: string;
    likes: number;
    hits: number;
    categoryId: number;
    imageUrl: string
  };

  