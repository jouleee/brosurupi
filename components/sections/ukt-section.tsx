"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function UKTSection() {
  const uktCategories = [
    { category: "Kategori 1", amount: "500.000" },
    { category: "Kategori 2", amount: "1.000.000" },
    { category: "Kategori 3", amount: "4.100.000" },
    { category: "Kategori 4", amount: "4.920.000" },
    { category: "Kategori 5", amount: "5.460.000" },
    { category: "Kategori 6", amount: "6.560.000" },
    { category: "Kategori 7", amount: "7.100.000" },
    { category: "Kategori 8", amount: "7.650.000" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
            Biaya Pendidikan <span className="text-red-600">UPI</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kemudahan pembayaran dengan sistem UKT (Uang Kuliah Tunggal) yang disesuaikan dengan kemampuan ekonomi
            keluarga Anda
          </p>
        </div>

        {/* UKT Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {uktCategories.map((ukt, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-red-50 to-yellow-50 border-2 border-red-100 hover:border-red-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer group"
            >
              <div className="p-8 text-center space-y-2">
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">{ukt.category}</p>
                <p className="text-3xl font-black text-red-600">Rp{ukt.amount}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-black mb-6">Informasi Penting</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 flex-shrink-0 text-yellow-400" />
              <span className="text-base leading-relaxed">Penentuan kategori UKT berdasarkan data FAFSA atau data keluarga yang diverifikasi</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 flex-shrink-0 text-yellow-400" />
              <span className="text-base leading-relaxed">Tersedia sistem cicilan dan beasiswa penuh untuk siswa berprestasi</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 flex-shrink-0 text-yellow-400" />
              <span className="text-base leading-relaxed">Fleksibilitas pembayaran dengan opsi transfer bank atau cicilan</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
