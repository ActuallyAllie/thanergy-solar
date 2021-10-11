import customersData from '../../data/customers.json';

const customers = customersData.map((customer) => ({
    ...customer,
    active: !!customer.active,
}));

export { customers };

export default function handler(req, res) {
    res.status(200).json(customers);
}
