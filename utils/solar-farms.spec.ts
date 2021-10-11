import * as utils from './solar-farms';
import { accounts } from '../pages/api/accounts';

describe('Solar Farms Utils', () => {
    it('returns the correct number of accounts', () => {
        expect(utils.getNumberOfAccounts(accounts, 1)).toEqual(9);

        expect(utils.getNumberOfAccounts(accounts, 6)).toEqual(7);
    });

    it('returns the correct total capacity filled', () => {
        expect(utils.getTotalCapacityFilled(accounts, 1).toString()).toEqual(
            '5.1612',
        );

        expect(utils.getTotalCapacityFilled(accounts, 6).toString()).toEqual(
            '4.736',
        );
    });
});
