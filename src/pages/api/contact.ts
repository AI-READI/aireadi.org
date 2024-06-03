// import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

// if (!process.env.SENDGRID_API_KEY) {
//   throw new Error('SENDGRID_API_KEY not found');
// } else {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// }

type Data = {
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // if (req.method === `POST`) {
  //   const { email, subject, message } = JSON.parse(req.body);

  //   const ourmsg = {
  //     to: `jpowen@uw.edu`,
  //     from: `sendgrid@aireadi.org`,
  //     subject: `A new request has arrived!`,
  //     html: `<p>Email: ${email}</p>
  //     <p>Subject: ${subject}</p>
  //     <p>Message: ${message}</p>`,
  //   };

  //   const usermsg = {
  //     to: email,
  //     from: `contact@aireadi.org`,
  //     subject: `Hi there!`,
  //     html: `<strong>Thank you for contacting us. We will be in touch with you soon.</strong>
  //     <p>Email: ${email}</p>
  //     <p>Subject: ${subject}</p>
  //     <p>Message: ${message}</p>`,
  //   };

  //   sgMail
  //     .send(ourmsg)
  //     .then(() => {
  //       sgMail
  //         .send(usermsg)
  //         .then(() => {
  //           // eslint-disable-next-line no-console
  //           console.log(`Email sent`);
  //           const response = { success: true };
  //           res.status(200).json(response);
  //         })
  //         .catch((error: unknown) => {
  //           // eslint-disable-next-line no-console
  //           console.error(error);
  //           const response = { success: false };
  //           res.status(400).json(response);
  //         });
  //     })
  //     .catch((error: unknown) => {
  //       // eslint-disable-next-line no-console
  //       console.error(error);
  //       const response = { success: false };
  //       res.status(400).json(response);
  //     });
  // }

  return res.status(400).json({ success: false });
}
