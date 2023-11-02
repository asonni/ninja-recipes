import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonCard = () => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-grow space-y-3">
          <Skeleton className="h-4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 flex-grow" />
        <Skeleton className="h-4 flex-grow" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-28" />
      </CardFooter>
    </Card>
  );
};
