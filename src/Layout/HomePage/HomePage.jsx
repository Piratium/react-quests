import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderItem from './components/HeaderItem';
import ContentItem from './components/ContentItem';
import FooterItem from './components/FooterItem';


const baseUrl = "https://jsonplaceholder.typicode.com/posts"

const HomePage = () => {
    const value = "Карточки";

    const [labels, setLabels] = useState([
        { id: 1, title:"Заголовок 1", body: "Описание 1" },
        { id: 2, title:"Заголовок 2", body: "Описание 2" },
        { id: 3, title:"Заголовок 3", body: "Описание 3" },
        { id: 4, title:"Заголовок 4", body: "Описание 4" },
    ]);

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(res => {
                setLabels(res.data.slice(0, 5));
            }); 
    },[]);

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
                        setLabels([...labels, { id: labels.length+1, title:`Заголовок ${labels.length+1}`, body: `Описание ${labels.length+1}` },]);
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