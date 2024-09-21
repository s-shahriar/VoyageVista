const blogPosts = [
    {
      id: 1,
      title: 'Journeys Are Best Measured In New Friends',
      description: 'Traveling opens doors to new friendships and unforgettable experiences, connecting people from diverse cultures across the globe.',
      image: '/assets/images/blog-1.png?height=200&width=300&text=Friends',
    },
    {
      id: 2,
      title: 'A Lot Of Traveling Turns You Into A Storyteller',
      description: 'Every adventure you take is a story waiting to be shared, from exotic destinations to unexpected moments of joy. Come make some pleasent memories.',
      image: '/assets/images/blog-2.png?height=200&width=300&text=Storyteller',
    },
    {
      id: 3,
      title: 'Travel Makes One Modest And Open To New Ideas',
      description: 'Exploring the world not only broadens your horizons but also humbles you, helping you appreciate different perspectives.',
      image: '/assets/images/blog-3.png?height=200&width=300&text=Modest',
    },
  ];
  
  const Blog = () => {
    return (
      <section className="py-16 px-4 overflow-hidden">
        <div className="container mx-auto">
          <h3 className="text-blue-500 text-center font-cursive text-2xl mb-2">latest News</h3>
          <h2 className="text-4xl font-bold text-center mb-6">Read Latest Blogs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Stay up-to-date with the latest travel trends, inspiring stories, and tips to make your next adventure unforgettable. Our blog brings you closer to the world’s most extraordinary experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <a href="#" className="text-blue-500 font-semibold hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Blog;
  