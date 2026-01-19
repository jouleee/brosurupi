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
    focus: "Ilmu Pedagogik, Psikologi & Kebutuhan Khusus",
    description: "Menghasilkan tenaga pendidik dan ahli pendidikan dengan kompetensi tinggi",
    programs: [
      "Administrasi Pendidikan",
      "Bimbingan dan Konseling",
      "Pendidikan Masyarakat",
      "Pendidikan Khusus (PLB - Pendidikan Luar Biasa)",
      "Teknologi Pendidikan",
      "Pendidikan Guru Sekolah Dasar (PGSD)",
      "Pendidikan Guru PAUD (PGPAUD)",
      "Psikologi (Non-Kependidikan)",
      "Perpustakaan dan Sains Informasi (Non-Kependidikan)",
    ],
    image: "/fip.png",
  },
  {
    id: "fpips",
    name: "Fakultas Pendidikan IPS (FPIPS)",
    focus: "Ilmu Sosial, Humaniora, Komunikasi & Pariwisata",
    description: "Program studi yang mengembangkan pemahaman sosial dan budaya",
    programs: [
      "Pendidikan Kewarganegaraan",
      "Pendidikan Sejarah",
      "Pendidikan Geografi",
      "Pendidikan Sosiologi",
      "Pendidikan IPS",
      "Ilmu Pendidikan Agama Islam",
      "Manajemen Resort dan Leisure (MRL) (Non-Kependidikan)",
      "Manajemen Industri Katering (MIK) (Non-Kependidikan)",
      "Manajemen Pemasaran Pariwisata (Non-Kependidikan)",
      "Ilmu Komunikasi (Non-Kependidikan)",
      "Sains Informasi Geografi (Non-Kependidikan)",
    ],
    image: "/fpips.png",
  },
  {
    id: "fpbs",
    name: "Fakultas Pendidikan Bahasa & Sastra (FPBS)",
    focus: "Bahasa Asing, Bahasa Daerah & Sastra",
    description: "Mengembangkan kemampuan berbahasa dan apresiasi sastra",
    programs: [
      "Pendidikan Bahasa dan Sastra Indonesia",
      "Pendidikan Bahasa Sunda",
      "Pendidikan Bahasa Inggris",
      "Pendidikan Bahasa Arab",
      "Pendidikan Bahasa Jepang",
      "Pendidikan Bahasa Jerman",
      "Pendidikan Bahasa Perancis",
      "Pendidikan Bahasa Korea",
      "Bahasa dan Sastra Inggris (Non-Kependidikan)",
      "Bahasa dan Sastra Indonesia (Non-Kependidikan)",
    ],
    image: "/language-literature-education-linguistics.jpg",
  },
  {
    id: "fpmipa",
    name: "Fakultas Pendidikan MIPA (FPMIPA)",
    focus: "Sains Murni, Matematika & Ilmu Komputer",
    description: "Program unggulan dalam pendidikan sains dan matematika modern",
    programs: [
      "Pendidikan Matematika",
      "Pendidikan Fisika",
      "Pendidikan Biologi",
      "Pendidikan Kimia",
      "Pendidikan Ilmu Komputer",
      "International Program on Science Education (IPSE)",
      "Matematika (Non-Kependidikan)",
      "Fisika (Non-Kependidikan)",
      "Biologi (Non-Kependidikan)",
      "Kimia (Non-Kependidikan)",
      "Ilmu Komputer (Non-Kependidikan)",
    ],
    image: "/science-laboratory-physics-chemistry-biology.jpg",
  },
  {
    id: "fptk",
    name: "Fakultas Pendidikan Teknologi & Kejuruan (FPTK)",
    focus: "Teknik, Rekayasa, Arsitektur & Kesejahteraan Keluarga",
    description: "Pendidikan teknik dan kejuruan untuk mempersiapkan tenaga ahli di industri",
    programs: [
      "Pendidikan Teknik Bangunan",
      "Pendidikan Teknik Mesin",
      "Pendidikan Teknik Elektro",
      "Pendidikan Teknik Arsitektur",
      "Pendidikan Tata Boga",
      "Pendidikan Tata Busana",
      "Pendidikan Kesejahteraan Keluarga",
      "Pendidikan Teknologi Agroindustri",
      "Teknik Sipil (Non-Kependidikan)",
      "Arsitektur (Non-Kependidikan)",
      "Teknik Elektro (Non-Kependidikan)",
      "Teknik Logistik (Non-Kependidikan)",
      "Teknik Otomasi Industri dan Robotika (Non-Kependidikan)",
    ],
    image: "/technical-education-campus-workshop-tools.jpg",
  },
  {
    id: "fpok",
    name: "Fakultas Pendidikan Olahraga & Kesehatan (FPOK)",
    focus: "Olahraga Prestasi, Pendidikan Jasmani & Kesehatan",
    description: "Membentuk atlet, pelatih, dan tenaga kesehatan profesional",
    programs: [
      "Pendidikan Jasmani, Kesehatan dan Rekreasi (PJKR)",
      "Pendidikan Kepelatihan Olahraga (PKO)",
      "Pendidikan Guru Penjas Sekolah Dasar (PGPJSD)",
      "Ilmu Keolahragaan (IKOR) (Non-Kependidikan)",
      "Keperawatan (S1 & Ners) (Non-Kependidikan)",
      "Gizi (Non-Kependidikan)",
    ],
    image: "/sports-campus-athletic-facilities-training.jpg",
  },
  {
    id: "fpeb",
    name: "Fakultas Pendidikan Ekonomi & Bisnis (FPEB)",
    focus: "Ekonomi Makro/Mikro, Manajemen & Akuntansi",
    description: "Persiapan profesional di bidang manajemen dan bisnis modern",
    programs: [
      "Pendidikan Akuntansi",
      "Pendidikan Bisnis",
      "Pendidikan Manajemen Perkantoran",
      "Pendidikan Ekonomi",
      "Manajemen (Non-Kependidikan)",
      "Akuntansi (Non-Kependidikan)",
      "Ilmu Ekonomi dan Keuangan Islam (Non-Kependidikan)",
    ],
    image: "/business-economics-management-finance.jpg",
  },
  {
    id: "fpsd",
    name: "Fakultas Pendidikan Seni & Desain (FPSD)",
    focus: "Seni Pertunjukan, Rupa & Desain Visual",
    description: "Mengembangkan kreativitas dan kemampuan seni di berbagai bidang",
    programs: [
      "Pendidikan Seni Rupa",
      "Pendidikan Seni Tari",
      "Pendidikan Seni Musik",
      "Desain Komunikasi Visual (DKV) (Non-Kependidikan)",
      "Musik (Non-Kependidikan)",
      "Film dan Televisi (Non-Kependidikan)",
    ],
    image: "/vocational-training-campus-students-practice.jpg",
  },
  {
    id: "fk",
    name: "Fakultas Kedokteran (FK)",
    focus: "Pendidikan Dokter & Kesehatan Masyarakat",
    description: "Program kesehatan dengan standar internasional dan fasilitas lengkap",
    programs: ["Kedokteran (S1) (Non-Kependidikan)", "Pendidikan Profesi Dokter"],
    image: "/nursing-campus-healthcare-hospital-training.jpg",
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
          <p className="text-lg text-gray-700">Eksplorasi 90+ program studi unggulan dari 9 fakultas</p>
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
