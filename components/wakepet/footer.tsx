"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail } from "lucide-react"

const footerLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#tinh-nang", label: "Tính năng" },
  { href: "#pre-order", label: "Pre-order" },
]

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link href="/" className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-2xl font-bold text-background">
                WAKE<span className="text-primary">PET</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm italic">
              Stay awake. Drive safe. Travel with your smart pet.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-background/70"
          >
            <Mail className="w-4 h-4" />
            <a href="mailto:abcxyz@gmail.com" className="text-sm hover:text-primary transition-colors">
              abcxyz@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-background/50 text-sm"
          >
            © {new Date().getFullYear()} WAKEPET. Thiết kế với ❤️ tại Việt Nam.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
