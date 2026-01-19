"use client"

import { useState } from "react"
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

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Universitas Pendidikan Indonesia berdiri pada tahun berapa?",
    options: ["1945", "1954", "1960", "1975"],
    correctAnswer: "1954",
    explanation: "UPI didirikan pada tahun 1954 sebagai institusi pendidikan terkemuka di Indonesia.",
  },
  {
    id: 2,
    question: "Slogan UPI adalah?",
    options: ["Educating The Nation", "Pelopor dan Unggul", "Excellence in Education", "Towards Global University"],
    correctAnswer: "Pelopor dan Unggul",
    explanation:
      "Slogan UPI 'Pelopor dan Unggul' mencerminkan komitmen untuk menjadi pionir dalam pendidikan berkualitas.",
  },
  {
    id: 3,
    question: "Kota di mana UPI Bandung berdiri?",
    options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    correctAnswer: "Bandung",
    explanation: "UPI berlokasi di Bandung, Jawa Barat, dengan kampus utama di Bumi Siliwangi.",
  },
  {
    id: 4,
    question: "Berapa jumlah kampus daerah yang dimiliki UPI?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    explanation: "UPI memiliki 5 kampus daerah di Sumedang, Tasikmalaya, Purwakarta, Cibiru, dan Serang.",
  },
  {
    id: 5,
    question: "Program studi mana yang termasuk kategori Kependidikan?",
    options: ["Kedokteran", "Pendidikan Matematika", "Manajemen", "Akuntansi"],
    correctAnswer: "Pendidikan Matematika",
    explanation: "Pendidikan Matematika adalah program kependidikan yang ditawarkan UPI.",
  },
  {
    id: 6,
    question: "Akreditasi apa yang dimiliki UPI?",
    options: ["Baik", "Sangat Baik", "Terakreditasi Unggul", "Perlu Perbaikan"],
    correctAnswer: "Terakreditasi Unggul",
    explanation: "UPI memiliki akreditasi Unggul dari BAN-PT, menunjukkan standar kualitas tertinggi.",
  },
]

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

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
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setAnswered(false)
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
        <Card className="border-2 border-red-600 shadow-2xl">
          {!showScore ? (
            <>
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">
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

              <CardContent className="pt-8 space-y-8 animate-fade-in-up">
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
                {score / quizQuestions.length >= 0.8 && (
                  <>
                    <p className="text-2xl">🎉</p>
                    <p className="text-xl font-bold text-black">Sempurna!</p>
                    <p className="text-gray-700">
                      Kamu mengenal UPI dengan sangat baik dan siap menjadi bagian dari keluarga besar UPI!
                    </p>
                  </>
                )}
                {score / quizQuestions.length >= 0.6 && score / quizQuestions.length < 0.8 && (
                  <>
                    <p className="text-2xl">👏</p>
                    <p className="text-xl font-bold text-black">Bagus Sekali!</p>
                    <p className="text-gray-700">
                      Kamu sudah mengenal UPI dengan cukup baik. Selamat bergabung dengan kami!
                    </p>
                  </>
                )}
                {score / quizQuestions.length < 0.6 && (
                  <>
                    <p className="text-2xl">📚</p>
                    <p className="text-xl font-bold text-black">Jangan Menyerah!</p>
                    <p className="text-gray-700">
                      Pelajari lebih lanjut tentang UPI dan coba lagi. Kami percaya Anda bisa!
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
