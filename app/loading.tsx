import { SkeletonCard } from '@/components/skeleton-card';

const Loading = () => {
  return (
    <main>
      <div className="mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:grid-cols-3">
        {'abcdefghi'.split('').map(i => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
