import { useState } from "react";

function Categories({ items }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (value) => {
        setActiveItem(value);
    };

    return(
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>

                {items && items.map((name, index) => {
                    return <li className={activeItem === index ? 'active' : ''}
                               key={`${index}_${name}`}
                               onClick={() => onSelectItem(index)}>
                               { name }
                           </li>
                })}
            </ul>
        </div>
    );
}

export default Categories;