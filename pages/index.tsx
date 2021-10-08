import Head from 'next/head';
import Image from 'next/image';
import solarFlare from '../public/solar-flare.png';
import { Header } from '../components/Header';
import { customers } from './api/customers';
import { Customer } from '../types/';
import { Container } from '../components/Container';

interface Props {
    customers: Customer[];
}

export default function Home({ customers }: Props) {
    return (
        <Container>
            <Head>
                <title>Customers: Thanergy Solar</title>
                <meta
                    name="description"
                    content="Customers using Dominicus powered electricity!"
                />
            </Head>
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                    {customers.map(customer => (
                        <tr className="border" key={customer.id}>
                            <td className="border">{customer.id}</td>
                            <td className="border">{customer.first_name} {customer.last_name}</td>
                            <td className="border">{customer.email}</td>
                            <td className="border">{customer.active}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </Container>
    );
}

export async function getServerSideProps() {
    return { props: { customers } };
}
