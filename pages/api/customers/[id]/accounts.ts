import accounts from '../../../../data/accounts.json';

export function getAccountsByCustomerId(customerId: number) {
    return accounts.filter(a => a.customer_id === customerId);
}

export default function handler(req, res) {
    const accounts = getAccountsByCustomerId(Number(req.query.id));
    res.status(200).json(accounts);
}
