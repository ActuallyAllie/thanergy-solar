/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';
import { customers } from '../pages/api/customers';

describe('Customer Index', () => {
    it('renders a heading', () => {
        render(<Home customers={customers} />);

        const heading = screen.getByRole('heading', {
            name: /Customers/i,
        });

        expect(heading).toBeInTheDocument();
    });

    it('renders homepage unchanged', () => {
        const tree = renderer.create(<Home customers={customers} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
