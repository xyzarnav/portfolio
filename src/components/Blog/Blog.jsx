import { useState } from 'react';

const posts = [
  {
    img: '/assets/images/blog-1.jpg',
    alt: 'Design conferences in 2022',
    category: 'Design',
    date: '2022-02-23',
    dateText: 'Feb 23, 2022',
    title: 'Design conferences in 2022',
    text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    img: '/assets/images/blog-2.jpg',
    alt: 'Best fonts every designer',
    category: 'Design',
    date: '2022-02-23',
    dateText: 'Feb 23, 2022',
    title: 'Best fonts every designer',
    text: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
  },
  {
    img: '/assets/images/blog-3.jpg',
    alt: 'Design digest #80',
    category: 'Design',
    date: '2022-02-23',
    dateText: 'Feb 23, 2022',
    title: 'Design digest #80',
    text: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
  },
  {
    img: '/assets/images/blog-4.jpg',
    alt: 'UI interactions of the week',
    category: 'Design',
    date: '2022-02-23',
    dateText: 'Feb 23, 2022',
    title: 'UI interactions of the week',
    text: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    img: '/assets/images/blog-5.jpg',
    alt: 'The forgotten art of spacing',
    category: 'Design',
    date: '2022-02-23',
    dateText: 'Feb 23, 2022',
    title: 'The forgotten art of spacing',
    text: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    img: '/assets/images/blog-6.jpg',
    alt: 'Design digest #79',
    category: 'Design',
    date: '2022-02-23',
    dateText: 'Feb 23, 2022',
    title: 'Design digest #79',
    text: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
  },
];

const Blog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <article className="card bg-eerie-black-2 border border-jet/40 rounded-[20px] p-[15px] sm:p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] w-full sm:w-[90%] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
      <header className="mb-5 sm:mb-8 flex justify-between items-end">
        <h2 className="section-title bg-text-gradient-yellow text-transparent bg-clip-text inline-block text-[22px] sm:text-fs-1">
          Blog
        </h2>
        <div className="flex items-center text-[11px] sm:text-fs-7 text-light-gray">
          <ion-icon name="bookmarks-outline" class="mr-1"></ion-icon>
          Latest articles
        </div>
      </header>

      <section className="blog-posts">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, i) => (
            <div
              className="group cursor-pointer"
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationName: 'fadeIn',
                animationDuration: '0.5s',
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <a href="#" className="block">
                <div className="card overflow-hidden">
                  <figure className="blog-banner-box relative overflow-hidden h-[160px] sm:h-[180px] md:h-[200px]">
                    <img
                      src={post.img}
                      alt={post.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eerie-black-1 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <button className="bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 text-[11px] sm:text-fs-7 font-fw-500 py-1 px-2 sm:px-3 rounded-md">
                        Read More
                      </button>
                    </div>
                  </figure>

                  <div className="p-3 sm:p-4 border-t border-jet/30">
                    <div className="blog-meta flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 text-[10px] sm:text-fs-7 flex-wrap">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-eerie-black-1 text-orange-yellow-crayola rounded-md">
                        {post.category}
                      </span>
                      <div className="flex items-center text-light-gray-70">
                        <ion-icon name="calendar-outline" class="mr-1"></ion-icon>
                        <time dateTime={post.date}>{post.dateText}</time>
                      </div>
                    </div>

                    <h3
                      className={`text-[14px] sm:text-fs-5 font-fw-500 line-clamp-1 mb-1 sm:mb-2 transition-colors duration-300 ${
                        hoveredIndex === i
                          ? 'text-orange-yellow-crayola'
                          : 'text-white-2'
                      }`}
                    >
                      {post.title}
                    </h3>

                    <p className="text-light-gray text-[11px] sm:text-fs-7 line-clamp-2">
                      {post.text}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-6 sm:mt-10">
          <div className="card p-4 sm:p-6 border border-jet/40 bg-gradient-to-br from-eerie-black-2/50 to-eerie-black-1/50 backdrop-blur-sm">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-3 sm:mb-4 md:mb-0">
                <h3 className="text-white-2 text-[16px] sm:text-fs-3 font-fw-500 mb-1 sm:mb-2">
                  Subscribe to my newsletter
                </h3>
                <p className="text-light-gray text-[12px] sm:text-fs-6">
                  Get the latest articles and resources directly in your inbox.
                </p>
              </div>

              <div className="md:w-1/3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 bg-eerie-black-1 text-light-gray border border-jet focus:border-orange-yellow-crayola outline-none rounded-l-md text-[12px] sm:text-fs-6"
                  />
                  <button className="bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 font-fw-500 py-1.5 sm:py-2 px-3 sm:px-4 rounded-r-md hover:shadow-glow transition-all duration-300">
                    <ion-icon name="send-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Blog;
