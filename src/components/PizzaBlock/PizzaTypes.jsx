import React from 'react';

const PizzaTypes = ({types}) => {
    const [activeType, setActiveType] = React.useState(0);

    const onClickActiveType = (i) => {
        setActiveType(i);
    };

    return (
        <ul>
            {types.map((type, i) => {
                return <li key={`${type}_${i}`}
                           className={activeType === i ? 'active' : ''}
                           onClick={() => onClickActiveType(i)}>{type}</li>;
            })}
        </ul>
    );
};

export default PizzaTypes;