"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "WAKEPET có thay thế việc nghỉ ngơi khi buồn ngủ không?",
    answer: "Không. WAKEPET chỉ là thiết bị hỗ trợ nhắc nhở. Người lái vẫn cần nghỉ ngơi khi mệt mỏi. WAKEPET giúp bạn nhận biết sớm hơn khi cần nghỉ, nhưng không thể thay thế giấc ngủ và sự nghỉ ngơi đầy đủ.",
  },
  {
    question: "WAKEPET dùng cho xe máy được không?",
    answer: "Có, sản phẩm được định hướng cho cả người lái xe máy và ô tô. Thiết kế nhỏ gọn, vừa lòng bàn tay, phù hợp để đặt trên taplo ô tô hoặc gắn trên xe máy với các phụ kiện đi kèm.",
  },
  {
    question: "Có thể chọn hình dáng thú cưng không?",
    answer: "Có, các mẫu như Otter (Rái Cá), Cat (Mèo), Bear (Gấu) có thể được phát triển theo phiên bản. Bạn có thể chọn mẫu yêu thích khi đặt trước. Chúng tôi cũng đang phát triển thêm nhiều mẫu mới dựa trên phản hồi của cộng đồng.",
  },
  {
    question: "Khi nào sản phẩm có thể giao?",
    answer: "Đây là bản pre-order, team WAKEPET sẽ liên hệ khi có lịch sản xuất và giao hàng cụ thể. Chúng tôi đang trong giai đoạn phát triển và hoàn thiện sản phẩm. Những người đặt trước sẽ được ưu tiên và nhận thông báo đầu tiên.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 rounded-full">
            ❓ Câu hỏi thường gặp
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Giải đáp <span className="text-primary">thắc mắc</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Một số câu hỏi phổ biến về WAKEPET và cách sử dụng.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-strong rounded-2xl overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </motion.div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
