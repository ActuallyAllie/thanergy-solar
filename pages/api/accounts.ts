import accounts from '../../data/accounts.json';

export {
    accounts
};

export default function handler(req, res) {
    res.status(200).json(accounts);
}
