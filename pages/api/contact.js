import * as contact from '../../lib/contact';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return res.status(201).json(await contact.create(req.body));
    default:
      return res.status(405).send('Method Not Allowed');
  }
}
