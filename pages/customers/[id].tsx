import Head from 'next/head';
import { Account, Customer } from '../../types/';
import { Card } from '../../components/Card';
import { Label } from '../../components/Label';
import { Title } from '../../components/Title';
import { Container } from '../../components/Container';
import { Table } from '../../components/Table';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { getCustomer } from '../api/customers/[id]';
import { getAccountsByCustomerId } from '../api/customers/[id]/accounts';
import { solarFarms } from '../api/solar-farms';

interface Props {
    accounts: Account[];
    customer: Customer;
}

export default function CustomerView({ accounts, customer }: Props) {
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Address',
                accessor: 'address',
            },
            {
                Header: 'City',
                accessor: 'city',
            },
            {
                Header: 'State',
                accessor: 'state',
            },
            {
                Header: 'Zip Code',
                accessor: 'zip_code',
            },
            {
                Header: 'Solar Farm',
                accessor: (row: Account) =>
                    row.solar_farm_id
                        ? solarFarms.find((sf) => sf.id === row.solar_farm_id)
                              .name
                        : '',
                id: 'solar_farm_id',
            },
            {
                Header: 'Capacity Share',
                accessor: 'capacity_share',
            },
            {
                Header: 'Date Created',
                accessor: 'created_date',
            },
        ],
        [],
    );

    const tableInstance = useTable({ columns, data: accounts }, useSortBy);

    return (
        <Container>
            <Head>
                <title>
                    {customer.first_name} {customer.last_name}: Thanergy Solar
                </title>
                <meta
                    name="description"
                    content="Customer using Dominicus powered electricity!"
                />
            </Head>
            <div className="w-full">
                <div className="flex flex-row">
                    <Title>
                        {customer.first_name} {customer.last_name}
                    </Title>
                    {customer.active ? (
                        <span className="py-2 px-4 text-lg">(Active)</span>
                    ) : (
                        <span className="text-red-800 py-2 px-4 text-lg">
                            (Inactive)
                        </span>
                    )}
                </div>
                <div className="p-5">
                    <ul>
                        <li>
                            <Label>Email:</Label>
                            <a href={`mailto:${customer.email}`}>
                                {customer.email}
                            </a>
                        </li>
                        <li>
                            <Label>Account Manager:</Label>
                            {customer.account_manager_id}
                        </li>
                        <li>
                            <Label>Reason for Joining:</Label>
                            {customer.reason_for_joining}
                        </li>
                        <li>
                            <Label>Joined:</Label>
                            {customer.created_date}
                        </li>
                    </ul>
                </div>
            </div>
            {accounts.length ? (
                <Table title="Accounts" tableInstance={tableInstance} />
            ) : (
                <Card title="Accounts">
                    <p className="p-3 text-xl">
                        {customer.first_name} {customer.last_name} is not
                        associated with any accounts
                    </p>
                </Card>
            )}
        </Container>
    );
}

export async function getServerSideProps({ params }) {
    const customer = getCustomer(Number(params.id));
    const accounts = getAccountsByCustomerId(Number(params.id));
    return { props: { customer, accounts, solarFarms } };
}
