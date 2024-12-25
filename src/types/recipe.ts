export type Recipe = {
    recipeId: number;
    description: string;
    name: string;
    prepTime: string;
    cookTime: string;
    imageUrl: string;
    ingredients: string[];
    directions: string[];
    tips: string[];
    totalTime: string;
    additions1: string[];
    additions2: string[];
    additions3: string[];
    makingAmount: string;
};
