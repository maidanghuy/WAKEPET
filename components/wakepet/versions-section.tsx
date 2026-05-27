"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const PRODUCT_PRICE = "3.299.000đ"

const versions = [
  {
    name: "WAKEPET Otter",
    description: "Phiên bản Rái Cá đáng yêu với tông màu nâu ấm áp, thân thiện.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-27%20at%2019.54.01-h9bNqk2AChNQGo6FPhIBW4binjnSNy.png",
    colors: ["#B87333", "#F5DEB3", "#8B4513"],
    colorNames: ["Nâu đồng", "Kem", "Nâu sẫm"],
    accent: "from-amber-500 to-orange-500",
    emoji: "🦦",
  },
  {
    name: "WAKEPET Doraemon",
    description: "Phiên bản Mèo tinh nghịch với tông màu xanh dương pastel tươi sáng.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-27%20at%2019.54.09-X5FMRT41M7OqUHnlFS1Y6a8IHnGunT.png",
    colors: ["#4A90D9", "#FFFFFF", "#E74C3C"],
    colorNames: ["Xanh dương", "Trắng", "Đỏ"],
    accent: "from-blue-500 to-cyan-500",
    emoji: "🐱",
  },
  {
    name: "WAKEPET Bear",
    description: "Phiên bản Gấu ôm ấp với tông màu be và hồng pastel dịu nhẹ.",
    image: null, // Placeholder for future design
    colors: ["#DEB887", "#FFB6C1", "#8B7355"],
    colorNames: ["Be", "Hồng", "Nâu"],
    accent: "from-pink-500 to-rose-500",
    emoji: "🐻",
  },
]

export function VersionsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            🐾 Nhiều phiên bản
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Chọn <span className="text-primary">người bạn đồng hành</span> của bạn
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            WAKEPET có nhiều phiên bản thú cưng khác nhau để bạn lựa chọn theo sở thích.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {versions.map((version, index) => (
            <motion.div
              key={version.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                    {version.image ? (
                      <Image
                        src={version.image}
                        alt={version.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
                        <div className="text-center">
                          <span className="text-6xl">{version.emoji}</span>
                          <p className="mt-4 text-sm text-muted-foreground">Coming Soon</p>
                        </div>
                      </div>
                    )}
                    {/* Concept badge */}
                    <Badge className={`absolute top-4 right-4 bg-gradient-to-r ${version.accent} text-white border-0 rounded-full`}>
                      Concept Design
                    </Badge>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{version.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {version.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4 p-3 bg-primary/5 rounded-xl border border-primary/10">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Giá pre-order:</span>
                        <span className="text-lg font-bold text-primary">{PRODUCT_PRICE}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">/ sản phẩm</p>
                    </div>

                    {/* Color palette */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">Màu sắc:</span>
                      <div className="flex gap-2">
                        {version.colors.map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: color }}
                            title={version.colorNames[colorIndex]}
                          />
                        ))}
                      </div>
                    </div>
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
