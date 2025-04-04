import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderItem from './components/HeaderItem';
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';


const baseUrl = "https://jsonplaceholder.typicode.com/posts"

const HomePage = () => {
    const value = "Карточки";

    const [labels, setLabels] = useState([
        { id: 1, cardTitle:"Заголовок 1", cardText: "Описание 1" },
        { id: 2, cardTitle:"Заголовок 2", cardText: "Описание 2" },
        { id: 3, cardTitle:"Заголовок 3", cardText: "Описание 3" },
        { id: 4, cardTitle:"Заголовок 4", cardText: "Описание 4" },
    ]);

    useEffect(() => {
        axios.get(baseUrl).then(res => {
                const temp = [];
                res.data.slice(0, 5).forEach(
                    item => {
                        temp.push(
                            {
                                id: item.id,
                                cardTitle: item.title,
                                cardText: item.body,
                            }
                        )
                    }
                );
                setLabels(temp)
            });
            
    },[])

    return (
        <div className='container col-10'>
            <HeaderItem 
                headerText={value}
            />
            <ContentItem 
                setOfLabels={labels}
            />
            <div className='text-center m-5'>
                <button className='btn btn-primary' 
                    onClick={() => {
                        setLabels([...labels, { id: 1, cardTitle:"Заголовок 1", cardText: "Описание 1" },]);
                    }
                }>
                    Добавить карточку
                </button>
            </div>
            <FooterItem />
        </div>
    );
}

export default HomePage;