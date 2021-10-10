/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CustomerView from './[id]';
import { accounts } from '../api/accounts';
import { customers } from '../api/customers';

describe('Customer View', () => {
    it('renders an accounts heading', () => {
        render(<CustomerView accounts={accounts} customer={customers[0]} />);

        const heading = screen.getByRole('heading', {
            name: /Accounts/i,
        });

        expect(heading).toBeInTheDocument();
    });

    it('renders solar farms unchanged', () => {
        const tree = renderer
            .create(
                <CustomerView accounts={accounts} customer={customers[0]} />,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
