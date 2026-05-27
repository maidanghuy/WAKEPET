import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin", "vietnamese"],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: 'WAKEPET - Người bạn đồng hành giúp bạn tỉnh táo trên mọi hành trình',
  description: 'Thiết bị cảnh báo buồn ngủ thông minh dành cho người lái xe máy và ô tô, với thiết kế thú cưng dễ thương và tín hiệu nhắc nhở thân thiện.',
  keywords: ['WAKEPET', 'cảnh báo buồn ngủ', 'an toàn lái xe', 'thiết bị thông minh', 'drowsiness warning'],
  authors: [{ name: 'WAKEPET Team' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5ebe0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
