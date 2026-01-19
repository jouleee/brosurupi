"use client"

import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-red-600">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4 animate-fade-in-up">
            <h4 className="font-black text-lg text-red-600 mb-4">Universitas Pendidikan Indonesia</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pelopor dan Unggul dalam Pendidikan Multidisiplin sejak 1954. Berkomitmen menghasilkan pendidik dan
              profesional berkualitas tinggi.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/upiofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-black text-lg text-red-600">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-700 hover:text-red-600 transition flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Tentang UPI
                </a>
              </li>
              <li>
                <a href="#faculties" className="text-gray-700 hover:text-red-600 transition flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Fakultas & Prodi
                </a>
              </li>
              <li>
                <a href="#admission" className="text-gray-700 hover:text-red-600 transition flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Pendaftaran
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-red-600 transition flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Berita & Kegiatan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-black text-lg text-red-600">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:pmb@upi.edu" className="text-gray-700 hover:text-red-600 transition">
                  pmb@upi.edu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Jl. Setiabudhi No. 229, Bandung 40154</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-black text-lg text-red-600">Info Penting</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://pmb.upi.edu/" className="text-gray-700 hover:text-red-600 transition">
                  Portal Pendaftaran
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-600">
          <p>
            &copy; 2026 Universitas Pendidikan Indonesia. Dirancang dengan
            <span className="text-red-600"> ❤ </span>
            oleh <a href="https://instagram.com/juliandwii"> @juliandwii </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
