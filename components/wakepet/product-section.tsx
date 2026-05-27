"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Camera, Cpu, Zap, Volume2, Lightbulb, Cog } from "lucide-react"

const productViews = [
  {
    id: "front",
    label: "Front View",
    description: "Mặt trước",
    imageSrc: "/images/wakepet/front.png",
    imageAlt: "WAKEPET mặt trước",
  },
  {
    id: "angle",
    label: "45° View",
    description: "Góc 45°",
    imageSrc: "/images/wakepet/angle.png",
    imageAlt: "WAKEPET góc 45 độ",
  },
  {
    id: "side",
    label: "Side View",
    description: "Mặt bên",
    imageSrc: "/images/wakepet/side.png",
    imageAlt: "WAKEPET mặt bên",
  },
  {
    id: "back",
    label: "Back View",
    description: "Mặt sau",
    imageSrc: "/images/wakepet/back.png",
    imageAlt: "WAKEPET mặt sau",
  },
  {
    id: "bottom",
    label: "Bottom View",
    description: "Mặt đáy",
    imageSrc: "/images/wakepet/bottom.png",
    imageAlt: "WAKEPET mặt đáy",
  },
]

const features = [
  { icon: Camera, label: "Camera AI nhận diện" },
  { icon: Cpu, label: "Bộ xử lý thông minh" },
  { icon: Zap, label: "Cảnh báo chuyển động" },
  { icon: Volume2, label: "Âm thanh nhẹ nhàng" },
  { icon: Lightbulb, label: "Đèn LED RGB" },
  { icon: Cog, label: "Thiết kế tùy chỉnh" },
]

export function ProductSection() {
  const [activeView, setActiveView] = useState("front")

  const selectedView =
    productViews.find((view) => view.id === activeView) ?? productViews[0]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            🐾 Giới thiệu sản phẩm
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            WAKEPET hoạt động như một <span className="text-primary">thú cưng thông minh</span> trên xe của bạn
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Với camera và cảm biến AI, WAKEPET theo dõi trạng thái của bạn và nhắc nhở bằng những tín hiệu chuyển động, âm thanh và ánh sáng dễ thương, không gây khó chịu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* View Tabs */}
                <div className="flex overflow-x-auto border-b bg-muted/30">
                  {productViews.map((view) => (
                    <button
                      key={view.id}
                      onClick={() => setActiveView(view.id)}
                      className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-all border-b-2 ${
                        activeView === view.id
                          ? "border-primary text-primary bg-background"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {view.description}
                    </button>
                  ))}
                </div>

                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeView}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedView.imageSrc}
                        alt={selectedView.imageAlt}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay with view label */}
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-sm rounded-full px-4 py-1">
                          {productViews.find(v => v.id === activeView)?.label}
                        </Badge>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Thiết kế thông minh, đáng yêu</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                WAKEPET được thiết kế với vỏ ngoài hình thú cưng dễ thương, nhỏ gọn vừa lòng bàn tay, phù hợp để đặt trên taplo ô tô hoặc gắn trên xe máy. Với đèn LED RGB ở đáy tạo hiệu ứng ánh sáng đẹp mắt.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{feature.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                <a href="#linh-kien">Khám phá bên trong</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
