import React from 'react';
import food1 from '../image/1.jpg';
import food2 from '../image/2.jpg';
import food3 from '../image/3.jpg';
import food4 from '../image/4.jpg';
import food5 from '../image/5.jpg';
import food6 from '../image/6.jpg';
import food7 from '../image/7.jpg';
import food8 from '../image/8.jpg';

class MealSection extends React.Component {
    render() {
        return(
            <section className="section-meals">
                <ul className="meals-row clearfix">
                    <li>
                        <img src={food1} alt="Korean bibimbap with egg and vegetables" />
                    </li>
                    <li>
                        <img src={food2} alt="Simple italian pizza with cherry tomatoes" />
                    </li>
                    <li>
                        <img src={food3} alt="Chicken breast steak with vegetables" />
                    </li>
                    <li>
                        <img src={food4} alt="Autumn pumpkin soup" />
                    </li>
                </ul>
                <ul className="meals-row clearfix">
                    <li>
                        <img src={food5} alt="Paleo beef steak with vegetables" />
                    </li>
                    <li>
                        <img src={food6} alt="Healthy baguette with egg and vegetables" />
                    </li>
                    <li>
                        <img src={food7} alt="Burger with cheddar and bacon" />
                    </li>
                    <li>
                        <img src={food8} alt="Granola with cherries and strawberries" />
                    </li>
                </ul>
            </section>
        );
    }
}

export default MealSection;