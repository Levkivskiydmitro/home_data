import { Request, Response } from "express";


export interface Post {
    id: number;
    title: string;
    description: string;
    image: any;
    likes: string
}


export type CreatePostData = Omit<Post, 'id'>;
export type UpdatePostData = Partial<Omit<Post, 'id'>>;
export type ProductCreate = Omit<Post, "id">
export type ProductUpdate = Partial<Omit<Post, "id">>

export interface IPostService {
    getAll(): Promise<Post[]>;
    getById(id: number): Promise<Post | null>;
    create(data: CreatePostData): Promise<Post>;
    update(id: number, data: UpdatePostData): Promise<Post | null>;

}

export interface PostControllerContract { 
    getAll: (req: Request<object, Post[] | string, object, { take?: string }>, res: Response<Post[] | string>) => void;
    getById: (req: Request<{ id: string }, Post | string, object>, res: Response<Post | string>) => void; 
    create: (req: Request<object, Post | string, CreatePostData, object>, res: Response<Post | string>) => Promise<void>; 
    update: (req: Request<{ id: number }, Post | string, UpdatePostData, object>, res: Response<Post | string>) => Promise<void>; }
