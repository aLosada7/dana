import { Container } from '@dana-components';
import { useState } from 'react';
import { FoodCategoriesContainer } from '../containers/FoodCategoriesContainer';
import { RestaurantListContainer } from '../containers/RestaurantListContainer';

export const HomePage = () => {
    const [foodKindSelected, setFoodKindSelected] = useState('all');
    return (
        <Container ph={24} pv={8}>
            <FoodCategoriesContainer onSelect={setFoodKindSelected} />
            <RestaurantListContainer foodKind={foodKindSelected} />
        </Container>
    );
};
