"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden gradient-mesh pt-20 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img src="/isola.jpg" alt="Hero" className="w-full h-full object-cover opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full mb-8 border border-red-500/20">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span className="text-sm font-semibold text-black">Leading and Outstanding University</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tight leading-tight">
          Universitas Pendidikan Indonesia
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
          Berdiri sejak 1954, UPI berkomitmen menghasilkan pendidik dan profesional berkualitas tinggi dengan standar
          internasional
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollToSection("faculties")}
          >
            Jelajahi Program Studi
          </Button>
          <Button
            size="lg"
            className="border-2 border-black text-black hover:bg-black hover:text-white font-bold text-base px-8 py-6 rounded-lg transition-all bg-transparent"
            onClick={() => scrollToSection("admission")}
          >
            Jalur Pendaftaran
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-8 h-8 text-red-600 animate-bounce" />
      </div>
    </section>
  )
}
