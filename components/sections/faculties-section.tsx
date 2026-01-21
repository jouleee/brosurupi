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
    focus: "Ilmu Pedagogik, Psikologi & Pengelolaan Pendidikan",
    description: "Menghasilkan tenaga pendidik dan tenaga kependidikan profesional",
    programs: [
      "Administrasi Pendidikan",
      "Bimbingan dan Konseling",
      "Pendidikan Masyarakat",
      "Pendidikan Khusus (Pendidikan Luar Biasa)",
      "Teknologi Pendidikan",
      "Pendidikan Guru Sekolah Dasar (PGSD)",
      "Pendidikan Guru Pendidikan Anak Usia Dini (PGPAUD)",
      "Perpustakaan dan Ilmu Informasi",
      "Psikologi",
    ],
    image: "/fip.webp",
  },
  {
    id: "fpips",
    name: "Fakultas Pendidikan Ilmu Pengetahuan Sosial (FPIPS)",
    focus: "Ilmu Sosial, Humaniora, Hukum & Pariwisata",
    description: "Mengembangkan keilmuan sosial, kewarganegaraan, dan pariwisata",
    programs: [
      "Pendidikan Kewarganegaraan",
      "Pendidikan Sejarah",
      "Pendidikan Geografi",
      "Ilmu Pendidikan Agama Islam",
      "Pendidikan Ilmu Pengetahuan Sosial",
      "Pendidikan Sosiologi",
      "Pendidikan Pariwisata",
      "Manajemen Resort dan Leisure",
      "Manajemen Pemasaran Pariwisata",
      "Manajemen Industri Katering",
      "Ilmu Komunikasi",
      "Sains Informasi Geografi",
      "Survei Pemetaan dan Informasi Geografis (D4)",
      "Ilmu Hukum",
    ],
    image: "/fpips.webp",
  },
  {
    id: "fpbs",
    name: "Fakultas Pendidikan Bahasa dan Sastra (FPBS)",
    focus: "Bahasa, Sastra, dan Budaya",
    description: "Mengembangkan kompetensi kebahasaan dan kesastraan nasional dan internasional",
    programs: [
      "Pendidikan Bahasa Indonesia",
      "Pendidikan Bahasa Sunda",
      "Pendidikan Bahasa Inggris",
      "Pendidikan Bahasa Arab",
      "Pendidikan Bahasa Jepang",
      "Pendidikan Bahasa Jerman",
      "Pendidikan Bahasa Perancis",
      "Pendidikan Bahasa Korea",
      "Bahasa dan Sastra Inggris",
      "Bahasa dan Sastra Indonesia",
    ],
    image: "/fpbs.webp",
  },
  {
    id: "fpmipa",
    name: "Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam (FPMIPA)",
    focus: "Matematika, Sains & Ilmu Komputer",
    description: "Pusat unggulan pendidikan dan pengembangan sains serta teknologi",
    programs: [
      "Pendidikan Matematika",
      "Pendidikan Fisika",
      "Pendidikan Biologi",
      "Pendidikan Kimia",
      "Pendidikan Ilmu Komputer",
      "Pendidikan Ilmu Pengetahuan Alam",
      "Matematika",
      "Fisika",
      "Biologi",
      "Kimia",
      "Ilmu Komputer",
    ],
    image: "/fpmipa.webp",
  },
  {
    id: "fptk",
    name: "Fakultas Pendidikan Teknologi dan Kejuruan (FPTK)",
    focus: "Teknik, Rekayasa & Teknologi Terapan",
    description: "Menyiapkan pendidik dan tenaga ahli bidang teknologi dan industri",
    programs: [
      "Pendidikan Teknik Arsitektur",
      "Pendidikan Teknik Bangunan",
      "Pendidikan Teknik Elektro",
      "Pendidikan Teknik Mesin",
      "Pendidikan Kesejahteraan Keluarga",
      "Pendidikan Tata Boga",
      "Pendidikan Tata Busana",
      "Pendidikan Teknologi Agroindustri",
      "Pendidikan Teknik Otomotif",
      "Pendidikan Teknik Otomasi Industri dan Robotika",
      "Arsitektur",
      "Teknik Sipil",
      "Teknik Elektro",
      "Teknik Logistik",
    ],
    image: "/fptk.webp",
  },
  {
    id: "fpok",
    name: "Fakultas Pendidikan Olahraga dan Kesehatan (FPOK)",
    focus: "Olahraga, Kepelatihan & Kesehatan",
    description: "Menghasilkan pendidik, pelatih, dan tenaga kesehatan profesional",
    programs: [
      "Pendidikan Kepelatihan Olahraga",
      "Pendidikan Jasmani, Kesehatan, dan Rekreasi",
      "Pendidikan Guru Sekolah Dasar Pendidikan Jasmani",
      "Ilmu Keolahragaan",
      "Kepelatihan Fisik dan Olahraga",
      "Keperawatan (D3)",
      "Ilmu Gizi",
    ],
    image: "/fpok.webp",
  },
  {
    id: "fpeb",
    name: "Fakultas Pendidikan Ekonomi dan Bisnis (FPEB)",
    focus: "Ekonomi, Manajemen & Akuntansi",
    description: "Membentuk pendidik dan profesional di bidang ekonomi dan bisnis",
    programs: [
      "Pendidikan Akuntansi",
      "Pendidikan Manajemen Bisnis",
      "Pendidikan Manajemen Perkantoran",
      "Pendidikan Ekonomi",
      "Manajemen",
      "Akuntansi",
      "Ilmu Ekonomi dan Keuangan Islam",
    ],
    image: "/fpeb.webp",
  },
  {
    id: "fpsd",
    name: "Fakultas Pendidikan Seni dan Desain (FPSD)",
    focus: "Seni Rupa, Pertunjukan & Media Kreatif",
    description: "Mengembangkan kreativitas seni dan desain berbasis budaya",
    programs: [
      "Pendidikan Seni Rupa",
      "Pendidikan Seni Tari",
      "Pendidikan Seni Musik",
      "Desain Komunikasi Visual",
      "Film dan Televisi",
      "Musik",
    ],
    image: "/fpsd.webp",
  },
];

export default function FacultiesSection() {
  return (
    <section id="faculties" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">Fakultas & Program Studi</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Eksplorasi program studi dari 9 fakultas</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{faculties.map((faculty, idx) => (
            <div
              key={faculty.id}
              className="group bg-white border-2 border-gray-200 hover:border-red-600 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Faculty Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-100 to-yellow-100">
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Faculty Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-sm font-semibold text-red-600 mb-3">{faculty.focus}</p>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{faculty.description}</p>

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
                      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                        {faculty.programs.map((program, pidx) => (
                          <div
                            key={pidx}
                            className="flex items-start gap-2 text-gray-700 text-sm bg-red-50 p-2 rounded"
                          >
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="flex-1">{program}</span>
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
