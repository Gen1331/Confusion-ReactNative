import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './HomeComponent';
import { View } from 'react-native';

describe('HomeComponent.jsx', () => {
    describe('Home', () => {
        let wrapper;
        const props = {
            dishes: {
                dishes: [],
                isLoading: false
            },
            promotions: {
                promotions: [],
                isLoading: false
            },
            leaders: {
                leaders: [],
                isLoading: false
            } 
        };
        beforeEach(() => {
            wrapper = shallow(<Home { ...props } />);
        });

        test('should render one View', () => {
            expect(wrapper.find(View).length).toBe(1);
        });
    });
});