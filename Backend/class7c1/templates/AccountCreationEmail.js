function AccountCreationEmail(user){
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Verify Your Account</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Roboto', sans-serif;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); overflow: hidden;">
          <tr>
            <td align="center" style="background-color: #10b981; padding: 30px;">
              <h1 style="color: #ffffff; font-size: 26px; margin: 0;">✔ Verify Your Account</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px 40px; color: #111827;">
              <p style="font-size: 18px; margin-top: 0;">Hello [UserName],</p>
              <p style="font-size: 16px; line-height: 1.6;">
                Thank you for signing up with <strong>[YourAppName]</strong>! To activate your account and start using our services, please verify your email address by clicking the button below:
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="[VerifyLink]" style="display: inline-block; padding: 14px 30px; background-color: #10b981; color: #ffffff; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 6px;">
                  Verify Account
                </a>
              </div>
              <p style="font-size: 14px; color: #555;">
                If the button above doesn’t work, you can copy and paste the following URL into your browser:
              </p>
              <p style="word-break: break-all; color: #1e40af; font-size: 14px;">
                [VerifyLink]
              </p>
              <p style="font-size: 14px; color: #555;">
                If you did not sign up for this account, please ignore this email.
              </p>
              <p style="font-size: 14px; color: #555;">Cheers,<br/>The [YourAppName] Team</p>
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
module.exports=AccountCreationEmail;