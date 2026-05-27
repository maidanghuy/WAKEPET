"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Car, Shield, Heart } from "lucide-react"

const floatingBadges = [
  { label: "Cảnh báo nhẹ nhàng", icon: Heart, delay: 0 },
  { label: "Thiết kế thú cưng", icon: Sparkles, delay: 0.2 },
  { label: "Dành cho ô tô & xe máy", icon: Car, delay: 0.4 },
  { label: "An toàn hơn khi lái xe", icon: Shield, delay: 0.6 },
]

const PRODUCT_PRICE = "3.299.000đ"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm rounded-full">
              🐾 Smart Drowsiness Warning Device
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              <span className="text-foreground">WAKEPET – </span>
              <span className="text-primary">Người bạn đồng hành</span>
              <span className="text-foreground"> giúp bạn tỉnh táo trên mọi hành trình</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 text-pretty">
              Thiết bị cảnh báo buồn ngủ thông minh dành cho người lái xe máy và ô tô, với thiết kế thú cưng dễ thương và tín hiệu nhắc nhở thân thiện.
            </p>

            {/* Price Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm text-muted-foreground">Giá pre-order:</span>
                <span className="text-2xl font-bold text-primary">{PRODUCT_PRICE}</span>
                <span className="text-sm text-muted-foreground">/ sản phẩm</span>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-lg">
                <Link href="#pre-order">Pre-order ngay</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg border-2">
                <Link href="#gioi-thieu">Khám phá sản phẩm</Link>
              </Button>
            </div>

            {/* Floating badges on mobile */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {floatingBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + badge.delay }}
                >
                  <Badge variant="outline" className="px-3 py-1.5 bg-card/80 backdrop-blur-sm rounded-full flex items-center gap-2">
                    <badge.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{badge.label}</span>
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Product Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Product Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass-strong rounded-3xl p-8 shadow-2xl"
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-27%20at%2019.54.01-h9bNqk2AChNQGo6FPhIBW4binjnSNy.png"
                    alt="WAKEPET Otter - Thiết bị cảnh báo buồn ngủ hình rái cá"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Product info */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground">WAKEPET Otter</h3>
                  <p className="text-muted-foreground mt-2">Phiên bản Rái Cá dễ thương</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Badge className="bg-accent text-accent-foreground rounded-full">
                      Concept Design
                    </Badge>
                    <Badge variant="outline" className="rounded-full text-primary border-primary">
                      {PRODUCT_PRICE}
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 text-4xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-10 h-10 text-3xl"
              >
                🐾
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
