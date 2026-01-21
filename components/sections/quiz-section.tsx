"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Target, Zap } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

const allQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Universitas Pendidikan Indonesia (UPI) berdiri pada tahun berapa?",
    "options": ["1945", "1954", "1960", "1975"],
    "correctAnswer": "1954",
    "explanation": "UPI didirikan pada tanggal 20 Oktober 1954."
  },
  {
    "id": 2,
    "question": "Apa nama awal UPI saat pertama kali didirikan?",
    "options": ["IKIP Bandung", "PTPG", "UNPAD", "STKIP"],
    "correctAnswer": "PTPG",
    "explanation": "Nama awalnya adalah Perguruan Tinggi Pendidikan Guru (PTPG)."
  },
  {
    "id": 3,
    "question": "Di jalan manakah lokasi kampus utama UPI Bandung berada?",
    "options": ["Jl. Dago", "Jl. Dipatiukur", "Jl. Dr. Setiabudhi", "Jl. Soekarno Hatta"],
    "correctAnswer": "Jl. Dr. Setiabudhi",
    "explanation": "Kampus utama UPI terletak di Jl. Dr. Setiabudhi No. 229, Bandung."
  },
  {
    "id": 4,
    "question": "Apa nama gedung ikonik peninggalan Belanda yang menjadi simbol UPI?",
    "options": ["Gedung Sate", "Gedung Merdeka", "Villa Isola (Bumi Siliwangi)", "Gedung Dwi Warna"],
    "correctAnswer": "Villa Isola (Bumi Siliwangi)",
    "explanation": "Villa Isola adalah gedung bersejarah yang kini menjadi kantor Rektorat UPI bernama Bumi Siliwangi."
  },
  {
    "id": 5,
    "question": "Apa semboyan atau tagline utama UPI?",
    "options": ["World Class University", "Leading and Outstanding", "Kampus Merdeka", "Excellent and Trusted"],
    "correctAnswer": "Leading and Outstanding",
    "explanation": "Tagline resmi UPI adalah 'Leading and Outstanding' (Pelopor dan Unggul)."
  },
  {
    "id": 6,
    "question": "Berapa jumlah kampus daerah (kampus satelit) yang dimiliki UPI?",
    "options": ["3", "4", "5", "6"],
    "correctAnswer": "5",
    "explanation": "UPI memiliki 5 kampus daerah: Cibiru, Sumedang, Tasikmalaya, Purwakarta, dan Serang."
  },
  {
    "id": 7,
    "question": "Kampus daerah UPI yang berlokasi di provinsi Banten adalah?",
    "options": ["UPI Kampus Purwakarta", "UPI Kampus Cibiru", "UPI Kampus Serang", "UPI Kampus Tasikmalaya"],
    "correctAnswer": "UPI Kampus Serang",
    "explanation": "UPI Kampus Serang terletak di Kota Serang, Provinsi Banten."
  },
  {
    "id": 8,
    "question": "Fakultas yang fokus pada pendidikan olahraga dan kesehatan di UPI adalah?",
    "options": ["FIP", "FPOK", "FPSD", "FPTK"],
    "correctAnswer": "FPOK",
    "explanation": "FPOK adalah singkatan dari Fakultas Pendidikan Olahraga dan Kesehatan."
  },
  {
    "id": 9,
    "question": "Apa kepanjangan dari FPMIPA?",
    "options": ["Fakultas Pendidikan Matematika dan IPA", "Fakultas Pengajaran Matematika dan IPA", "Fakultas Penelitian Matematika dan IPA", "Forum Pendidikan Matematika dan IPA"],
    "correctAnswer": "Fakultas Pendidikan Matematika dan IPA",
    "explanation": "FPMIPA menaungi jurusan sains dan matematika."
  },
  {
    "id": 10,
    "question": "Apa nama museum yang terletak di dalam area kampus UPI?",
    "options": ["Museum Geologi", "Museum Pendidikan Nasional", "Museum Sri Baduga", "Museum KAA"],
    "correctAnswer": "Museum Pendidikan Nasional",
    "explanation": "Museum Pendidikan Nasional (Mupenas) terletak di gerbang utama kampus UPI."
  },
  {
    "id": 11,
    "question": "Warna bendera/panji Fakultas Ilmu Pendidikan (FIP) adalah?",
    "options": ["Merah", "Hijau", "Kuning", "Biru"],
    "correctAnswer": "Hijau",
    "explanation": "Warna identitas FIP adalah hijau."
  },
  {
    "id": 12,
    "question": "Warna bendera/panji FPOK adalah?",
    "options": ["Kuning", "Cokelat", "Ungu", "Abu-abu"],
    "correctAnswer": "Kuning",
    "explanation": "Warna identitas FPOK adalah kuning."
  },
  {
    "id": 13,
    "question": "Program studi 'Ilmu Komunikasi' berada di bawah fakultas apa?",
    "options": ["FPBS", "FPIPS", "FIP", "FPSD"],
    "correctAnswer": "FPIPS",
    "explanation": "Ilmu Komunikasi berada di bawah Fakultas Pendidikan Ilmu Pengetahuan Sosial."
  },
  {
    "id": 14,
    "question": "Siapakah pemilik asli Villa Isola sebelum menjadi gedung rektorat UPI?",
    "options": ["C.P. Wolff Schoemaker", "Dominique Willem Berretty", "Soekarno", "Daendels"],
    "correctAnswer": "Dominique Willem Berretty",
    "explanation": "Gedung ini dibangun untuk D.W. Berretty, seorang raja media massa pada masa Hindia Belanda."
  },
  {
    "id": 15,
    "question": "Apa nama masjid besar yang menjadi pusat ibadah di kampus UPI Bandung?",
    "options": ["Masjid Salman", "Masjid Al-Furqon", "Masjid Istiqomah", "Masjid Raya Bandung"],
    "correctAnswer": "Masjid Al-Furqon",
    "explanation": "Masjid Al-Furqon adalah masjid utama di kampus UPI Bumi Siliwangi."
  },
  {
    "id": 16,
    "question": "Fakultas yang memiliki jurusan Pendidikan Seni Musik adalah?",
    "options": ["FPBS", "FPSD", "FIP", "FPIPS"],
    "correctAnswer": "FPSD",
    "explanation": "FPSD adalah Fakultas Pendidikan Seni dan Desain."
  },
  {
    "id": 17,
    "question": "Apa nama gedung pertemuan umum/auditorium di UPI?",
    "options": ["Sabuga", "BPU (Balai Pertemuan Umum)", "Gd. Merdeka", "Gd. Sate"],
    "correctAnswer": "BPU (Balai Pertemuan Umum)",
    "explanation": "Gedung Achmad Sanusi sering disebut BPU (Balai Pertemuan Umum)."
  },
  {
    "id": 18,
    "question": "Program studi DKV (Desain Komunikasi Visual) berada di fakultas?",
    "options": ["FPTK", "FPSD", "FPIPS", "FPMIPA"],
    "correctAnswer": "FPSD",
    "explanation": "DKV berada di bawah naungan Fakultas Pendidikan Seni dan Desain."
  },
  {
    "id": 19,
    "question": "Kapan UPI resmi berubah status dari IKIP Bandung menjadi Universitas (UPI)?",
    "options": ["1990", "1999", "2004", "2010"],
    "correctAnswer": "1999",
    "explanation": "Perubahan status dari IKIP menjadi Universitas terjadi pada tahun 1999 melalui Keppres."
  },
  {
    "id": 20,
    "question": "Jurusan 'Pendidikan Bahasa Korea' terdapat di fakultas?",
    "options": ["FPIPS", "FPBS", "FIP", "FPSD"],
    "correctAnswer": "FPBS",
    "explanation": "Semua jurusan bahasa berada di Fakultas Pendidikan Bahasa dan Sastra (FPBS)."
  },
  {
    "id": 21,
    "question": "Apa nama kegiatan masa orientasi mahasiswa baru di UPI?",
    "options": ["OSPEK", "Mokaku", "PKKMB", "MABIM"],
    "correctAnswer": "Mokaku",
    "explanation": "Mokaku adalah singkatan dari Masa Orientasi Kampus dan Kuliah Umum."
  },
  {
    "id": 22,
    "question": "Kampus daerah UPI yang terkenal dengan jurusan Kelautan dan Perikanan adalah?",
    "options": ["Cibiru", "Sumedang", "Serang", "Purwakarta"],
    "correctAnswer": "Serang",
    "explanation": "UPI Kampus Serang memiliki fokus pada kemaritiman/kelautan."
  },
  {
    "id": 23,
    "question": "Jurusan Psikologi di UPI berada di bawah fakultas?",
    "options": ["FPIPS", "FIP", "FPMIPA", "FPOK"],
    "correctAnswer": "FIP",
    "explanation": "Psikologi (Non-Kependidikan) berada di Fakultas Ilmu Pendidikan (FIP)."
  },
  {
    "id": 24,
    "question": "Apa kepanjangan dari FPTK?",
    "options": ["Fakultas Pendidikan Teknik dan Kejuruan", "Fakultas Pengajaran Teknik dan Komputer", "Fakultas Pendidikan Teknologi dan Kejuruan", "Fakultas Pendidikan Tata Boga dan Kecantikan"],
    "correctAnswer": "Fakultas Pendidikan Teknik dan Kejuruan",
    "explanation": "FPTK menaungi jurusan teknik dan vokasi."
  },
  {
    "id": 25,
    "question": "Gedung Gymnasium UPI sering digunakan untuk acara?",
    "options": ["Konser Musik", "Wisuda", "Rapat Senat", "Kuliah Umum"],
    "correctAnswer": "Wisuda",
    "explanation": "Gymnasium UPI adalah tempat pelaksanaan upacara wisuda dan acara olahraga besar."
  },
  {
    "id": 26,
    "question": "Jurusan Manajemen Resort dan Leisure (MRL) berada di fakultas?",
    "options": ["FPEB", "FPIPS", "FPSD", "FPTK"],
    "correctAnswer": "FPIPS",
    "explanation": "MRL berada di FPIPS karena berkaitan dengan pariwisata sosial."
  },
  {
    "id": 27,
    "question": "Kampus UPI Cibiru terletak di wilayah?",
    "options": ["Bandung Barat", "Kabupaten Bandung", "Cimahi", "Kota Bandung (Timur)"],
    "correctAnswer": "Kabupaten Bandung",
    "explanation": "Secara administratif, lokasi UPI Cibiru berada di perbatasan, namun sering diasosiasikan dengan Bandung Timur/Kabupaten."
  },
  {
    "id": 28,
    "question": "Apa nama kolam renang berstandar internasional yang dimiliki UPI?",
    "options": ["Tirtamulya", "Karang Setra", "Kolam Renang UPI", "Aquatic Stadium"],
    "correctAnswer": "Kolam Renang UPI",
    "explanation": "UPI memiliki fasilitas kolam renang berstandar internasional di area FPOK."
  },
  {
    "id": 29,
    "question": "Siapa arsitek yang merancang Villa Isola?",
    "options": ["C.P. Wolff Schoemaker", "Ir. Soekarno", "Ridwan Kamil", "Thomas Karsten"],
    "correctAnswer": "C.P. Wolff Schoemaker",
    "explanation": "Prof. Charles Prosper Wolff Schoemaker adalah arsitek terkenal yang merancang Isola."
  },
  {
    "id": 30,
    "question": "Apa warna jas almamater UPI?",
    "options": ["Biru Dongker", "Hijau", "Kuning", "Abu-abu"],
    "correctAnswer": "Abu-abu",
    "explanation": "Jas almamater UPI berwarna dasar abu-abu/perak."
  },
  {
    "id": 31,
    "question": "Fakultas terbaru yang didirikan di UPI pada tahun 2023/2024 adalah?",
    "options": ["Fakultas Hukum", "Fakultas Kedokteran", "Fakultas Pertanian", "Fakultas Filsafat"],
    "correctAnswer": "Fakultas Kedokteran",
    "explanation": "UPI baru saja membuka Fakultas Kedokteran (FK) dengan prodi Kedokteran dan Pendidikan Profesi Dokter."
  },
  {
    "id": 32,
    "question": "Jurusan 'Pendidikan Tata Boga' berada di fakultas?",
    "options": ["FPTK", "FPSD", "FPIPS", "FPEB"],
    "correctAnswer": "FPTK",
    "explanation": "Tata Boga masuk dalam rumpun Pendidikan Kesejahteraan Keluarga di FPTK."
  },
  {
    "id": 33,
    "question": "Apa nama poliklinik yang melayani kesehatan mahasiswa UPI?",
    "options": ["Puskesmas Ledeng", "Poliklinik UPI", "RS Hasan Sadikin", "Klinik Padjadjaran"],
    "correctAnswer": "Poliklinik UPI",
    "explanation": "UPI memiliki Poliklinik sendiri di dalam kampus untuk pelayanan kesehatan sivitas akademika."
  },
  {
    "id": 34,
    "question": "Jurusan Ilmu Komputer (Ilkom) berada di fakultas?",
    "options": ["FPTK", "FPMIPA", "FIP", "FPEB"],
    "correctAnswer": "FPMIPA",
    "explanation": "Ilmu Komputer dan Pendidikan Ilmu Komputer berada di bawah FPMIPA."
  },
  {
    "id": 35,
    "question": "Salah satu komedian terkenal Indonesia yang merupakan alumni UPI jurusan Seni Musik adalah?",
    "options": ["Sule", "Andre Taulany", "Parto", "Denny Cagur"],
    "correctAnswer": "Sule",
    "explanation": "Entis Sutisna (Sule) pernah berkuliah di Pendidikan Seni Musik UPI (meski tidak tamat, ia adalah alumni kebanggaan)."
  },
  {
    "id": 36,
    "question": "Presenter Omesh (Ananda Omesh) adalah alumni UPI fakultas?",
    "options": ["FPOK", "FPIPS", "FPBS", "FIP"],
    "correctAnswer": "FPIPS",
    "explanation": "Omesh adalah alumni jurusan Ilmu Komunikasi FPIPS UPI."
  },
  {
    "id": 37,
    "question": "Apa nama Unit Kegiatan Mahasiswa (UKM) yang fokus pada kesenian angklung dan musik bambu?",
    "options": ["Kabumi", "Lises", "Padus", "Teater Lakon"],
    "correctAnswer": "Kabumi",
    "explanation": "KABUMI (Keluarga Besar Bumi Siliwangi) adalah UKM pelestari budaya angklung dan bambu."
  },
  {
    "id": 38,
    "question": "Jurusan Arsitektur di UPI masuk ke dalam fakultas?",
    "options": ["FPTK", "FPSD", "FPMIPA", "FPIPS"],
    "correctAnswer": "FPTK",
    "explanation": "Prodi Arsitektur dan Pendidikan Teknik Arsitektur ada di FPTK."
  },
  {
    "id": 39,
    "question": "Lagu wajib 'Hymne UPI' diciptakan oleh?",
    "options": ["Ismail Marzuki", "H. Acep Suherman", "R. Machjar Angga Koesoemadinata", "Ibu Sud"],
    "correctAnswer": "H. Acep Suherman",
    "explanation": "Hymne dan Mars UPI diciptakan oleh dosen seni musik UPI, H. Acep Suherman."
  },
  {
    "id": 40,
    "question": "Jurusan Akuntansi berada di fakultas?",
    "options": ["FPEB", "FPIPS", "FIP", "FPTK"],
    "correctAnswer": "FPEB",
    "explanation": "Akuntansi adalah bagian dari Fakultas Pendidikan Ekonomi dan Bisnis (FPEB)."
  },
  {
    "id": 41,
    "question": "UPI memiliki status perguruan tinggi sebagai?",
    "options": ["PTN-Satker", "PTN-BLU", "PTN-BH", "PTS"],
    "correctAnswer": "PTN-BH",
    "explanation": "UPI berstatus Perguruan Tinggi Negeri Berbadan Hukum (PTN-BH)."
  },
  {
    "id": 42,
    "question": "Di mana lokasi asrama mahasiswa UPI?",
    "options": ["Hanya di luar kampus", "Di dalam kampus utama", "Di Dago", "Di Cihampelas"],
    "correctAnswer": "Di dalam kampus utama",
    "explanation": "UPI memiliki asrama putra dan putri di dalam area kampus utama."
  },
  {
    "id": 43,
    "question": "Fakultas Pendidikan Bahasa dan Sastra disingkat menjadi?",
    "options": ["FIP", "FBS", "FPBS", "F Sastra"],
    "correctAnswer": "FPBS",
    "explanation": "Singkatan resminya adalah FPBS."
  },
  {
    "id": 44,
    "question": "Jurusan Pendidikan Bahasa Sunda berada di fakultas?",
    "options": ["FPSD", "FPBS", "FPIPS", "FIP"],
    "correctAnswer": "FPBS",
    "explanation": "Pendidikan Bahasa Sunda adalah bagian dari FPBS."
  },
  {
    "id": 45,
    "question": "Kampus UPI Tasikmalaya berfokus pada prodi PGSD dan?",
    "options": ["Kewirausahaan & Bisnis Digital", "Hukum", "Kedokteran", "Teknik Sipil"],
    "correctAnswer": "Kewirausahaan & Bisnis Digital",
    "explanation": "Kampus Tasikmalaya mengembangkan prodi Kewirausahaan dan Bisnis Digital."
  },
  {
    "id": 46,
    "question": "Jurusan Pendidikan Khusus (PKh/PLB) mempelajari tentang?",
    "options": ["Pendidikan anak berbakat & berkebutuhan khusus", "Pendidikan orang dewasa", "Pendidikan luar sekolah", "Pendidikan masyarakat"],
    "correctAnswer": "Pendidikan anak berbakat & berkebutuhan khusus",
    "explanation": "PKh/PLB fokus pada pendidikan inklusif dan kebutuhan khusus."
  },
  {
    "id": 47,
    "question": "Apa nama taman ikonik di depan Gedung Isola?",
    "options": ["Taman Partere", "Taman Film", "Taman Jomblo", "Taman Lansia"],
    "correctAnswer": "Taman Partere",
    "explanation": "Taman Partere adalah taman indah yang terletak di bagian depan Villa Isola."
  },
  {
    "id": 48,
    "question": "Jurusan Teknik Elektro berada di fakultas?",
    "options": ["FPMIPA", "FPTK", "FIP", "FPEB"],
    "correctAnswer": "FPTK",
    "explanation": "Teknik Elektro berada di Fakultas Pendidikan Teknologi dan Kejuruan."
  },
  {
    "id": 49,
    "question": "Gedung kuliah umum (GKU) di UPI sering digunakan untuk?",
    "options": ["Perkuliahan lintas fakultas", "Asrama", "Kantin", "Parkir"],
    "correctAnswer": "Perkuliahan lintas fakultas",
    "explanation": "GKU digunakan untuk mata kuliah umum (MKU) yang diikuti mahasiswa dari berbagai jurusan."
  },
  {
    "id": 50,
    "question": "Jurusan 'Perpustakaan dan Sains Informasi' berada di fakultas?",
    "options": ["FPIPS", "FIP", "FPBS", "FPTK"],
    "correctAnswer": "FIP",
    "explanation": "Jurusan ini berada di bawah Fakultas Ilmu Pendidikan (FIP)."
  },
  {
    "id": 51,
    "question": "Kampus UPI Purwakarta memiliki prodi unggulan di bidang?",
    "options": ["Sistem Telekomunikasi", "Kedokteran", "Sastra", "Seni"],
    "correctAnswer": "Sistem Telekomunikasi",
    "explanation": "Salah satu prodi unik di Purwakarta adalah Sistem Telekomunikasi."
  },
  {
    "id": 52,
    "question": "Jurusan Kimia dan Pendidikan Kimia berada di fakultas?",
    "options": ["FPTK", "FPMIPA", "FIP", "FPOK"],
    "correctAnswer": "FPMIPA",
    "explanation": "Kimia adalah bagian dari sains murni di FPMIPA."
  },
  {
    "id": 53,
    "question": "Program IPSE (International Program on Science Education) menggunakan bahasa pengantar?",
    "options": ["Bahasa Sunda", "Bahasa Inggris", "Bahasa Indonesia", "Bahasa Arab"],
    "correctAnswer": "Bahasa Inggris",
    "explanation": "IPSE adalah program pendidikan sains internasional dengan pengantar Bahasa Inggris."
  },
  {
    "id": 54,
    "question": "FPEB adalah singkatan dari?",
    "options": ["Fakultas Pendidikan Ekonomi dan Bisnis", "Fakultas Pengajaran Ekonomi dan Bisnis", "Fakultas Penelitian Ekonomi Besar", "Fakultas Pengembangan Ekonomi Bangsa"],
    "correctAnswer": "Fakultas Pendidikan Ekonomi dan Bisnis",
    "explanation": "FPEB menaungi jurusan ekonomi, akuntansi, dan manajemen."
  },
  {
    "id": 55,
    "question": "Jurusan Pendidikan Sejarah berada di fakultas?",
    "options": ["FPBS", "FPIPS", "FIP", "FPSD"],
    "correctAnswer": "FPIPS",
    "explanation": "Sejarah adalah bagian dari ilmu sosial di FPIPS."
  },
  {
    "id": 56,
    "question": "Apa nama gedung pusat bahasa di UPI?",
    "options": ["Balai Bahasa", "Language Center", "Gedung Kebudayaan", "Lab Bahasa"],
    "correctAnswer": "Balai Bahasa",
    "explanation": "Balai Bahasa UPI melayani kursus dan tes bahasa asing."
  },
  {
    "id": 57,
    "question": "Jurusan Pendidikan Teknik Mesin berada di fakultas?",
    "options": ["FPMIPA", "FPTK", "FPOK", "FPSD"],
    "correctAnswer": "FPTK",
    "explanation": "Teknik Mesin berada di FPTK."
  },
  {
    "id": 58,
    "question": "Apa nama jalan kecil/gang legendaris tempat kost mahasiswa di sekitar UPI?",
    "options": ["Geger Kalong (Gerlong)", "Cihampelas", "Dago Atas", "Lembang"],
    "correctAnswer": "Geger Kalong (Gerlong)",
    "explanation": "Kawasan Geger Kalong (Gerlong) adalah pusat hunian dan kuliner mahasiswa UPI."
  },
  {
    "id": 59,
    "question": "Rektorat UPI biasa disebut dengan nama gedung?",
    "options": ["Gedung Sate", "Bumi Siliwangi", "Bumi Sangkuriang", "Bumi Pasundan"],
    "correctAnswer": "Bumi Siliwangi",
    "explanation": "Nama resmi gedung rektorat (Isola) adalah Bumi Siliwangi."
  },
  {
    "id": 60,
    "question": "Jurusan Pendidikan Sosiologi berada di fakultas?",
    "options": ["FIP", "FPIPS", "FPBS", "FPEB"],
    "correctAnswer": "FPIPS",
    "explanation": "Sosiologi berada di Fakultas Pendidikan Ilmu Pengetahuan Sosial."
  },
  {
    "id": 61,
    "question": "Lulusan program studi kependidikan di UPI akan mendapat gelar?",
    "options": ["S.Si.", "S.Pd.", "S.Hum.", "S.Sos."],
    "correctAnswer": "S.Pd.",
    "explanation": "S.Pd. adalah Sarjana Pendidikan."
  },
  {
    "id": 62,
    "question": "Jurusan Manajemen Industri Katering (MIK) berada di fakultas?",
    "options": ["FPTK", "FPIPS", "FPEB", "FPSD"],
    "correctAnswer": "FPIPS",
    "explanation": "MIK berada di FPIPS, sering dikaitkan dengan pariwisata."
  },
  {
    "id": 63,
    "question": "Jurusan Pendidikan Seni Tari berada di fakultas?",
    "options": ["FPBS", "FPSD", "FIP", "FPOK"],
    "correctAnswer": "FPSD",
    "explanation": "Seni Tari berada di FPSD."
  },
  {
    "id": 64,
    "question": "Apa nama unit bisnis UPI yang menyediakan air minum kemasan?",
    "options": ["UPI Water", "Isola Water", "Siliwangi Water", "Edu Water"],
    "correctAnswer": "UPI Water",
    "explanation": "UPI memproduksi air minum sendiri dengan merek UPI Water."
  },
  {
    "id": 65,
    "question": "Jurusan PJKR (Pendidikan Jasmani Kesehatan dan Rekreasi) ada di fakultas?",
    "options": ["FIP", "FPOK", "FPTK", "FPSD"],
    "correctAnswer": "FPOK",
    "explanation": "PJKR adalah jurusan utama di FPOK."
  },
  {
    "id": 66,
    "question": "Apa nama gedung perpustakaan pusat UPI?",
    "options": ["Perpustakaan Nasional", "Perpustakaan UPI", "Library Center", "Rumah Baca"],
    "correctAnswer": "Perpustakaan UPI",
    "explanation": "Gedung Perpustakaan UPI terletak di dekat Masjid Al-Furqon."
  },
  {
    "id": 67,
    "question": "Program studi Teknik Sipil (Murni) ada di fakultas?",
    "options": ["FPMIPA", "FPTK", "FPEB", "FPSD"],
    "correctAnswer": "FPTK",
    "explanation": "Selain Pendidikan Teknik Bangunan, FPTK juga memiliki prodi Teknik Sipil murni."
  },
  {
    "id": 68,
    "question": "Jurusan Pendidikan Bahasa Arab berada di fakultas?",
    "options": ["FPIPS", "FPBS", "FIP", "FPSD"],
    "correctAnswer": "FPBS",
    "explanation": "Bahasa Arab berada di FPBS."
  },
  {
    "id": 69,
    "question": "Apa kepanjangan dari prodi PGPAUD?",
    "options": ["Pendidikan Guru Pendidikan Anak Usia Dini", "Pendidikan Guru Pembina Anak Usia Dini", "Pendidikan Guru Pengajar Anak Usia Dini", "Program Guru Pendidikan Anak Usia Dini"],
    "correctAnswer": "Pendidikan Guru Pendidikan Anak Usia Dini",
    "explanation": "PGPAUD mencetak guru untuk anak usia dini (TK/PAUD)."
  },
  {
    "id": 70,
    "question": "Jurusan Biologi dan Pendidikan Biologi berada di fakultas?",
    "options": ["FPTK", "FPMIPA", "FIP", "FPOK"],
    "correctAnswer": "FPMIPA",
    "explanation": "Biologi adalah bagian dari FPMIPA."
  },
  {
    "id": 71,
    "question": "Kampus UPI Sumedang terkenal dengan program studi?",
    "options": ["PGSD Penjas", "Teknik Mesin", "Kedokteran", "Seni Musik"],
    "correctAnswer": "PGSD Penjas",
    "explanation": "Kampus Sumedang memiliki spesialisasi PGSD dan PGSD Penjas."
  },
  {
    "id": 72,
    "question": "Jurusan 'Film dan Televisi' berada di fakultas?",
    "options": ["FPIPS", "FPSD", "FPBS", "FPTK"],
    "correctAnswer": "FPSD",
    "explanation": "Prodi Film dan Televisi berada di bawah naungan FPSD."
  },
  {
    "id": 73,
    "question": "Jurusan Keperawatan di UPI berada di bawah fakultas?",
    "options": ["FK", "FPOK", "FIP", "FPMIPA"],
    "correctAnswer": "FPOK",
    "explanation": "Keperawatan saat ini berada di bawah naungan FPOK."
  },
  {
    "id": 74,
    "question": "Apa nama stadion sepak bola yang dimiliki UPI?",
    "options": ["Stadion Siliwangi", "Stadion UPI", "Stadion GBLA", "Stadion Jalak Harupat"],
    "correctAnswer": "Stadion UPI",
    "explanation": "UPI memiliki stadion sepak bola dan lintasan lari sendiri di area kampus."
  },
  {
    "id": 75,
    "question": "Jurusan Pendidikan Kewarganegaraan (PKn) berada di fakultas?",
    "options": ["FIP", "FPIPS", "FPEB", "FPBS"],
    "correctAnswer": "FPIPS",
    "explanation": "PKn adalah bagian dari ilmu sosial di FPIPS."
  },
  {
    "id": 76,
    "question": "Apa warna bendera fakultas FPSD?",
    "options": ["Oranye", "Cokelat", "Ungu", "Pink"],
    "correctAnswer": "Oranye",
    "explanation": "Warna identitas FPSD adalah oranye."
  },
  {
    "id": 77,
    "question": "Apa warna bendera fakultas FPMIPA?",
    "options": ["Merah", "Biru", "Hijau", "Kuning"],
    "correctAnswer": "Biru",
    "explanation": "Warna identitas FPMIPA adalah biru."
  },
  {
    "id": 78,
    "question": "Jurusan Teknik Logistik berada di fakultas?",
    "options": ["FPEB", "FPTK", "FPIPS", "FPMIPA"],
    "correctAnswer": "FPTK",
    "explanation": "Teknik Logistik adalah prodi non-kependidikan di FPTK."
  },
  {
    "id": 79,
    "question": "Apa nama hotel yang dikelola oleh UPI sebagai tempat praktik dan komersial?",
    "options": ["Isola Resort", "Grand Tjokro", "GH Universal", "Travello"],
    "correctAnswer": "Isola Resort",
    "explanation": "Isola Resort adalah hotel pelatihan yang dikelola UPI."
  },
  {
    "id": 80,
    "question": "Jurusan Pendidikan Teknologi Agroindustri berada di fakultas?",
    "options": ["FPMIPA", "FPTK", "FPIPS", "FPEB"],
    "correctAnswer": "FPTK",
    "explanation": "Agroindustri masuk dalam rumpun teknologi di FPTK."
  },
  {
    "id": 81,
    "question": "Gelar lulusan prodi Ilmu Komputer (Non-Kependidikan) adalah?",
    "options": ["S.Pd.", "S.Kom.", "S.Si.", "S.T."],
    "correctAnswer": "S.Kom.",
    "explanation": "Lulusan Ilmu Komputer murni bergelar Sarjana Komputer (S.Kom)."
  },
  {
    "id": 82,
    "question": "Jurusan Pendidikan Geografi berada di fakultas?",
    "options": ["FPMIPA", "FPIPS", "FIP", "FPTK"],
    "correctAnswer": "FPIPS",
    "explanation": "Pendidikan Geografi berada di FPIPS."
  },
  {
    "id": 83,
    "question": "Terminal angkot yang berada tepat di seberang gerbang bawah UPI adalah?",
    "options": ["Terminal Cicaheum", "Terminal Ledeng", "Terminal Dago", "Terminal Leuwipanjang"],
    "correctAnswer": "Terminal Ledeng",
    "explanation": "Terminal Ledeng terletak tepat di seberang gerbang utama UPI."
  },
  {
    "id": 84,
    "question": "Jurusan Pendidikan Bahasa Perancis berada di fakultas?",
    "options": ["FPIPS", "FPBS", "FPSD", "FIP"],
    "correctAnswer": "FPBS",
    "explanation": "Bahasa Perancis berada di FPBS."
  },
  {
    "id": 85,
    "question": "Apa nama gedung Fakultas Pascasarjana UPI?",
    "options": ["Gedung SPs", "Gedung Rektorat", "Gedung Isola", "Gedung University Center"],
    "correctAnswer": "Gedung SPs",
    "explanation": "Sekolah Pascasarjana menempati Gedung SPs yang cukup megah di area belakang."
  },
  {
    "id": 86,
    "question": "Siapakah Rektor UPI periode 2020-2025?",
    "options": ["Prof. Furqon", "Prof. Sunaryo", "Prof. M. Solehuddin", "Prof. Fakry Gaffar"],
    "correctAnswer": "Prof. M. Solehuddin",
    "explanation": "Prof. Dr. M. Solehuddin, M.Pd., M.A. menjabat sebagai rektor pada periode tersebut."
  },
  {
    "id": 87,
    "question": "Jurusan Pendidikan Seni Rupa berada di fakultas?",
    "options": ["FPBS", "FPSD", "FIP", "FPTK"],
    "correctAnswer": "FPSD",
    "explanation": "Pendidikan Seni Rupa berada di FPSD."
  },
  {
    "id": 88,
    "question": "Apa arti 'Bumi Siliwangi'?",
    "options": ["Rumah Prabu Siliwangi", "Tanah Siliwangi", "Istana Siliwangi", "Taman Siliwangi"],
    "correctAnswer": "Rumah Prabu Siliwangi",
    "explanation": "Secara harfiah dapat diartikan sebagai tempat tinggal/rumah yang berkaitan dengan semangat Siliwangi."
  },
  {
    "id": 89,
    "question": "Jurusan PGSD Bumi Siliwangi berada di bawah fakultas?",
    "options": ["FIP", "FPIPS", "FPMIPA", "FPSD"],
    "correctAnswer": "FIP",
    "explanation": "PGSD Kampus Utama (Bumi Siliwangi) berada di bawah FIP."
  },
  {
    "id": 90,
    "question": "Apa nama bank yang memiliki kantor cabang pembantu di dalam kampus UPI?",
    "options": ["BNI", "BCA", "Mandiri", "BRI"],
    "correctAnswer": "BNI",
    "explanation": "BNI memiliki kantor cabang besar di dalam area kampus UPI (serta BJB dan BSI)."
  },
  {
    "id": 91,
    "question": "Jurusan 'Sains Informasi Geografi' (SaIG) berada di fakultas?",
    "options": ["FPMIPA", "FPIPS", "FPTK", "FIP"],
    "correctAnswer": "FPIPS",
    "explanation": "SaIG adalah prodi non-kependidikan di FPIPS."
  },
  {
    "id": 92,
    "question": "Jurusan Fisika dan Pendidikan Fisika berada di fakultas?",
    "options": ["FPTK", "FPMIPA", "FIP", "FPOK"],
    "correctAnswer": "FPMIPA",
    "explanation": "Fisika berada di FPMIPA."
  },
  {
    "id": 93,
    "question": "Nama majalah/koran kampus mahasiswa UPI adalah?",
    "options": ["Isolapos", "Suara Mahasiswa", "Ganesha", "Balairung"],
    "correctAnswer": "Isolapos",
    "explanation": "Isolapos adalah pers mahasiswa yang aktif di UPI."
  },
  {
    "id": 94,
    "question": "Jurusan Pendidikan Bisnis berada di fakultas?",
    "options": ["FPIPS", "FPEB", "FPTK", "FIP"],
    "correctAnswer": "FPEB",
    "explanation": "Pendidikan Bisnis ada di FPEB."
  },
  {
    "id": 95,
    "question": "Apa sebutan untuk mahasiswa UPI?",
    "options": ["Insan Akademis", "Sivitas Isola", "Insan UPI", "Mahasiswa Bumi Siliwangi"],
    "correctAnswer": "Mahasiswa Bumi Siliwangi",
    "explanation": "Sering dijuluki sebagai penghuni Bumi Siliwangi."
  },
  {
    "id": 96,
    "question": "Jurusan 'Logistik Kelautan' terdapat di kampus daerah mana?",
    "options": ["Cibiru", "Tasikmalaya", "Serang", "Sumedang"],
    "correctAnswer": "Serang",
    "explanation": "Prodi Logistik Kelautan adalah unggulan Kampus Serang."
  },
  {
    "id": 97,
    "question": "Jurusan Administrasi Pendidikan (Adpend) berada di fakultas?",
    "options": ["FIP", "FPIPS", "FPEB", "FPTK"],
    "correctAnswer": "FIP",
    "explanation": "Administrasi Pendidikan berada di FIP."
  },
  {
    "id": 98,
    "question": "Apa nama program pertukaran mahasiswa dalam negeri yang diikuti UPI?",
    "options": ["PMM (Pertukaran Mahasiswa Merdeka)", "IISMA", "Erasmus", "Fullbright"],
    "correctAnswer": "PMM (Pertukaran Mahasiswa Merdeka)",
    "explanation": "PMM adalah program Kemendikbudristek untuk pertukaran antar kampus dalam negeri."
  },
  {
    "id": 99,
    "question": "Lulusan prodi Arsitektur (Non-Kependidikan) bergelar?",
    "options": ["S.T.", "S.Ars.", "S.Sn.", "S.Pd."],
    "correctAnswer": "S.Ars.",
    "explanation": "Gelar untuk sarjana arsitektur adalah S.Ars."
  },
  {
    "id": 100,
    "question": "Dimanakah lokasi 'Spot Foto' tulisan UPI besar berada?",
    "options": ["Depan Isola (Taman Partere)", "Gerbang Depan (Setiabudhi)", "Belakang Gymnasium", "Area Kantin"],
    "correctAnswer": "Gerbang Depan (Setiabudhi)",
    "explanation": "Tulisan UPI besar (Signage) berada di taman dekat gerbang utama Jl. Dr. Setiabudhi."
  }
]

// Function to get random 7 questions
function getRandomQuestions(count: number = 7): QuizQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default function QuizSection() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

  // Initialize quiz with random questions
  useEffect(() => {
    setQuizQuestions(getRandomQuestions(7))
  }, [])

  const handleAnswerClick = (option: string) => {
    if (answered) return

    setSelectedAnswer(option)
    setAnswered(true)

    if (option === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowScore(true)
    }
  }

  const restartQuiz = () => {
    setQuizQuestions(getRandomQuestions(7))
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  // Show loading state until questions are loaded
  if (quizQuestions.length === 0) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat pertanyaan...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        {!showScore && (
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">
              Mini Quiz <span className="text-red-600">UPI</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700">Uji pengetahuanmu tentang Universitas Pendidikan Indonesia!</p>
          </div>
        )}

        {/* Quiz Card */}
        <Card className="border-2 border-red-600 shadow-2xl overflow-hidden rounded-xl p-0">
          {!showScore ? (
            <>
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 m-0 rounded-none border-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white text-xl">
                    Pertanyaan {currentQuestion + 1}/{quizQuestions.length}
                  </CardTitle>
                  <div className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Skor: {score}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2 mt-4 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </CardHeader>

              <CardContent className="pt-8 space-y-8 animate-fade-in-up bg-white p-6">
                {/* Question */}
                <h3 className="text-xl sm:text-2xl font-bold text-black leading-relaxed">
                  {quizQuestions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => {
                    const isCorrect = option === quizQuestions[currentQuestion].correctAnswer
                    const isSelected = option === selectedAnswer
                    let buttonClass =
                      "w-full p-4 text-left border-2 rounded-lg font-medium transition-all text-lg hover:border-red-400"

                    if (answered) {
                      if (isCorrect) {
                        buttonClass += " border-green-500 bg-green-50 text-green-900"
                      } else if (isSelected && !isCorrect) {
                        buttonClass += " border-red-500 bg-red-50 text-red-900"
                      } else {
                        buttonClass += " border-gray-200 bg-gray-50 text-gray-500 opacity-50"
                      }
                    } else {
                      buttonClass += " border-gray-300 bg-white text-black hover:bg-red-50 cursor-pointer"
                    }

                    return (
                      <button key={index} onClick={() => handleAnswerClick(option)} className={buttonClass}>
                        {option}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation */}
                {answered && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded animate-slide-in-left">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Penjelasan:</p>
                    <p className="text-blue-800">{quizQuestions[currentQuestion].explanation}</p>
                  </div>
                )}

                {/* Next Button */}
                {answered && (
                  <Button
                    onClick={handleNext}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base py-6 rounded-lg"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "Lihat Hasil" : "Pertanyaan Berikutnya"}
                  </Button>
                )}
              </CardContent>
            </>
          ) : (
            // Results Screen
            <CardContent className="pt-12 pb-12 text-center space-y-8 animate-scale-in">
              <div className="flex justify-center mb-6">
                <Trophy className="w-20 h-20 text-yellow-500" />
              </div>

              <div>
                <div className="text-6xl sm:text-7xl font-black text-red-600 mb-4">
                  {Math.round((score / quizQuestions.length) * 100)}%
                </div>
                <h3 className="text-3xl font-black text-black">
                  Skor Akhir: {score} dari {quizQuestions.length}
                </h3>
              </div>

              {/* Performance Message */}
              <div className="space-y-3">
                {score === 7 && (
                  <>
                    <p className="text-2xl">🏆</p>
                    <p className="text-xl font-bold text-black">Luar Biasa! Perfect Score!</p>
                    <p className="text-gray-700">
                      Wow! Kamu menjawab semua pertanyaan dengan benar! Kamu benar-benar ahli tentang UPI dan sangat siap menjadi bagian dari keluarga besar UPI!
                    </p>
                  </>
                )}
                {score >= 5 && score < 7 && (
                  <>
                    <p className="text-2xl">🎉</p>
                    <p className="text-xl font-bold text-black">Sangat Bagus!</p>
                    <p className="text-gray-700">
                      Kamu mengenal UPI dengan sangat baik! Pengetahuanmu tentang kampus ini sangat mengesankan. Terus pertahankan dan pelajari lebih dalam!
                    </p>
                  </>
                )}
                {score >= 3 && score < 5 && (
                  <>
                    <p className="text-2xl">👍</p>
                    <p className="text-xl font-bold text-black">Cukup Baik!</p>
                    <p className="text-gray-700">
                      Kamu sudah cukup mengenal UPI. Masih ada ruang untuk belajar lebih banyak. Yuk, coba lagi untuk meningkatkan skormu!
                    </p>
                  </>
                )}
                {score < 3 && (
                  <>
                    <p className="text-2xl">📚</p>
                    <p className="text-xl font-bold text-black">Ayo Semangat!</p>
                    <p className="text-gray-700">
                      Jangan khawatir! Masih banyak yang bisa dipelajari tentang UPI. Coba lagi dan eksplorasi lebih banyak informasi tentang kampus kita!
                    </p>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={restartQuiz}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-base py-6 rounded-lg"
                >
                  Main Lagi
                </Button>
                <Button
                  onClick={() => {
                    const element = document.getElementById("faculties")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-bold text-base py-6 rounded-lg bg-transparent"
                >
                  Jelajahi Program
                </Button>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  )
}
