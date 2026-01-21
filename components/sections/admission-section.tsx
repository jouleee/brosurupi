"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Calendar, FileText } from "lucide-react"

const admissionRoutes = [
  {
    number: "01",
    title: "SNBP",
    description: "Seleksi Nasional Berdasarkan Prestasi",
    details: "Bagi siswa berprestasi dengan rapor dan prestasi akademik/non-akademik yang mengesankan",
    timeline: "5 Januari - 31 Maret 2026",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "SNBT",
    description: "Seleksi Nasional Berbasis Tes",
    details: "Seleksi nasional dengan tes bakat skolastik dan kemampuan akademik yang komprehensif",
    timeline: "25 Maret - 25 Mei 2026",
    icon: FileText,
  },
  {
    number: "03",
    title: "Seleksi Mandiri (SM-UPI)",
    description: "Jalur Mandiri UPI",
    details: "Seleksi mandiri dengan berbagai jalur masuk dan beasiswa unggulan untuk mahasiswa berprestasi",
    timeline: "26 Mei - 23 Juni 2026",
    icon: Calendar,
  },
  {
    number: "04",
    title: "Seleksi Mandiri - Prestasi Istimewa",
    description: "Jalur Khusus",
    details: "Untuk siswa dengan prestasi luar biasa di bidang olahraga, seni, dan akademik internasional",
    timeline: "26 Mei - 17 Juli 2026",
    icon: CheckCircle2,
  },
]

export default function AdmissionSection() {
  const [activeRoute, setActiveRoute] = useState(0)

  return (
    <section id="admission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Jalur Masuk & Pendaftaran</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Pilih jalur masuk yang sesuai dengan prestasi dan potensi Anda</p>
        </div>

        {/* Routes Grid with Detailed View */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Routes List */}
          <div className="space-y-4">
            {admissionRoutes.map((route, index) => {
              const Icon = route.icon
              const isActive = activeRoute === index
              return (
                <div
                  key={index}
                  onClick={() => setActiveRoute(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 animate-fade-in-up border-2 ${
                    isActive
                      ? "border-red-600 bg-gradient-to-r from-red-600 to-red-700 shadow-xl"
                      : "border-gray-200 bg-white hover:border-red-300 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg flex-shrink-0 ${isActive ? "bg-white/20" : "bg-red-100"}`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-red-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-1 ${isActive ? "text-white" : "text-black"}`}>
                        {route.title}
                      </h3>
                      <p className={`text-sm ${isActive ? "text-white/90" : "text-gray-700"}`}>{route.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Details View */}
          <div className="animate-scale-in">
            <Card className="border-2 border-red-600 shadow-xl overflow-hidden rounded-xl">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-none">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-2">{admissionRoutes[activeRoute].title}</CardTitle>
                    <p className="text-white/90 text-sm">{admissionRoutes[activeRoute].description}</p>
                  </div>
                  <div className="text-6xl font-black text-white/20 ml-4">{admissionRoutes[activeRoute].number}</div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6 bg-white p-6">
                <div>
                  <h4 className="font-bold text-black mb-2 text-base">Deskripsi Program</h4>
                  <p className="text-gray-700 leading-relaxed">{admissionRoutes[activeRoute].details}</p>
                </div>

                <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <Calendar className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-700 font-semibold">JADWAL PENDAFTARAN</p>
                    <p className="text-lg font-bold text-black">{admissionRoutes[activeRoute].timeline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
