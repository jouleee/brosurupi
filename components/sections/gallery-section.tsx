"use client"
import { useState } from "react"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { id: 1, alt: "Kampus Utama UPI", title: "Kampus Utama Bandung" },
    { id: 2, alt: "Gedung Perpustakaan Modern", title: "Perpustakaan Digital" },
    { id: 3, alt: "Fasilitas Laboratorium", title: "Lab Penelitian" },
    { id: 4, alt: "Ruang Kelas Modern", title: "Kelas Interaktif" },
    { id: 5, alt: "Kegiatan Mahasiswa", title: "Student Activities" },
    { id: 6, alt: "Lapangan Olahraga", title: "Sports Complex" },
    { id: 7, alt: "Kantin dan Area Istirahat", title: "Campus Life" },
    { id: 8, alt: "Mahasiswa Belajar Kelompok", title: "Collaborative Learning" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Galeri Foto <span className="text-red-600">UPI</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Jelajahi kehidupan kampus, fasilitas modern, dan lingkungan akademis yang mendukung pembelajaran
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-300 animate-fade-in border-2 border-gray-100 hover:border-red-600"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(img.id)}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-yellow-100" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={`/.jpg?height=400&width=400&query=${encodeURIComponent(img.alt)}`}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-base">{img.title}</h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-red-600 text-white rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 13H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={`/.jpg?height=600&width=800&query=${encodeURIComponent(galleryImages[selectedImage - 1]?.alt || "Gallery")}`}
              alt="Gallery"
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {galleryImages[selectedImage - 1]?.title}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
