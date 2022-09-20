import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import BeerList from '..';

let container = null;

describe('<BeerList />', () => {
  const fakesensor = {
    id: '1',
    temperature: '4',
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(global, 'fetch').mockImplementation((url) =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ ...fakesensor, id: url.substring(url.length - 1) }),
      })
    );
    act(() => {
      render(<BeerList />, container);
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('has beers title', () => {
    const beersTitle = screen.queryByText('Beers');
    expect(beersTitle).toBeInTheDocument();
  });

  it('has three headers', () => {
    expect(screen.getAllByRole('columnheader')).toHaveLength(3);
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Temperature')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('has six beers records', () => {
    expect(screen.getByText('Pilsner')).toBeInTheDocument();
    expect(screen.getByText('IPA')).toBeInTheDocument();
    expect(screen.getByText('Lager')).toBeInTheDocument();
    expect(screen.getByText('Stout')).toBeInTheDocument();
    expect(screen.getByText('Wheat beer')).toBeInTheDocument();
    expect(screen.getByText('Pale Ale')).toBeInTheDocument();
  });
});
