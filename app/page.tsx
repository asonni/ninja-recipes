import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

type TRecipe = {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
};

const getRecipes = async (): Promise<TRecipe[]> => {
  const result = await fetch('http://localhost:3000/api/recipes');

  // delay response
  await new Promise(resolve => setTimeout(resolve, 3000));

  return result.json();
};

const Home = async () => {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:grid-cols-3">
        {recipes.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button size="sm">View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
