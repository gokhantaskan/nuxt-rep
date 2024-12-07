export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}

export interface BaseEntity extends Timestamps {
  id: string;
}
