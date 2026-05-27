import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const RECEIVER_EMAIL = process.env.PREORDER_RECEIVER_EMAIL ? null

interface PreorderData {
  fullName: string
  email: string
  phone: string
  vehicleType: string
  preferredModel: string
  quantity: string
  notes: string
  agreedToContact: boolean
  unitPrice: number
  unitPriceFormatted: string
  totalPrice: number
  totalPriceFormatted: string
}

function getVehicleTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    car: "Ô tô",
  }
  return labels[type] || type
}

function getModelLabel(model: string): string {
  const labels: Record<string, string> = {
    otter: "🦦 Otter (Rái Cá)",
    cat: "🐱 Cat (Mèo)",
    bear: "🐻 Bear (Gấu)",
    undecided: "Chưa chắc",
  }
  return labels[model] || model
}

function generateEmailHtml(data: PreorderData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New WAKEPET Pre-order</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5ebe0;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background-color: white; border-radius: 20px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: linear-gradient(135deg, #c87941, #daa520); border-radius: 50%; padding: 15px; margin-bottom: 15px;">
              <span style="font-size: 32px;">🐾</span>
            </div>
            <h1 style="color: #333; margin: 0; font-size: 28px;">
              WAKE<span style="color: #c87941;">PET</span>
            </h1>
            <p style="color: #666; margin-top: 5px;">New Pre-order Received!</p>
          </div>

          <!-- Content -->
          <div style="background-color: #faf8f5; border-radius: 15px; padding: 25px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #c87941; padding-bottom: 10px;">
              📋 Thông tin khách hàng
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 140px;">Họ và tên:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 600;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Email:</td>
                <td style="padding: 10px 0; color: #333;">
                  <a href="mailto:${data.email}" style="color: #c87941; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Số điện thoại:</td>
                <td style="padding: 10px 0; color: #333;">
                  <a href="tel:${data.phone}" style="color: #c87941; text-decoration: none;">${data.phone}</a>
                </td>
              </tr>
            </table>
          </div>

          <div style="background-color: #faf8f5; border-radius: 15px; padding: 25px; margin-bottom: 20px;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px; border-bottom: 2px solid #c87941; padding-bottom: 10px;">
              🛒 Chi tiết đơn hàng
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #666; width: 140px;">Dùng cho:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 600;">${getVehicleTypeLabel(data.vehicleType)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Mẫu yêu thích:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 600;">${getModelLabel(data.preferredModel) || "Chưa chọn"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Số lượng:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 600;">${data.quantity}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666;">Đơn giá:</td>
                <td style="padding: 10px 0; color: #333; font-weight: 600;">${data.unitPriceFormatted}</td>
              </tr>
              <tr style="background-color: #fff3cd; border-radius: 8px;">
                <td style="padding: 15px 10px; color: #333; font-weight: 600;">Tạm tính:</td>
                <td style="padding: 15px 10px; color: #c87941; font-weight: 700; font-size: 20px;">${data.totalPriceFormatted}</td>
              </tr>
            </table>
          </div>

          ${data.notes ? `
          <div style="background-color: #fff3cd; border-radius: 15px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #c87941;">
            <h3 style="color: #333; margin-top: 0; font-size: 16px;">💬 Ghi chú thêm:</h3>
            <p style="color: #666; margin-bottom: 0; line-height: 1.6;">${data.notes}</p>
          </div>
          ` : ""}

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Email này được gửi tự động từ hệ thống WAKEPET
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 5px;">
              Stay awake. Drive safe. Travel with your smart pet. 🐾
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: Request) {
  try {
    const data: PreorderData = await request.json()

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.vehicleType) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin bắt buộc." },
        { status: 400 }
      )
    }

    if (!data.agreedToContact) {
      return NextResponse.json(
        { error: "Vui lòng đồng ý để WAKEPET liên hệ với bạn." },
        { status: 400 }
      )
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("[v0] WAKEPET Pre-order submitted:", data)
    }

    // Send email if Resend is configured
    if (resend) {
      try {
        await resend.emails.send({
          from: "WAKEPET Pre-order <onboarding@resend.dev>",
          to: [RECEIVER_EMAIL],
          subject: `New WAKEPET Pre-order từ ${data.fullName} - ${data.totalPriceFormatted}`,
          html: generateEmailHtml(data),
        })
      } catch (emailError) {
        console.error("[v0] Error sending email:", emailError)
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.log("[v0] Resend not configured. Pre-order data:", data)
    }

    return NextResponse.json({
      success: true,
      message: "Pre-order received successfully!",
    })
  } catch (error) {
    console.error("[v0] Error processing pre-order:", error)
    return NextResponse.json(
      { error: "Có lỗi xảy ra, vui lòng thử lại." },
      { status: 500 }
    )
  }
}
