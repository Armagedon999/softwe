import React from 'react';
import {
  Instagram,
  Mail,
  Phone,
  Globe,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    layanan: [
      { name: 'Website UMKM', href: '#services' },
      { name: 'Landing Page', href: '#services' },
      { name: 'Redesign Website', href: '#services' },
      { name: 'SEO Basic', href: '#services' },
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '#about' },
      { name: 'Portofolio', href: '#portfolio' },
      { name: 'Testimoni', href: '#testimonials' },
      { name: 'Blog', href: '#' },
    ],
    kontak: [
      { name: 'Email', href: 'mailto:info@webgampang.com' },
      { name: 'WhatsApp', href: 'https://wa.me/6281234567890' },
      { name: 'Instagram', href: 'https://instagram.com/webgampang' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold text-blue-400">WebGampang</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Membantu UMKM membangun kehadiran online yang profesional dan menguntungkan melalui layanan website berkualitas.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/webgampang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition"
              >
                <Phone className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a
                href="mailto:info@webgampang.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.layanan.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.perusahaan.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Kontak</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.kontak.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; 2024 WebGampang. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Made with ❤️ in Indonesia</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              100% Responsive
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
