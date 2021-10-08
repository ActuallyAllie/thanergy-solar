import Head from 'next/head';
import { useRouter } from 'next/router';
import { accounts } from './api/accounts';
import { solarFarms } from './api/solar-farms';
import { Account, SolarFarm } from '../types/';
import { Container } from '../components/Container';
import { Table } from '../components/Table';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

interface Props {
    accounts: Account[];
    solarFarms: SolarFarm[];
}

export default function SolarFarms({ accounts, solarFarms }: Props) {
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Number of Accounts',
                accessor: (solarFarm: SolarFarm) =>
                    accounts.filter((a) => a.solar_farm_id === solarFarm.id)
                        .length,
                id: 'accounts',
            },
            {
                Header: 'Total Capacity Filled',
                accessor: (solarFarm: SolarFarm) =>
                    accounts
                        .filter((a) => a.solar_farm_id === solarFarm.id)
                        .reduce(
                            (prev, account) =>
                                !!account.capacity_share
                                    ? prev + account.capacity_share
                                    : prev,
                            0,
                        ),
                id: 'capacity',
            },
        ],
        [accounts],
    );

    const tableInstance = useTable({ columns, data: solarFarms }, useSortBy);

    return (
        <Container>
            <Head>
                <title>Solar Farms: Thanergy Solar</title>
                <meta
                    name="description"
                    content="Solar Farms harvesting the power of Dominicus!"
                />
            </Head>
            <Table title="Solar Farms" tableInstance={tableInstance} />
        </Container>
    );
}

export async function getServerSideProps() {
    return { props: { accounts, solarFarms } };
}
