"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Eye, Brain, Bell, Coffee } from "lucide-react"

const steps = [
  {
    icon: Eye,
    step: 1,
    title: "Theo dõi trạng thái người lái",
    description: "Camera AI liên tục theo dõi khuôn mặt và các biểu hiện của người lái xe.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    step: 2,
    title: "Phân tích dấu hiệu mất tập trung hoặc buồn ngủ",
    description: "Hệ thống AI xử lý và nhận diện các dấu hiệu mệt mỏi, buồn ngủ, mất tập trung.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Bell,
    step: 3,
    title: "Kích hoạt cảnh báo thân thiện",
    description: "WAKEPET phản hồi bằng chuyển động, ánh sáng hoặc âm thanh nhẹ nhàng, không gây giật mình.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Coffee,
    step: 4,
    title: "Giúp người lái lấy lại sự tỉnh táo",
    description: "Tín hiệu nhắc nhở giúp người lái tập trung trở lại hoặc biết cần nghỉ ngơi.",
    color: "from-green-500 to-emerald-500",
  },
]

export function HowItWorksSection() {
  return (
    <section id="cach-hoat-dong" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            🔄 Quy trình hoạt động
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            WAKEPET hoạt động <span className="text-primary">như thế nào?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Quy trình đơn giản, hiệu quả, giúp bạn luôn tỉnh táo trên mọi hành trình.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="glass-strong rounded-2xl p-6 shadow-lg inline-block">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 rounded-full">
                          Bước {step.step}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}
                  >
                    <span className="text-white font-bold">{step.step}</span>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
