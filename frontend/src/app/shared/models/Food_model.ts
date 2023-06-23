export class Food{
    id!: string;     // ! means required
    name!: string;
    tags?: string[];    // ? means optional
    price!: number;
    favorite!: boolean;
    stars!: number;
    imgUrl!: string;
    origins!: string[];
    cookTime!: string;

}