import React from 'react'
import ElevateAppBar from './ElevateAppBar'

describe('<ElevateAppBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ElevateAppBar />)
  })
})