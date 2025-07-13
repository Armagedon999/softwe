import React from 'react';
import { Globe, Pencil, Code, Clock, LifeBuoy, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Paket Website UMKM',
      desc: 'Website simple dan profesional, cocok untuk UMKM dan personal branding.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      features: ['Tampilan Responsif', 'Custom Desain Sesuai Usaha', 'Terintegrasi WhatsApp']
    },
    {
      icon: <Pencil className="w-7 h-7" />,
      title: 'Landing Page Produk',
      desc: 'Halaman khusus untuk promosi produk/layanan dengan CTA kuat dan desain meyakinkan.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      features: ['Call To Action Optimal', 'Cocok untuk Iklan FB/IG', 'Bisa Multi Seksi Produk']
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: 'Redesign Website',
      desc: 'Upgrade tampilan website lama agar lebih modern, cepat, dan profesional.',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      features: ['Redesain UX/UI', 'Performance Optimized', 'Mobile First Design']
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: 'SEO Website',
      desc: 'Optimasi website agar muncul di Google. Cocok untuk yang ingin mulai ranking.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      features: ['On-Page SEO', 'Keyword Penelitian', 'Google Search Console Setup']
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: 'Maintenance Berkala',
      desc: 'Website kamu kami rawat, mulai dari update konten, keamanan hingga backup rutin.',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      features: ['Update Otomatis', 'Anti Hack & Backup', 'Edit Konten Bulanan']
    },
    {
      icon: <LifeBuoy className="w-7 h-7" />,
      title: 'Support & Konsultasi',
      desc: 'Tanya apa saja sebelum dan sesudah website live. Kami fast response & jelas.',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      features: ['Chat & Call 24/7', 'Konsultasi Teknis Gratis', 'Panduan Video/Zoom']
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full shadow-sm mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Solusi Website All-in-One untuk Bisnis Anda
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Kami bantu dari 0 sampai jadi. Tanpa ribet, tanpa istilah teknis. 
            Pilih layanan sesuai kebutuhan dan biarkan kami yang urus sisanya.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group border border-gray-200 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="p-6 sm:p-8">
                <div className={`p-4 rounded-xl text-white mb-6 w-fit ${service.color} shadow-md`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
