import React from 'react';

import profile from '../../assets/img/profile.jpg';

import './styles.css';

export default function Intro() {
    return (
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hello, I am <strong>Marcos Vinicius Corsi</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">
                Mobile && Web Developer
            </p>
            <img src={profile} alt="" class="intro__img" />
        </section>
    );
}
