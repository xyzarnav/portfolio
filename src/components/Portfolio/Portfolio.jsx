import { useState, useEffect } from 'react';

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Web Design', value: 'web design' },
  { label: 'Applications', value: 'applications' },
  { label: 'Web Development', value: 'web development' },
];

const projects = [
  {
    title: 'Finance',
    category: 'web development',
    img: '/assets/images/project-1.jpg',
    link: '#',
    description: 'A comprehensive financial dashboard with interactive charts and real-time data visualization.',
  },
  {
    title: 'Orizon',
    category: 'web development',
    img: '/assets/images/project-2.png',
    link: '#',
    description: 'Cloud-based project management platform with intuitive UI/UX and collaborative features.',
  },
  {
    title: 'Fundo',
    category: 'web design',
    img: '/assets/images/project-3.jpg',
    link: '#',
    description: 'Modern funding platform design with user-friendly interface and secure payment integration.',
  },
  {
    title: 'Brawlhalla',
    category: 'applications',
    img: '/assets/images/project-4.png',
    link: '#',
    description: 'Mobile gaming app with real-time multiplayer functionality and customizable characters.',
  },
  {
    title: 'DSM.',
    category: 'web design',
    img: '/assets/images/project-5.png',
    link: '#',
    description: 'Design system manager with component library, style guides and developer documentation.',
  },
  {
    title: 'MetaSpark',
    category: 'web design',
    img: '/assets/images/project-6.png',
    link: '#',
    description: 'VR/AR experience platform with immersive interfaces and cutting-edge 3D visuals.',
  },
  {
    title: 'Summary',
    category: 'web development',
    img: '/assets/images/project-7.png',
    link: '#',
    description: 'Content summarization tool powered by AI with multi-language support and export features.',
  },
  {
    title: 'Task Manager',
    category: 'applications',
    img: '/assets/images/project-8.jpg',
    link: '#',
    description: 'Productivity application with task prioritization, reminder system and team collaboration.',
  },
  {
    title: 'Arrival',
    category: 'web development',
    img: '/assets/images/project-9.png',
    link: '#',
    description: 'Travel planning platform with itinerary builder, booking integration and local recommendations.',
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState('all');
  const [filtered, setFiltered] = useState(projects);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFiltered(selected === 'all' ? projects : projects.filter(p => p.category === selected));
  }, [selected]);

  const handleCategoryChange = (category) => {
    setSelected(category);
  };

  return (
    <article className="card bg-eerie-black-2 border border-jet/40 rounded-[20px] p-[15px] sm:p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] w-full sm:w-[90%] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
      <header className="mb-5 sm:mb-8">
        <h2 className="section-title bg-text-gradient-yellow text-transparent bg-clip-text inline-block text-[22px] sm:text-fs-1">
          Portfolio
        </h2>
      </header>

      <section className="projects">
        {/* Desktop Filter Menu */}
        <ul className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selected === cat.value
                    ? 'bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 font-fw-500 shadow-glow'
                    : 'text-light-gray bg-eerie-black-1/50 hover:bg-eerie-black-1'
                }`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Filter Dropdown */}
        <div className="filter-select-box relative mb-4 sm:mb-6 md:hidden">
          <button
            className="w-full flex items-center justify-between bg-eerie-black-1 text-light-gray p-2 sm:p-3 rounded-lg text-[13px] sm:text-fs-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="select-value font-fw-500">
              {categories.find(c => c.value === selected)?.label || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name={isOpen ? 'chevron-up' : 'chevron-down'}></ion-icon>
            </div>
          </button>

          {isOpen && (
            <ul className="select-list absolute top-full left-0 w-full bg-eerie-black-1 mt-1 rounded-lg overflow-hidden z-20 shadow-shadow-2 animate-[fadeIn_0.2s_ease_forwards]">
              {categories.map((cat) => (
                <li className="select-item" key={cat.value}>
                  <button
                    className={`w-full text-left p-2 sm:p-3 hover:bg-jet text-[12px] sm:text-fs-7 ${selected === cat.value ? 'text-orange-yellow-crayola' : 'text-light-gray'}`}
                    onClick={() => {
                      handleCategoryChange(cat.value);
                      setIsOpen(false);
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="project-item group"
              style={{
                animationName: 'fadeIn',
                animationDuration: '0.5s',
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <div className="card overflow-hidden relative">
                <figure className="project-img overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title.toLowerCase()}
                    loading="lazy"
                    className="w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="project-item-icon-box absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4">
                    <h3 className="project-title text-white-1 text-[15px] sm:text-fs-4 font-fw-500 mb-1">
                      {project.title}
                    </h3>
                    <p className="project-category text-light-gray text-[11px] sm:text-fs-7 mb-1 sm:mb-3">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                    <p className="text-light-gray text-[11px] sm:text-fs-7 mb-2 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 font-fw-500 py-1 sm:py-2 px-2 sm:px-4 rounded-md text-[11px] sm:text-fs-7 w-max transition-transform duration-300 hover:scale-105"
                    >
                      View Project
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                  </div>
                </figure>
              </div>

              <h3 className="mt-2 sm:mt-3 text-white-2 text-[13px] sm:text-fs-6 font-fw-500 transition-all group-hover:text-orange-yellow-crayola">
                {project.title}
              </h3>
              <p className="text-light-gray-70 text-[11px] sm:text-fs-7">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-6 sm:py-10 text-center">
            <ion-icon name="search-outline" class="text-2xl sm:text-4xl text-light-gray mb-2 sm:mb-4"></ion-icon>
            <p className="text-light-gray text-[13px] sm:text-fs-6">No projects found in this category</p>
            <button
              className="mt-3 sm:mt-4 text-orange-yellow-crayola text-[13px] sm:text-fs-6 hover:underline"
              onClick={() => setSelected('all')}
            >
              View all projects
            </button>
          </div>
        )}
      </section>
    </article>
  );
};

export default Portfolio;


