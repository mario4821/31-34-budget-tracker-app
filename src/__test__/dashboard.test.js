import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard', () => {
  const defaultState = {
    categories: [
      {
        name: 'Apples',
        budget: 100,
        id: 555,
        timestamp: new Date(),
      },
      {
        name: 'Oranges',
        budget: 100,
        id: 555,
        timestamp: new Date(),
      },
    ],
    expenses: {
      555: [],
      222: [],
    },
  };

  test('test dashboard and store', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider 
    store={mockStore(defaultState)}><Dashboard/></Provider>);

    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('CategoryItem').length).toEqual(2);
  });
});
