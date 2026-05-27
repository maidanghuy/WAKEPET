"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bike, Car, Moon, Briefcase, Heart } from "lucide-react"

const useCases = [
  {
    icon: Bike,
    title: "Người lái xe máy đường dài",
    description: "Những chuyến đi xa, đặc biệt trên đường cao tốc hoặc quốc lộ, cần sự tỉnh táo liên tục.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Car,
    title: "Tài xế ô tô cá nhân",
    description: "Lái xe đi làm, đưa đón gia đình, hay những chuyến roadtrip dài ngày.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Moon,
    title: "Người thường lái xe ban đêm",
    description: "Ca đêm, làm việc khuya, hay những ai phải di chuyển trong đêm khuya.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Briefcase,
    title: "Sinh viên, nhân viên văn phòng",
    description: "Những người hay di chuyển sau giờ học/làm việc căng thẳng, cần thêm sự hỗ trợ tỉnh táo.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Heart,
    title: "Người muốn thiết bị an toàn nhưng dễ thương",
    description: "Ai yêu thích sự đáng yêu và muốn một người bạn đồng hành vui vẻ trên xe.",
    color: "from-pink-500 to-rose-500",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            🚗 Đối tượng phù hợp
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Phù hợp cho <span className="text-primary">nhiều hành trình</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            WAKEPET được thiết kế cho mọi người lái xe, từ xe máy đến ô tô, trong mọi hoàn cảnh.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === useCases.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <useCase.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
