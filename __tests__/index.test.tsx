import React from 'react';
import { render } from '@testing-library/react';

import { HelloWorld } from '../src';

describe('HelloWorld', () => {
  it('should render component with default text', () => {
    const {
      // debug,
      getByText,
      container,
    } = render(<HelloWorld />);

    // debug();

    expect(getByText('Hello World!')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render component with custom text', () => {
    const {
      // debug,
      getByText,
      container,
    } = render(<HelloWorld text="Lorem Ipsum" />);

    // debug();

    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
