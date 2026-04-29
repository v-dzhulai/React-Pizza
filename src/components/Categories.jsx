import React from 'react';

const Categories = () => {
    const categories = ['Всі', 'М\'ясні', 'Веґетаріанська', 'Ґриль', 'Гострі', 'Закриті'];
    const [active, setActive] = React.useState(0);

    const onChangeActive = (i) => {
        setActive(i);
    };

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return <li key={`${category}_${index}`}
                               className={index === active ? 'active' : ''}
                               onClick={() => onChangeActive(index)}>{category}</li>;
                })}
            </ul>
        </div>
    );
};

export default Categories;