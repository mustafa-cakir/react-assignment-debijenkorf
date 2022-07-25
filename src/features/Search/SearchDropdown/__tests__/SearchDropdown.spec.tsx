import { screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import SearchDropdown from '../index';

describe('Search Dropdown Component', () => {
    it('should hide component if isShowDropdown is false', () => {
        const { container } = render(<SearchDropdown />);
        expect(container).toBeEmptyDOMElement();
    });
    it('should hide component if keyword is empty', () => {
        const { container } = render(<SearchDropdown />, {
            preloadedState: {
                search: {
                    keyword: '',
                },
            },
        });
        expect(container).toBeEmptyDOMElement();
    });
    it('should hide component if keyword is less than 2 letters', () => {
        const { container } = render(<SearchDropdown />, {
            preloadedState: {
                search: {
                    keyword: 'a',
                },
            },
        });
        expect(container).toBeEmptyDOMElement();
    });
    it('should display shimmer loading if state is loading', () => {
        render(<SearchDropdown />, {
            preloadedState: {
                search: {
                    isShowDropdown: true,
                    keyword: 'abc',
                    suggestions: [],
                    isLoading: true,
                },
            },
        });
        expect(screen.getByTestId('shimmer')).toBeInTheDocument();
    });
    it('should render suggestions if the suggestions data is present', () => {
        render(<SearchDropdown />, {
            preloadedState: {
                search: {
                    isShowDropdown: true,
                    keyword: 'abc',
                    suggestions: [
                        {
                            nrResults: 1100,
                            searchterm: 'heren truien',
                        },
                        { nrResults: 1501, searchterm: 'dames truien' },
                    ],
                    isLoading: true,
                },
            },
        });
        expect(screen.getByTestId('suggestion-items')).toBeInTheDocument();
    });
});
