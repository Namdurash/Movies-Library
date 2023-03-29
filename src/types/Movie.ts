export interface Movie {
  id: number;
  title: string;
  year: number;
  format: string;
  actors: Array<Actor>;
  createdAt: string;
  updatedAt: string;
}

export interface Actor {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
