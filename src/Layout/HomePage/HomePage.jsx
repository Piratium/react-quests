import React from 'react';
import HeaderItem from './components/HeaderItem';
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';

const value = "Карточки";
const labels = [
    { id: 1, cardTitle:"Заголовок 1", cardText: "Описание 1" },
    { id: 2, cardTitle:"Заголовок 2", cardText: "Описание 2" },
    { id: 3, cardTitle:"Заголовок 3", cardText: "Описание 3" },
    { id: 4, cardTitle:"Заголовок 4", cardText: "Описание 4" },
];

const HomePage = () => {
    return (
        <div className='container col-10'>
            <HeaderItem 
                headerText={value}
            />
            <ContentItem 
                setOfLabels={labels}
            />
            <FooterItem />
        </div>
    );
}

export default HomePage;