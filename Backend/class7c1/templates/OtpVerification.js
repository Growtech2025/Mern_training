function OtpVerification(otp) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Resend OTP</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: 'Roboto', sans-serif;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding: 40px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <tr>
              <td align="center" style="background-color: #0f172a; padding: 30px 20px;">
                <h2 style="color: #ffffff; margin: 0; font-size: 26px;">🔐 Your OTP Code</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px; color: #333;">
                <p style="font-size: 18px; margin-top: 0;">Hi [UserName],</p>
                <p style="font-size: 16px; line-height: 1.6;">
                  As requested, here’s your One-Time Password (OTP) to proceed with your verification.
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <span style="display: inline-block; background-color: #f4f4f5; padding: 15px 30px; font-size: 24px; font-weight: bold; letter-spacing: 4px; border-radius: 8px; color: #1e293b;">
                    [OTP_CODE]
                  </span>
                </div>
                <p style="font-size: 14px; color: #555;">
                  This OTP is valid for the next 10 minutes. Please do not share this code with anyone.
                </p>
                <p style="font-size: 14px; color: #555;">
                  If you didn’t request this OTP, you can safely ignore this email.
                </p>
                <p style="font-size: 14px; color: #555;">Regards,<br/>The [YourAppName] Team</p>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f1f1f1; text-align: center; padding: 20px; font-size: 13px; color: #888;">
                © [Year] [YourAppName]. All rights reserved.<br />
                <a href="[HelpLink]" style="color: #888; text-decoration: underline;">Need Help?</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
module.exports = OtpVerification