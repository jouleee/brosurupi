"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

interface Faculty {
  id: string
  name: string
  focus: string
  programs: string[]
  image: string
  description: string
}

const faculties: Faculty[] = [
  {
    id: "fip",
    name: "Fakultas Ilmu Pendidikan (FIP)",
    focus: "Ilmu Pendidikan & Kemanusiaan",
    description: "Menghasilkan tenaga pendidik dan ahli pendidikan dengan kompetensi tinggi",
    programs: [
      "Pendidikan Guru Sekolah Dasar",
      "Pendidikan Luar Sekolah",
      "Administrasi Pendidikan",
      "Psikologi Pendidikan",
    ],
    image: "/education-faculty-teaching-learning-classroom.jpg",
  },
  {
    id: "fpips",
    name: "Fakultas Pendidikan IPS (FPIPS)",
    focus: "Pendidikan IPS & Humaniora",
    description: "Program studi yang mengembangkan pemahaman sosial dan budaya",
    programs: ["Pendidikan Geografi", "Pendidikan Sejarah", "Pendidikan Kewarganegaraan", "Pendidikan Ekonomi"],
    image: "/social-studies-history-geography-education.jpg",
  },
  {
    id: "fpbs",
    name: "Fakultas Pendidikan Bahasa & Sastra (FPBS)",
    focus: "Pendidikan Bahasa & Sastra",
    description: "Mengembangkan kemampuan berbahasa dan apresiasi sastra",
    programs: [
      "Pendidikan Bahasa Indonesia",
      "Pendidikan Bahasa Inggris",
      "Pendidikan Bahasa Arab",
      "Pendidikan Bahasa Jepang",
    ],
    image: "/language-literature-education-linguistics.jpg",
  },
  {
    id: "fpmipa",
    name: "Fakultas Pendidikan MIPA (FPMIPA)",
    focus: "Pendidikan Matematika & Sains",
    description: "Program unggulan dalam pendidikan sains dan matematika modern",
    programs: ["Pendidikan Matematika", "Pendidikan Fisika", "Pendidikan Kimia", "Pendidikan Biologi"],
    image: "/science-laboratory-physics-chemistry-biology.jpg",
  },
  {
    id: "fpeb",
    name: "Fakultas Pendidikan Ekonomi & Bisnis (FPEB)",
    focus: "Ekonomi & Bisnis",
    description: "Persiapan profesional di bidang manajemen dan bisnis modern",
    programs: ["Manajemen", "Akuntansi", "Ekonomi Pembangunan"],
    image: "/business-economics-management-finance.jpg",
  },
  {
    id: "fk",
    name: "Fakultas Kedokteran (FK)",
    focus: "Kesehatan & Kedokteran",
    description: "Program kesehatan dengan standar internasional dan fasilitas lengkap",
    programs: ["Program Studi Kedokteran", "Program Studi Keperawatan"],
    image: "/medical-healthcare-hospital-clinic-doctor.jpg",
  },
]

export default function FacultiesSection() {
  return (
    <section id="faculties" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Fakultas & Program Studi</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Eksplorasi 70+ program studi unggulan dari 6 fakultas</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {faculties.map((faculty, idx) => (
            <div
              key={faculty.id}
              className="group bg-white border-2 border-gray-200 hover:border-red-600 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Faculty Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-100 to-yellow-100">
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Faculty Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-sm font-semibold text-red-600 mb-3">{faculty.focus}</p>
                <p className="text-gray-700 text-sm mb-4">{faculty.description}</p>

                {/* Accordion Programs */}
                <Accordion type="single" collapsible className="border-none">
                  <AccordionItem value="programs" className="border-none">
                    <AccordionTrigger className="hover:no-underline text-black font-bold text-sm py-2 px-0 hover:text-red-600">
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4" />
                        Lihat Program Studi ({faculty.programs.length})
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-0">
                      <div className="space-y-2">
                        {faculty.programs.map((program, pidx) => (
                          <div
                            key={pidx}
                            className="flex items-center gap-2 text-gray-700 text-sm bg-red-50 p-2 rounded"
                          >
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            {program}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
