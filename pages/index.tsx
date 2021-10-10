import Head from 'next/head';
import { useRouter } from 'next/router';
import { customers } from './api/customers';
import { Customer } from '../types/';
import { Container } from '../components/Container';
import { Table } from '../components/Table';
import { useCallback, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

interface Props {
    customers: Customer[];
}

export default function Home({ customers }: Props) {
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: (row: Customer) =>
                    `${row.first_name} ${row.last_name}`,
                id: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Active',
                accessor: (row: Customer) => row.active ? 'true' : 'false',
                id: 'active',
            },
            {
                Header: 'Account Manager',
                accessor: 'account_manager_id',
            },
            {
                Header: 'Reason for Joining',
                accessor: 'reason_for_joining',
            },
            {
                Header: 'Joined',
                accessor: 'created_date',
            },
        ],
        [],
    );

    const tableInstance = useTable({ columns, data: customers }, useSortBy);
    const router = useRouter();

    const onRowClick = useCallback((row: Customer) => {
        router.push({
            pathname: '/customers/[id]',
            query: { id: row.id }
        })
    }, [router]);

    return (
        <Container>
            <Head>
                <title>Customers: Thanergy Solar</title>
                <meta
                    name="description"
                    content="Customers using Dominicus powered electricity!"
                />
            </Head>
            <Table title="Customers" tableInstance={tableInstance} onRowClick={onRowClick} />
        </Container>
    );
}

export async function getServerSideProps() {
    return { props: { customers } };
}
