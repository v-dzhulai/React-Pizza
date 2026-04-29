import './scss/app.scss';

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import React from "react";

function App() {
    const [activeCategory, setActiveCategory] = React.useState(0);
    const [pizzas, setPizzas] = React.useState([]);
    const categories = ['Всі', 'М\'ясні', 'Веґетаріанські', 'Ґриль', 'Гострі', 'Закриті'];

    const onChangeCategory = (i) => {
        setActiveCategory(i);
    };

    React.useEffect(() => {
        fetch('https://69f1f91cb15130b973524e5d.mockapi.io/items')
            .then((res) => res.json())
            .then(pizzas => setPizzas(pizzas));
    }, []);

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>

                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories categories={categories} active={activeCategory} onChange={onChangeCategory}/>
                            <Sort/>
                        </div>

                        <h2 className="content__title">{categories[activeCategory]} піци</h2>
                        <div className="content__items">
                            {pizzas.map((item) => {
                                return <PizzaBlock key={`${item.id}_${item.title}`} {...item}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
