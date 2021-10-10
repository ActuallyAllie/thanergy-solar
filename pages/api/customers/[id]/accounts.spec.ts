import { getAccountsByCustomerId } from './accounts';

describe('customers/[id]/accounts api', () => {
    it('returns the correct accounts', () => {
        const accounts = getAccountsByCustomerId(7);

        expect(accounts.length).toEqual(4);
        expect(accounts.find(a => a.id === 45)).not.toBeNull();

        const noAccounts = getAccountsByCustomerId(1);
        expect(noAccounts.length).toEqual(0);
    });
});
