import React from 'react';

const PizzaTypes = ({types}) => {
    const [activeType, setActiveType] = React.useState(0);
    const typeNames = ['тонке', 'традиційне'];

    const onClickActiveType = (i) => {
        setActiveType(i);
    };

    return (
        <ul>
            {types.map((type, i) => {
                return <li key={`${typeNames[type]}_${i}`}
                           className={activeType === i ? 'active' : ''}
                           onClick={() => onClickActiveType(i)}>{typeNames[type]}</li>;
            })}
        </ul>
    );
};

export default PizzaTypes;