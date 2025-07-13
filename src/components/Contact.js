import React from 'react';
import { Globe, Users, Award, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: 'Website',
      value: 'www.webgampang.com',
      link: 'https://www.webgampang.com',
    },
    {
      icon: <Users className="w-5 h-5 text-green-600" />,
      title: 'WhatsApp',
      value: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
    },
    {
      icon: <Award className="w-5 h-5 text-purple-600" />,
      title: 'Email',
      value: 'info@webgampang.com',
      link: 'mailto:info@webgampang.com',
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm bg-blue-100 px-4 py-1 rounded-full">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Konsultasi Gratis
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">Mulai Proyek Website Anda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Ceritakan tentang bisnis Anda, kami bantu realisasikan dalam bentuk website profesional.
          </p>
        </div>

        {/* Kontainer Utama */}
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl p-10 grid lg:grid-cols-2 gap-10">
          {/* Kontak Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hubungi Kami</h3>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white shadow-md">{info.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{info.title}</div>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl border border-gray-200 shadow-inner">
              <h4 className="font-semibold text-gray-700 mb-2">Jam Kerja</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Senin - Jumat: 09.00 - 18.00</li>
                <li>Sabtu: 09.00 - 15.00</li>
                <li>Minggu: Libur</li>
              </ul>
            </div>
          </div>

          {/* Form Kontak */}
          <form
            onSubmit={(e) => e.preventDefault()}
            data-aos="fade-left"
            className="bg-white rounded-2xl p-6 shadow-lg space-y-6 border border-gray-200"
          >
            {[ 
              { label: 'Nama Lengkap', type: 'text', placeholder: 'Masukkan nama lengkap Anda' },
              { label: 'Nama Usaha', type: 'text', placeholder: 'Masukkan nama usaha Anda' },
              { label: 'Email', type: 'email', placeholder: 'Masukkan email aktif Anda' },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block mb-1 text-sm text-gray-700 font-medium">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 text-sm text-gray-700 font-medium">Pesan</label>
              <textarea
                placeholder="Ceritakan kebutuhan website Anda..."
                className="w-full h-32 rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                required
              />
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 flex-1 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-100"
              >
                ✉️ Kirim Pesan
              </button>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 text-lg font-semibold border-2 border-green-500 text-green-700 hover:bg-green-100 py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-100"
              >
                💬 Chat WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;