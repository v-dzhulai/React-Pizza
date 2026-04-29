import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [activeCategory, setActiveCategory] = React.useState(0);
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const categories = ['Всі', 'М\'ясні', 'Веґетаріанські', 'Ґриль', 'Гострі', 'Закриті'];

    const onChangeCategory = (i) => {
        setActiveCategory(i);
    };

    React.useEffect(() => {
        fetch('https://69f1f91cb15130b973524e5d.mockapi.io/items')
            .then((res) => res.json())
            .then(pizzas => {
                setPizzas(pizzas);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories categories={categories} active={activeCategory} onChange={onChangeCategory}/>
                <Sort/>
            </div>

            <h2 className="content__title">{categories[activeCategory]} піци</h2>

            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(4)].map((item, i) => <Skeleton key={i}/>)
                        : pizzas.map(item => <PizzaBlock key={`${item.id}_${item.title}`} {...item}/>)
                }
            </div>
        </>
    );
};

export default Home;