import customers from '../../data/customers.json';

export {
    customers
};

export default function handler(req, res) {
    res.status(200).json(customers);
}
