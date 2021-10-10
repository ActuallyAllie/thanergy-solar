/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SolarFarms from './solar-farms';
import { accounts } from './api/accounts';
import { solarFarms } from './api/solar-farms';

describe('Solar Farms Index', () => {
    it('renders a heading', () => {
        render(<SolarFarms accounts={accounts} solarFarms={solarFarms} />);

        const heading = screen.getByRole('heading', {
            name: /Solar Farms/i,
        });

        expect(heading).toBeInTheDocument();
    });

    it('renders solar farms unchanged', () => {
        const tree = renderer
            .create(<SolarFarms accounts={accounts} solarFarms={solarFarms} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
