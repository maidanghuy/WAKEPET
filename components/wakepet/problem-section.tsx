"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, AlertTriangle, Heart } from "lucide-react"

const problems = [
  {
    icon: Brain,
    title: "Dễ mất tập trung",
    description: "Trong những chuyến đi dài, ban đêm hoặc sau ngày làm việc mệt mỏi, người lái dễ mất tập trung và giảm phản xạ.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: AlertTriangle,
    title: "Nguy cơ ngủ gật",
    description: "Buồn ngủ khi lái xe là một trong những nguyên nhân hàng đầu gây tai nạn giao thông nghiêm trọng.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Heart,
    title: "Cần cảnh báo thân thiện",
    description: "Những tiếng còi báo động lớn có thể gây giật mình, nguy hiểm. Cần một cách nhắc nhở nhẹ nhàng và thân thiện hơn.",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

export function ProblemSection() {
  return (
    <section id="gioi-thieu" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Buồn ngủ khi lái xe là <span className="text-primary">nguy hiểm</span>, nhưng cảnh báo không nên gây <span className="text-accent">khó chịu</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            WAKEPET giải quyết vấn đề này bằng cách nhắc nhở người lái một cách nhẹ nhàng và thân thiện, thay vì sử dụng những tiếng báo động chói tai.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6"
                    >
                      <problem.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
