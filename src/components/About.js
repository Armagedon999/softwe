import React from 'react';
import { Zap, Award, Users, Globe, LifeBuoy, Code } from 'lucide-react';

const About = () => {
  const keunggulan = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Proses Cepat',
      desc: 'Website siap dalam 3-7 hari kerja'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Budget Fleksibel',
      desc: 'Harga terjangkau sesuai kebutuhan'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Ramah Pemula',
      desc: 'Tidak perlu paham teknologi'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Mobile Friendly',
      desc: 'Tampilan sempurna di semua device'
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: 'Konsultasi Gratis',
      desc: 'Bisa konsultasi sebelum mulai'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Support',
      desc: 'Bantuan domain, hosting & email'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Judul dan Deskripsi */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow mb-4">
            Tentang Kami
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mengapa Memilih <span className="text-blue-600">WebGampang?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami adalah tim profesional yang siap membantu UMKM membangun kehadiran online yang kuat dan efektif dengan pendekatan personal & proses super mudah.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div className="relative" data-aos="fade-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
              alt="Team Working" 
              className="relative z-10 rounded-2xl shadow-2xl border-4 border-white w-full"
            />
          </div>

          {/* Keunggulan */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Keunggulan Layanan Kami
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {keunggulan.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600 shadow">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
