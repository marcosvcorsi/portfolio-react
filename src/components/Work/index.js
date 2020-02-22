import React from 'react';

import dota2 from '../../assets/img/dota2.jpg';
import nodebr from '../../assets/img/nodebr.jpg';
import pokeapi from '../../assets/img/pokeapi.png';

import './styles.css';

export default function Work() {
    return (
        <section class="my-work" id="work">
            <h2 class="section__title">Work</h2>
            <p class="section__subtitle section__subtitle--work">
                A selection of my latest projects
      </p>

            <div class="portfolio">
                <a href="https://github.com/marcosvcorsi/curso-nodebr" class="portfolio__item" target="_blank" rel="noopener noreferrer">
                    <img src={nodebr} class="portfolio__img" alt="" />
                </a>

                <a
                    href="https://github.com/marcosvcorsi/pokeapi"
                    class="portfolio__item"
                    target="_blank" rel="noopener noreferrer"
                >
                    <img src={pokeapi} class="portfolio__img" alt="" />
                </a>

                <a
                    href="https://github.com/marcosvcorsi/opendota"
                    class="portfolio__item"
                    target="_blank" rel="noopener noreferrer"
                >
                    <img src={dota2} class="portfolio__img" alt="" />
                </a>
            </div>
        </section>
    );
}
