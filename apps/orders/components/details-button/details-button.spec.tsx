import { render } from '@testing-library/react';

import DetailsButton from './details-button';

describe('DetailsButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsButton />);
    expect(baseElement).toBeTruthy();
  });
});
