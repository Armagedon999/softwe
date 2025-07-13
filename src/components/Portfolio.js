import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const portfolios = [
    {
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      name: 'Kopi Mantap',
      category: 'Food & Beverage',
      desc: 'Website UMKM kopi lokal dengan fitur katalog & pemesanan online.',
      tech: ['React', 'Tailwind', 'Node.js'],
      link: 'https://demo.webgampang.com'
    },
    {
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      name: 'Batik Ceria',
      category: 'Fashion',
      desc: 'Landing page produk batik modern, mobile friendly dengan animasi.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind'],
      link: 'https://demo.webgampang.com'
    },
    {
      img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      name: 'Snack Lezat',
      category: 'Food & Beverage',
      desc: 'Toko online snack rumahan, desain simple & mudah order.',
      tech: ['Vue.js', 'Bootstrap', 'PHP'],
      link: 'https://demo.webgampang.com'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Project Terbaru Kami
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Beberapa project website yang telah kami kerjakan untuk berbagai sektor usaha
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <Eye className="w-4 h-4 text-blue-600" />
                </a>
                <div className="absolute bottom-3 right-3">
                  <span className="badge badge-primary text-xs">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="badge badge-outline text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <button className="inline-block px-6 py-3 bg-white border border-blue-600 text-blue-700 font-semibold rounded-xl shadow hover:bg-blue-50 transition duration-300">
            Project Lainnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
