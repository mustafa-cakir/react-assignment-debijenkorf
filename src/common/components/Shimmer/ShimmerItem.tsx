import React from 'react';

type Prop = {
    width?: undefined | number | string;
    height?: undefined | number | string;
    marginBottom?: undefined | number;
};

const ShimmerItem = ({ height, width, marginBottom }: Prop) => {
    return <div className="shimmer-item" style={{ width, height, marginBottom }} data-testid="shimmer-item" />;
};

ShimmerItem.defaultProps = {
    width: undefined,
    height: undefined,
    marginBottom: undefined,
};

export default ShimmerItem;
