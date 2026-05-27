"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle, ShoppingCart } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

const UNIT_PRICE = 3299000
const UNIT_PRICE_FORMATTED = "3.299.000đ"

function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ"
}

interface FormData {
  fullName: string
  email: string
  phone: string
  vehicleType: string
  preferredModel: string
  quantity: string
  notes: string
  agreedToContact: boolean
}

export function PreorderSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "",
    preferredModel: "",
    quantity: "1",
    notes: "",
    agreedToContact: false,
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const quantity = useMemo(() => {
    const q = formData.quantity
    if (q === "5+") return 5
    return parseInt(q) || 1
  }, [formData.quantity])

  const totalPrice = useMemo(() => {
    return quantity * UNIT_PRICE
  }, [quantity])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreedToContact) {
      setStatus("error")
      setErrorMessage("Vui lòng đồng ý để WAKEPET liên hệ với bạn.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/preorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          unitPrice: UNIT_PRICE,
          unitPriceFormatted: UNIT_PRICE_FORMATTED,
          totalPrice,
          totalPriceFormatted: formatPrice(totalPrice),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Có lỗi xảy ra, vui lòng thử lại.")
      }

      setStatus("success")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        vehicleType: "",
        preferredModel: "",
        quantity: "1",
        notes: "",
        agreedToContact: false,
      })
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Có lỗi xảy ra, vui lòng thử lại.")
    }
  }

  return (
    <section id="pre-order" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            🎉 Đặt trước ngay
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Pre-order <span className="text-primary">WAKEPET</span> ngay hôm nay
          </h2>
          {/* Price Display */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3 shadow-md mb-4">
            <span className="text-sm text-muted-foreground">Giá pre-order:</span>
            <span className="text-2xl font-bold text-primary">{UNIT_PRICE_FORMATTED}</span>
            <span className="text-sm text-muted-foreground">/ sản phẩm</span>
          </div>
          <p className="text-lg text-muted-foreground text-pretty">
            Để lại thông tin, team WAKEPET sẽ liên hệ với bạn khi sản phẩm sẵn sàng.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Form Card */}
            <Card className="border-0 shadow-2xl lg:col-span-2">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">Thông tin Pre-order</CardTitle>
                <CardDescription>
                  Điền thông tin bên dưới để đăng ký nhận thông báo khi sản phẩm sẵn sàng
                </CardDescription>
              </CardHeader>
              <CardContent>
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Cảm ơn bạn!</h3>
                    <p className="text-muted-foreground">
                      Team WAKEPET đã nhận được thông tin pre-order của bạn.
                      <br />
                      Chúng tôi sẽ liên hệ sớm nhất có thể!
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={() => setStatus("idle")}
                    >
                      Đăng ký thêm
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Họ và tên *</Label>
                        <Input
                          id="fullName"
                          placeholder="Nguyễn Văn A"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0912 345 678"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Số lượng muốn đặt</Label>
                        <Select
                          value={formData.quantity}
                          onValueChange={(value) => setFormData({ ...formData, quantity: value })}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Chọn số lượng" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5+">5+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicleType">Bạn muốn dùng WAKEPET cho *</Label>
                        <Select
                          value={formData.vehicleType}
                          onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                          required
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Chọn loại xe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Ô tô</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredModel">Mẫu yêu thích</Label>
                        <Select
                          value={formData.preferredModel}
                          onValueChange={(value) => setFormData({ ...formData, preferredModel: value })}
                        >
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Chọn mẫu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="otter">🦦 Otter (Rái Cá)</SelectItem>
                            <SelectItem value="cat">🐱 Cat (Mèo)</SelectItem>
                            <SelectItem value="bear">🐻 Bear (Gấu)</SelectItem>
                            <SelectItem value="undecided">Chưa chắc</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Ghi chú thêm</Label>
                      <Textarea
                        id="notes"
                        placeholder="Bạn có câu hỏi hay yêu cầu đặc biệt nào không?"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="rounded-xl min-h-20"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreedToContact"
                        checked={formData.agreedToContact}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, agreedToContact: checked === true })
                        }
                        className="mt-1"
                      />
                      <Label htmlFor="agreedToContact" className="text-sm leading-relaxed cursor-pointer">
                        Tôi đồng ý để WAKEPET liên hệ về thông tin đặt trước sản phẩm.
                      </Label>
                    </div>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-xl"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">{errorMessage}</p>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full bg-primary hover:bg-primary/90"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Đang gửi...
                        </>
                      ) : (
                        "Gửi thông tin pre-order"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Order Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 sticky top-24">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Tóm tắt đơn hàng</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-card rounded-xl shadow-sm">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                      <span className="text-2xl">🦦</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">WAKEPET</p>
                      <p className="text-xs text-muted-foreground">Thiết bị cảnh báo buồn ngủ</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Đơn giá:</span>
                      <span className="font-medium">{UNIT_PRICE_FORMATTED}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Số lượng:</span>
                      <span className="font-medium">{formData.quantity}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Tạm tính:</span>
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                      {formData.quantity === "5+" && (
                        <p className="text-xs text-muted-foreground mt-1">
                          * Giá dựa trên 5 sản phẩm. Số lượng chính xác sẽ được xác nhận qua liên hệ.
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 space-y-2 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Miễn phí vận chuyển nội thành
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Bảo hành 12 tháng
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Hỗ trợ kỹ thuật trọn đời
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
