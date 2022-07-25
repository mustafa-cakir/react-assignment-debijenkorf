import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../app/testWrapper';
import SearchInput from '../index';

describe('Search Input Component', () => {
    it('should render the component properly', () => {
        render(<SearchInput />);
        const input = screen.getByTestId('input');
        expect(input).toBeInTheDocument();
    });

    it('should should display the entered text in the input', () => {
        render(<SearchInput />);
        const input = screen.getByTestId('input');
        fireEvent.change(input, { target: { value: 'some keyword' } });
        expect(screen.getByTestId('input')).toHaveValue('some keyword');
    });

    it('should display the keyword from store as default value', () => {
        render(<SearchInput />, {
            preloadedState: {
                search: {
                    keyword: 'some keyword here',
                },
            },
        });
        const input = screen.getByTestId('input');
        expect(input).toHaveValue('some keyword here');
    });

    it('should clicking the clear button clear the input field', () => {
        render(<SearchInput />, {
            preloadedState: {
                search: {
                    keyword: 'some keyword here',
                },
            },
        });
        const input = screen.getByTestId('input');
        const clearBtn = screen.getByTestId('clear-btn');
        expect(input).toHaveValue('some keyword here');
        fireEvent.click(clearBtn);
        expect(input).toHaveValue('');
    });
});
