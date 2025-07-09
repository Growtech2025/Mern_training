function ResetPassword(username, otp, email) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Reset Your Password</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Roboto', sans-serif;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
          <tr>
            <td align="center" style="background-color: #1d4ed8; padding: 30px;">
              <h1 style="color: #ffffff; font-size: 26px; margin: 0;">🔐 Reset Your Password</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 40px; color: #111827;">
              <p style="font-size: 18px; margin-top: 0;">Hi [UserName],</p>
              <p style="font-size: 16px; line-height: 1.6;">
                We received a request to reset your password for your <strong>[YourAppName]</strong> account. Click the button below to reset it:
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="[ResetLink]" style="display: inline-block; padding: 14px 30px; background-color: #1d4ed8; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px;">
                  Reset Password
                </a>
              </div>
              <p style="font-size: 14px; color: #555;">
                This link will expire in 30 minutes. If you didn’t request a password reset, you can safely ignore this email.
              </p>
              <p style="font-size: 14px; color: #555;">Thanks,<br/>The [YourAppName] Team</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f1f5f9; text-align: center; padding: 20px; font-size: 13px; color: #64748b;">
              © [Year] [YourAppName]. All rights reserved.<br />
              <a href="[HelpURL]" style="color: #64748b; text-decoration: underline;">Need Help?</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
module.exports = ResetPassword