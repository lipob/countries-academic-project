import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

const history = createMemoryHistory();

beforeEach(() => {
  render( 
    <Router history={history}>
      <App />
    </Router>
  )
})

test('renders learn react link', () => {
  const linkElement = screen.getByText(/activity/i);
  expect(linkElement).toBeInTheDocument();
});

test('it must have a title', () => {
  expect(screen.queryByText(/henry countries/i)).toBeInTheDocument();
});

test('full app navigation', () => {
  expect(screen.queryByText(/henry countries/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/create activity/i), leftClick);
  expect(screen.getByText(/Add new tourist activity/i)).toBeInTheDocument();
});