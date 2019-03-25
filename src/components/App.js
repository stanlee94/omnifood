import React from 'react';
import Header from './Header';
import FeatureSection from './FeatureSection';
import MealSection from './MealSection';
import StepSection from './StepSection';
import CitySection from './CitySection';
import TestimonialSection from './TestimonialSection';
import SignUpSection from './SignUpSection';
import Form from './Form';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <FeatureSection />
                <MealSection />
                <StepSection />
                <CitySection />
                <TestimonialSection />
                <SignUpSection />
                <Form />
                <Footer />
            </div>
        );
    }
}

export default App;