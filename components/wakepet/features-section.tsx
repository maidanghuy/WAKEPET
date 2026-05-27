"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Lightbulb, Volume2, Cog, Smartphone, Palette } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Nhắc nhở khi có dấu hiệu buồn ngủ",
    description: "Hệ thống AI theo dõi và phát hiện các dấu hiệu mệt mỏi, buồn ngủ của người lái xe.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Cảnh báo bằng ánh sáng",
    description: "Đèn LED RGB phát sáng với nhiều màu sắc, tạo tín hiệu nhắc nhở nhẹ nhàng, dễ nhận biết.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Volume2,
    title: "Cảnh báo bằng âm thanh nhẹ",
    description: "Phát ra những âm thanh dễ chịu, không gây giật mình, giúp người lái tỉnh táo hơn.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cog,
    title: "Chuyển động pet thân thiện",
    description: "Servo motor tạo chuyển động nhẹ nhàng cho thú cưng, thu hút sự chú ý một cách tự nhiên.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Thiết kế nhỏ gọn, dễ đặt trên xe",
    description: "Kích thước vừa lòng bàn tay, phù hợp để trên taplo ô tô hoặc gắn trên xe máy.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Palette,
    title: "Có thể tùy biến hình dáng thú cưng",
    description: "Nhiều phiên bản thú cưng khác nhau như Rái Cá, Mèo, Gấu để bạn lựa chọn.",
    color: "from-indigo-500 to-blue-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="tinh-nang" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            ✨ Tính năng nổi bật
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Mọi thứ bạn cần cho một <span className="text-primary">hành trình an toàn</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            WAKEPET kết hợp công nghệ AI với thiết kế thân thiện để mang đến trải nghiệm cảnh báo buồn ngủ tốt nhất.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
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
