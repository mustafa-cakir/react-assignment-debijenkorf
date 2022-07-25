import React from 'react';
import Search from '../../features/Search';
import './Style.scss';

const Homepage = () => {
    return (
        <main className="homepage" data-testid="homepage">
            <div className="container">
                <Search />
            </div>
        </main>
    );
};

export default Homepage;
