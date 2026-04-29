import React from 'react';

const Categories = ({categories, active, onChange}) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return <li key={`${category}_${index}`}
                               className={index === active ? 'active' : ''}
                               onClick={() => onChange(index)}>{category}</li>;
                })}
            </ul>
        </div>
    );
};

export default Categories;