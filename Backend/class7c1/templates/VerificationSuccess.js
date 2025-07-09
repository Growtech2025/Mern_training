function verificationSuccess(username) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Account Confirmation</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: 'Roboto', sans-serif;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding: 40px 0;">
          <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <tr>
              <td align="center" style="background-color: #4f46e5; padding: 30px 20px;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px;">:tada: Welcome to [YourAppName]!</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px; color: #333;">
                <p style="font-size: 18px; margin-top: 0;">Hi [UserName],</p>
                <p style="font-size: 16px; line-height: 1.6;">
                  Your account has been successfully created! We’re excited to have you on board.
                </p>
                <p style="font-size: 16px;">
                  You can now log in and start exploring all the amazing features we offer.
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="[LoginURL]" style="padding: 12px 24px; background-color: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px;">
                    Go to Dashboard
                  </a>
                </div>
                <p style="font-size: 14px; color: #555;">
                  If you have any questions, just reply to this email—we’re always happy to help.
                </p>
                <p style="font-size: 14px; color: #555;">Cheers,<br/>The [YourAppName] Team</p>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f1f1f1; text-align: center; padding: 20px; font-size: 13px; color: #888;">
                © [Year] [YourAppName]. All rights reserved.<br />
                <a href="[UnsubscribeLink]" style="color: #888; text-decoration: underline;">Unsubscribe</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
module.exports = verificationSuccess;