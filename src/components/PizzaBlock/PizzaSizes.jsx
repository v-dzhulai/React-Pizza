import React from 'react';

const PizzaSizes = ({sizes}) => {
    const [activeSize, setActiveSize] = React.useState(0);

    const onClickActiveSize = (i) => {
        setActiveSize(i);
    };

    return (
        <ul>
            {sizes.map((size, i) => {
                return <li key={`${size}_${i}`}
                           className={activeSize === i ? 'active' : ''}
                           onClick={() => onClickActiveSize(i)}>{size} см.</li>;
            })}
        </ul>
    );
};

export default PizzaSizes;