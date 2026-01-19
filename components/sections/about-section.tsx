"use client"

import { Award, Users, Lightbulb, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Tentang UPI</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-black text-xl">Universitas Pendidikan Indonesia</strong> berdiri sejak{" "}
                <strong>1954</strong> sebagai perguruan tinggi negeri unggulan yang berfokus pada pengembangan pendidikan dan
                keilmuan multidisiplin, serta berkomitmen mencetak sumber daya manusia berdaya saing nasional dan global.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Berlokasi utama di Bandung dengan lingkungan kampus yang sejuk dan ramah lingkungan, UPI tidak hanya
                menghasilkan tenaga pendidik profesional, tetapi juga ilmuwan, praktisi, dan profesional di berbagai bidang
                non-kependidikan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan visi <strong className="text-black">Leading and Outstanding</strong>, UPI terus mengembangkan inovasi
                dalam pendidikan, penelitian, dan pengabdian kepada masyarakat guna memperkuat perannya sebagai pusat
                keunggulan pendidikan multidisiplin.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <img 
                src="/1e3812b069c9cd89b843734985363f16.jpg" 
                alt="Kampus UPI" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover object-[center_75%]" 
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, label: "Mahasiswa", value: "50,000+" },
            { icon: Lightbulb, label: "Program Studi", value: "70+" },
            { icon: Award, label: "Akreditasi", value: "Unggul" },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-xl border border-red-100 hover:shadow-lg transition-all animate-scale-in flex flex-col items-center text-center min-h-[180px] justify-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon className="w-10 h-10 text-red-600 mb-4" />
                <div className="text-4xl font-black text-black mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium text-base">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
