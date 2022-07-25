import { screen } from '@testing-library/react';
import SuggestionItem from '../index';
import { render } from '../../../../../app/testWrapper';

describe('Suggestion Item Component', () => {
    it('should render the component with provided suggestion data', () => {
        render(
            <SuggestionItem
                suggestion={{
                    nrResults: 1100,
                    searchterm: 'heren truien',
                }}
            />,
        );
        expect(screen.getByText(/heren truien/)).toBeInTheDocument();
    });
    it('should highlight the item if there is match with the keyword', () => {
        render(
            <SuggestionItem
                suggestion={{
                    nrResults: 1100,
                    searchterm: 'heren truien',
                }}
            />,
            {
                preloadedState: {
                    search: {
                        keyword: 'ren',
                    },
                },
            },
        );
        expect(screen.getByTestId('highlight')).toHaveTextContent('ren');
    });
});
