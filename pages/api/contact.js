import * as contact from '../../lib/contact';
import * as rialir from '../../lib/rialir';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(201).json(await rialir.create());
    case 'POST':
      return res.status(201).json(await contact.create(req.body));
    default:
      return res.status(405).send('Method Not Allowed');
  }
}
