import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['Всі', 'М\'ясні', 'Веґетаріанські', 'Ґриль', 'Гострі', 'Закриті'];

    const [open, setOpen] = React.useState(false);
    const [sortType, setSortType] = React.useState({
        name: 'популярністю',
        sortProperty: 'rating'
    });

    const onChangeCategory = (i) => {
        setCategoryIndex(i);
    };

    const onChangeSort = (obj) => {
        setSortType(obj);
        setOpen(false);
    };

    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryIndex > 0 ? `category=${categoryIndex}&` : "";
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

        fetch(
            `https://69f1f91cb15130b973524e5d.mockapi.io/items?${category}sortBy=${sortBy}&order=${order}`
        )
            .then((res) => res.json())
            .then(pizzas => {
                setPizzas(pizzas);
                setIsLoading(false);
            });

        window.scrollTo(0, 0);
    }, [categoryIndex, sortType]);

    return (
        <>
            <div className="content__top">
                <Categories categories={categories} active={categoryIndex} onChange={onChangeCategory}/>
                <Sort isOpen={open} setOpen={setOpen} sortType={sortType} onChangeSort={onChangeSort}/>
            </div>

            <h2 className="content__title">{categories[categoryIndex]} піци</h2>

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