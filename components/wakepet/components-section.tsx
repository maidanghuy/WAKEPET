"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Camera, CircuitBoard, Cog, Volume2, Lightbulb, HardDrive, Zap, Box, Package } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const components = [
  {
    id: "processor",
    icon: Cpu,
    label: "Bộ xử lý chính",
    component: "Raspberry Pi 4 Model B 2GB",
    description: "Trung tâm xử lý dữ liệu, điều phối các tính năng nhận diện và cảnh báo.",
    position: { top: "15%", left: "50%" },
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "camera",
    icon: Camera,
    label: "Camera",
    component: "ESP32-CAM Ai-Thinker",
    description: "Hỗ trợ ghi nhận hình ảnh/khuôn mặt để phục vụ tính năng phát hiện trạng thái buồn ngủ.",
    position: { top: "25%", left: "35%" },
    color: "from-green-500 to-green-600",
  },
  {
    id: "controller",
    icon: CircuitBoard,
    label: "Vi điều khiển phụ",
    component: "ESP32 DevKit",
    description: "Điều khiển các tín hiệu cảnh báo, kết nối và xử lý phụ trợ.",
    position: { top: "25%", left: "65%" },
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "motion",
    icon: Cog,
    label: "Cảnh báo chuyển động",
    component: "Servo SG90",
    description: "Tạo chuyển động nhẹ cho mô hình thú cưng để nhắc nhở người lái.",
    position: { top: "45%", left: "30%" },
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "sound",
    icon: Volume2,
    label: "Cảnh báo âm thanh",
    component: "Buzzer / loa cảnh báo",
    description: "Phát âm thanh nhắc nhở ngắn, dễ chịu, không gây khó chịu.",
    position: { top: "45%", left: "70%" },
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "light",
    icon: Lightbulb,
    label: "Cảnh báo ánh sáng",
    component: "LED RGB",
    description: "Hiển thị tín hiệu đèn màu để nhắc người lái giữ tỉnh táo.",
    position: { top: "80%", left: "50%" },
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "storage",
    icon: HardDrive,
    label: "Lưu trữ",
    component: "Thẻ nhớ microSD 32GB",
    description: "Lưu trữ dữ liệu cần thiết cho hệ thống.",
    position: { top: "55%", left: "45%" },
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "power",
    icon: Zap,
    label: "Nguồn",
    component: "Mạch giảm áp 5V 3A",
    description: "Cấp nguồn ổn định cho toàn bộ thiết bị.",
    position: { top: "55%", left: "55%" },
    color: "from-red-500 to-red-600",
  },
  {
    id: "shell",
    icon: Box,
    label: "Vỏ pet",
    component: "In 3D / vỏ nhựa tùy chỉnh",
    description: "Vỏ ngoài hình thú cưng dễ thương, nhỏ gọn, phù hợp đặt trên xe.",
    position: { top: "65%", left: "35%" },
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "accessories",
    icon: Package,
    label: "Phụ kiện khác",
    component: "Dây nối, ốc, board phụ, keo, đóng gói",
    description: "Các phụ kiện hỗ trợ lắp ráp và hoàn thiện sản phẩm.",
    position: { top: "65%", left: "65%" },
    color: "from-teal-500 to-teal-600",
  },
]

export function ComponentsSection() {
  const [activeComponent, setActiveComponent] = useState(components[0])
  const [desktopApi, setDesktopApi] = useState<CarouselApi>()
  const [mobileApi, setMobileApi] = useState<CarouselApi>()

  // Handle component selection and scroll to center
  const handleSelectComponent = useCallback((comp: typeof components[0], index: number, api: CarouselApi | undefined) => {
    setActiveComponent(comp)
    if (api) {
      api.scrollTo(index)
    }
  }, [])

  // Handle hotspot click - scroll both carousels
  const handleHotspotClick = useCallback((comp: typeof components[0]) => {
    const index = components.findIndex(c => c.id === comp.id)
    setActiveComponent(comp)
    if (desktopApi) {
      desktopApi.scrollTo(index)
    }
    if (mobileApi) {
      mobileApi.scrollTo(index)
    }
  }, [desktopApi, mobileApi])

  return (
    <section id="linh-kien" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            ⚙️ Cấu tạo chi tiết
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Khám phá bên trong <span className="text-primary">WAKEPET</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Tìm hiểu các linh kiện và công nghệ được sử dụng để tạo nên thiết bị cảnh báo buồn ngủ thông minh.
          </p>
        </motion.div>

        {/* Desktop & Tablet Layout */}
        <div className="hidden md:block">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Interactive Product Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-muted to-card">
                <CardContent className="p-8">
                  {/* Product mockup with hotspots */}
                  <div className="relative aspect-[4/3] max-w-lg mx-auto">
                    {/* Simplified product shape */}
                    <div className="absolute inset-12 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-xl flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative">
                        <span className="text-6xl">🦦</span>
                        {/* LED Ring */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 blur-sm animate-pulse" />
                      </div>
                    </div>

                    {/* Hotspot dots */}
                    {components.map((comp) => (
                      <motion.button
                        key={comp.id}
                        onClick={() => handleHotspotClick(comp)}
                        className={`absolute w-5 h-5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
                          activeComponent.id === comp.id
                            ? "bg-primary scale-150 shadow-lg"
                            : "bg-white/80 hover:bg-primary hover:scale-125 shadow-md"
                        }`}
                        style={{ top: comp.position.top, left: comp.position.left }}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className={`absolute inset-0 rounded-full animate-ping ${
                          activeComponent.id === comp.id ? "bg-primary/50" : "bg-transparent"
                        }`} />
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Component Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeComponent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-2xl">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeComponent.color} flex items-center justify-center mb-4`}>
                        <activeComponent.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{activeComponent.label}</CardTitle>
                      <Badge variant="outline" className="w-fit rounded-full text-xs">
                        {activeComponent.component}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {activeComponent.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Component Carousel - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Carousel
              setApi={setDesktopApi}
              opts={{
                align: "center",
                loop: true,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
              className="w-full cursor-grab active:cursor-grabbing select-none"
            >
              <CarouselContent className="-ml-4">
                {components.map((comp, index) => (
                  <CarouselItem key={comp.id} className="pl-4 basis-1/2 lg:basis-1/4">
                    <motion.button
                      onClick={() => handleSelectComponent(comp, index, desktopApi)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        activeComponent.id === comp.id
                          ? "bg-primary text-primary-foreground shadow-xl scale-105"
                          : "bg-card hover:bg-muted shadow-md hover:shadow-lg border border-border/50"
                      }`}
                      whileTap={{ scale: 0.98 }}
                      animate={{
                        scale: activeComponent.id === comp.id ? 1.05 : 1,
                        boxShadow: activeComponent.id === comp.id 
                          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          activeComponent.id === comp.id
                            ? "bg-primary-foreground/20"
                            : "bg-gradient-to-br " + comp.color + " text-white"
                        }`}>
                          <comp.icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm truncate">{comp.label}</p>
                          <p className={`text-xs truncate transition-colors duration-300 ${activeComponent.id === comp.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {comp.component}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0 rounded-full" />
                <CarouselNext className="static translate-y-0 rounded-full" />
              </div>
            </Carousel>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Vuốt hoặc kéo để xem thêm linh kiện
            </p>
          </motion.div>
        </div>

        {/* Mobile Layout - Carousel with Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          {/* Mobile Interactive Display */}
          <Card className="border-0 shadow-xl overflow-hidden bg-gradient-to-br from-muted to-card mb-6">
            <CardContent className="p-6">
              <div className="relative aspect-square max-w-xs mx-auto">
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-xl flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative">
                    <span className="text-5xl">🦦</span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 rounded-full bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 blur-sm animate-pulse" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Carousel - Swipeable */}
          <Carousel
            setApi={setMobileApi}
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
              containScroll: "trimSnaps",
            }}
            className="w-full cursor-grab active:cursor-grabbing select-none"
          >
            <CarouselContent className="-ml-4">
              {components.map((comp, index) => (
                <CarouselItem key={comp.id} className="pl-4 basis-[85%]">
                  <motion.div
                    onClick={() => handleSelectComponent(comp, index, mobileApi)}
                    className="touch-pan-y"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                      activeComponent.id === comp.id 
                        ? "bg-primary text-primary-foreground shadow-xl scale-[1.02]" 
                        : "shadow-lg"
                    }`}>
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                            activeComponent.id === comp.id
                              ? "bg-primary-foreground/20"
                              : "bg-gradient-to-br " + comp.color + " text-white"
                          }`}>
                            <comp.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-base">{comp.label}</p>
                            <Badge 
                              variant={activeComponent.id === comp.id ? "secondary" : "outline"} 
                              className={`rounded-full text-xs mt-1 ${
                                activeComponent.id === comp.id ? "bg-primary-foreground/20 text-primary-foreground border-transparent" : ""
                              }`}
                            >
                              {comp.component}
                            </Badge>
                            <p className={`text-sm mt-2 leading-relaxed transition-colors duration-300 ${
                              activeComponent.id === comp.id ? "text-primary-foreground/80" : "text-muted-foreground"
                            }`}>
                              {comp.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Smaller arrows on mobile - secondary navigation */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 rounded-full h-8 w-8 opacity-60" />
              <CarouselNext className="static translate-y-0 rounded-full h-8 w-8 opacity-60" />
            </div>
          </Carousel>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Vuốt sang trái/phải để xem thêm
          </p>
        </motion.div>
      </div>
    </section>
  )
}
