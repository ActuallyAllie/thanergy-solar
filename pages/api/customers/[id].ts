import customers from '../../../data/customers.json';

export function getCustomer(id: number) {
    return customers.find(c => c.id === id);
}

export default function handler(req, res) {
    const customer = getCustomer(parseInt(req.query.id, 10));
    if (!customer) {
        res.status(404).send();
    } else {
        res.status(200).json(customer);
    }
}
