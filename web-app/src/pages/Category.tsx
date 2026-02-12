import { useParams } from 'react-router';
import { CATEGORIES } from '../lib/data';
import { useData } from '../context/DataContext';
import { TrendCard } from '../components/TrendCard';
import { Typewriter } from '../components/Typewriter';

export function Category() {
  const { id } = useParams();
  const { posts } = useData();

  // Find category label
  const categoryInfo = CATEGORIES.find(c => c.id === id);
  const categoryLabel = categoryInfo?.label || id || '';

  // Filter and sort posts for this category
  const categoryPosts = id === 'all'
    ? posts
    : posts.filter(p => p.category === categoryLabel);

  const featuredPost = categoryPosts[0];
  const sidePosts = categoryPosts.slice(1, 3);
  const remainingPosts = categoryPosts.slice(3);

  if (!featuredPost) return <div className="pt-32 px-6 dark:text-white">Nenhum artigo encontrado</div>;

  return (
    <div className="min-h-screen max-w-[1920px] mx-auto bg-white dark:bg-black transition-colors duration-300 px-6 md:px-12 pt-[128px] pb-12">

      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div>
            <h1 className="text-6xl md:text-[100px] font-bold tracking-[-0.04em] text-black dark:text-white leading-[0.9] break-words max-w-4xl">
              {categoryLabel}
            </h1>
          </div>
          <div className="text-right pb-2 flex flex-col items-end mt-8 md:mt-0">
            <div className="mb-2">
              {/* Placeholder for stats if needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-[1.8] tracking-wide font-light">
            <Typewriter text={`Explorando as últimas tendências e discussões sobre ${categoryLabel.toLowerCase()}.`} />
          </p>
        </div>
      </section>

      {/* Destaques (Featured) - Same layout as Home */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">Destaques</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {/* Main Featured Card - Left */}
          <div className="lg:col-span-2 h-[400px] lg:h-full">
            <TrendCard
              id={featuredPost.id}
              title={featuredPost.title}
              subtitle={featuredPost.subtitle}
              category={featuredPost.category}
              image={featuredPost.image}

              numComments={featuredPost.num_comments}
              score={featuredPost.score}
              size="large"
              className="h-full"
              hideArrow
            />
          </div>

          {/* Side Cards - Right Stack */}
          <div className="flex flex-col gap-6 h-full">
            {sidePosts.map((post, idx) => (
              <TrendCard
                key={`${post.id}-${idx}`}
                id={post.id}
                title={post.title}
                subtitle={post.subtitle}
                category={post.category}
                image={post.image}

                numComments={post.num_comments}
                score={post.score}
                className="flex-1 min-h-[250px]"
                hideArrow
              />
            ))}
          </div>
        </div>
      </section>

      {/* Todos os artigos (Remaining) - Simple Grid */}
      {remainingPosts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Demais artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {remainingPosts.map((post, idx) => (
              <TrendCard
                key={`${post.id}-remaining-${idx}`}
                id={post.id}
                title={post.title}
                subtitle={post.subtitle}
                category={post.category}
                image={post.image}

                numComments={post.num_comments}
                score={post.score}
                size="small"
                className="h-[320px]"
                hideArrow
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
