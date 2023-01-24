/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
import SibApiV3Sdk from 'sib-api-v3-sdk';
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.NEXT_SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

export default function handler(req, res) {
  if (req.method === `POST`) {
    const { email, subject, message } = JSON.parse(req.body);

    // const ourmsg = {
    //   to: `fairdataihub@gmail.com`,
    //   from: `sendgrid@fairdataihub.org`,
    //   subject: `A new request has arrived!`,
    //   html: `<p>Email: ${email}</p>
    //   <p>Subject: ${subject}</p>
    //   <p>Message: ${message}</p>`,
    // };

    // const usermsg = {
    //   to: email,
    //   from: `contact@fairdataihub.org`,
    //   subject: `Hi there!`,
    //   html: `<strong>Thank you for contacting us. We will be in touch with you soon.</strong>
    //   <p>Email: ${email}</p>
    //   <p>subject: ${subject}</p>
    //   <p>Message: ${message}</p>`,
    // };

    sendSmtpEmail = {
      to: [
        {
          email: 'talon22@ethereal.email',
          name: 'Talon Beahan',
        },
      ],
      templateId: 1,
      params: {
        name: 'Talon',
        surname: 'Beahan',
        email,
      },
      headers: {
        'X-Mailin-custom':
          'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
      },
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function (data) {
        console.log('API called successfully. Returned data: ' + data);
        console.log(JSON.stringify(data, null, 2));
        console.log(`Email sent`);
        const response = { success: true };
        res.status(200).json(response);
      },
      function (error) {
        console.error(error);
        const response = { success: false };
        res.status(400).json(response);
      }
    );

    // function sendError(error) {
    //   console.error(error);
    //   const response = { success: false };
    //   res.status(400).json(response);
    // }

    // sgMail
    //   .send(ourmsg)
    //   .then(() => {
    //     sgMail
    //       .send(usermsg)
    //       .then(() => {
    //         console.log(`Email sent`);
    //         const response = { success: true };
    //         res.status(200).json(response);
    //       })
    //       .catch((error) => {
    //         sendError(error);
    //       });
    //   })
    //   .catch((error) => {
    //     sendError(error);
    //   });
  }
}
