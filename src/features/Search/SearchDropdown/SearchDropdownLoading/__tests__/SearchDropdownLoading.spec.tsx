import { screen } from '@testing-library/react';
import { render } from '../../../../../app/testWrapper';
import SearchDropdownLoading from '../index';

describe('Search Dropdown Loading Component', () => {
    it('should render the component as expected', () => {
        render(<SearchDropdownLoading />);
        expect(screen.getByTestId('shimmer')).toBeInTheDocument();
    });
});
