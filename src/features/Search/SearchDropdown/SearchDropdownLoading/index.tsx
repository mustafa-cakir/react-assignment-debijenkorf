import React from 'react';
import Shimmer from '../../../../common/components/Shimmer';
import ShimmerItem from '../../../../common/components/Shimmer/ShimmerItem';

const SearchDropdownLoading = () => {
    return (
        <Shimmer>
            <ShimmerItem height={32} width="75%" marginBottom={15} />
            <ShimmerItem height={32} width="75%" marginBottom={15} />
            <ShimmerItem height={32} width="75%" marginBottom={15} />
            <ShimmerItem height={32} width="50%" marginBottom={15} />
            <ShimmerItem height={32} width="50%" marginBottom={15} />
            <ShimmerItem height={23} width="50%" />
        </Shimmer>
    );
};

export default SearchDropdownLoading;
