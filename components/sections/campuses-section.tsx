"use client"

import { MapPin, Building2 } from "lucide-react"

const campuses = [
  {
    name: "UPI Kampus Cibiru",
    location: "Cibiru, Bandung",
    highlights: "Pendidikan Olahraga, Fasilitas Olahraga Internasional",
    image: "/sports-campus-athletic-facilities-training.jpg",
    icon: Building2,
  },
  {
    name: "UPI Kampus Sumedang",
    location: "Sumedang, Jawa Barat",
    highlights: "Pendidikan Pertanian, Program Kehutanan",
    image: "/sumedang.webp",
    icon: Building2,
  },
  {
    name: "UPI Kampus Tasikmalaya",
    location: "Tasikmalaya, Jawa Barat",
    highlights: "Pendidikan Teknik, Program Kejuruan",
    image: "/tasik.webp",
    icon: Building2,
  },
  {
    name: "UPI Kampus Purwakarta",
    location: "Purwakarta, Jawa Barat",
    highlights: "Pendidikan Pelatihan, Program Vokasi",
    image: "/purwakarta.webp",
    icon: Building2,
  },
  {
    name: "UPI Kampus Serang",
    location: "Serang, Banten",
    highlights: "Pendidikan Keperawatan, Program Kesehatan",
    image: "/serang.webp",
    icon: Building2,
  },
]

export default function CampusesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Kampus Daerah</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Kampus UPI di berbagai daerah</p>
        </div>

        {/* Campuses Grid */}
        <div className="space-y-6">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.slice(0, 3).map((campus, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Campus Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-100 to-yellow-100">
                  <img
                    src={campus.image || "/placeholder.svg"}
                    alt={campus.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Campus Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-600 transition-colors shrink-0">
                      <MapPin className="w-5 h-5 text-red-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black group-hover:text-red-600 transition-colors line-clamp-2">
                      {campus.name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-red-600 mb-3">{campus.location}</p>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">{campus.highlights}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
              {campuses.slice(3).map((campus, index) => (
                <div
                  key={index + 3}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden animate-fade-in-up flex flex-col h-full"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  {/* Campus Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-100 to-yellow-100">
                    <img
                      src={campus.image || "/placeholder.svg"}
                      alt={campus.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Campus Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-600 transition-colors shrink-0">
                        <MapPin className="w-5 h-5 text-red-600 group-hover:text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-black group-hover:text-red-600 transition-colors line-clamp-2">
                        {campus.name}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-red-600 mb-3">{campus.location}</p>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">{campus.highlights}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
