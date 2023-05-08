import React from 'react';
import ScrollTop from './ScrollTop';

describe('<ScrollTop />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ScrollTop />);
  });
});
