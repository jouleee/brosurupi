"use client"

import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import FacultiesSection from "@/components/sections/faculties-section"
import CampusesSection from "@/components/sections/campuses-section"
import AdmissionSection from "@/components/sections/admission-section"
import UKTSection from "@/components/sections/ukt-section"
import GallerySection from "@/components/sections/gallery-section"
import QuizSection from "@/components/sections/quiz-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FacultiesSection />
      <CampusesSection />
      <AdmissionSection />
      <UKTSection />
      {/* <GallerySection /> */}
      <QuizSection />
      <Footer />
    </main>
  )
}
