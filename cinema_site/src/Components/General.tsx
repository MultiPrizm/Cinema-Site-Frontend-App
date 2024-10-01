import { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import '../Controller/ViewController';
import './FilmCard';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationPanel from './NavigationPanel';
import FilmCard from './FilmCard';
import '../css/General.css';
import globalState, { AddGlobalState } from '../Controller/ViewController';

interface Film{
    imageSrc: string;
    title: string;
    time: string;
    schedule: string;
}

interface FilmPage{
    page: number;
    films: Film[];
}

function fMakePages(filmList: Film[]){

    let filmBuffer: Film[] = [];
    let filmStack: FilmPage[] = [];
    let pageCounter: number = 1;

    filmList.forEach((el) => {
        if(filmBuffer.length >= 5){
            filmStack.push({page: pageCounter, films: filmBuffer});

            filmBuffer = [];
            pageCounter++;
        }

        filmBuffer.push(el);
    });

    if(filmBuffer.length > 0){
        filmStack.push({page: pageCounter++, films: filmBuffer});
    }

    console.log(filmStack);
    return(filmStack);
}

const films: Film[] = [
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Конопотька Відьма',
        time: '15:45',
        schedule: '/schedule1'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Говори зло',
        time: '20:15',
        schedule: '/schedule2'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'OPA',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'AVAVAVAVAVAVAVAVAVAVAVAVA',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        title: 'Моя Химерна Сімейка',
        time: '11:45',
        schedule: '/schedule3'
    },
];



function General() {

    const [PanelShowed, setStatus] = useState<string>("null");

    AddGlobalState("GeneralShowStatus", PanelShowed, setStatus);

    const hidePanel = () => {
        globalState["GeneralShowStatus"].setter("hide");
    }

    const showPanel = () => {
        globalState["GeneralShowStatus"].setter("show");
    }

    let filmStack: FilmPage[] = fMakePages(films);

    return (
        <Container>
            <NavigationPanel />
            <Col>
                <Row>
                    <Carousel interval={4000} className={`carousel-wide ${globalState["GeneralShowStatus"].state === "hide" ? 'carousel-slide-up' : ''} ${globalState["GeneralShowStatus"].state === "show" ? 'carousel-slide-down' : ''}`}>
                        {filmStack.map((page) => (
                            <Carousel.Item key={page.page}>
                                <div className="film-row">
                                    {page.films.map((film, index) => (
                                        <FilmCard 
                                            key={index} 
                                            imageSrc={film.imageSrc} 
                                            title={film.title} 
                                            time={film.time} 
                                            schedule={film.schedule} 
                                        />
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </Col>
        </Container>
    );
}

export default General;