import BigNumber from 'bignumber.js';
import { Account } from '../types/';

function getAccounts(accounts: Account[], solarFarmId: number) {
    return accounts.filter((a) => a.solar_farm_id === solarFarmId);
}

export function getNumberOfAccounts(accounts: Account[], solarFarmId: number) {
    return getAccounts(accounts, solarFarmId).length;
}

export function getTotalCapacityFilled(
    accounts: Account[],
    solarFarmId: number,
) {
    return getAccounts(accounts, solarFarmId).reduce(
        (prev, account) =>
            !!account.capacity_share ? prev.plus(account.capacity_share) : prev,
        new BigNumber(0),
    );
}
