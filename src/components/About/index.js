import React from 'react';

import hack from '../../assets/img/hack.jpg';

import './styles.css';

export default function About() {
    return (
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">
                Fullstack Developer
            </p>

            <div class="about-me__body">
                <p>
                    My passion for games led me to learn about technology, programming and
                    English! Work as a fullstack developer, using Java, Angular and Ionic.
                    Current studying in the spare time, a little bit of Nodejs, ReactJS
                    and React Native/Flutter. Always learning more about new technologies,
                    and tryng to evolve in professional and personal life.
                </p>
            </div>

            <img src={hack} alt="" class="about-me__img" />
        </section>
    );
}
