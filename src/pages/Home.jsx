import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const {searchValue} = React.useContext(SearchContext);

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
        const search = searchValue ? `&title=${searchValue}` : '';

        fetch(
            `https://69f1f91cb15130b973524e5d.mockapi.io/items?page=${page}&limit=16&${category}sortBy=${sortBy}&order=${order}${search}`
        )
            .then((res) => res.json())
            .then(pizzas => {
                setPizzas(Array.isArray(pizzas) ? pizzas : []);
                setIsLoading(false);
            });

        window.scrollTo(0, 0);
    }, [categoryIndex, sortType, searchValue, page]);

    const pizzaList = pizzas.map(item => <PizzaBlock key={`${item.id}_${item.title}`} {...item}/>);
    const skeletonList = [...new Array(4)].map((item, i) => <Skeleton key={i}/>);

    return (
        <>
            <div className="content__top">
                <Categories categories={categories} active={categoryIndex} onChange={onChangeCategory}/>
                <Sort isOpen={open} setOpen={setOpen} sortType={sortType} onChangeSort={onChangeSort}/>
            </div>

            <h2 className="content__title">{categories[categoryIndex]} піци</h2>

            <div className="content__items">
                {isLoading ? skeletonList : pizzaList}
            </div>

            <Pagination onChange={(num) => setPage(num)}/>
        </>
    );
};

export default Home;