import React from 'react';

import './styles.css';

export default function Areas() {
    return (
        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>

            <div class="services">
                <div class="service">
                    <h3>Mobile</h3>
                    <p>
                        I have professional experience, building Android (Java) / Ionic
                        Framework applications. Currently I am studying React Native and
                        Flutter to build Cross Platforms Apps.
            </p>
                </div>

                <div class="service">
                    <h3>Front-end</h3>
                    <p>
                        Work developing simple Web Applications, using HTML, CSS and
                        JavaScript. I already used AngularJS, Angular 2+, ReactJS,
                        TypeScript, Material Design, Font Awesome and more.
            </p>
                </div>

                <div class="service">
                    <h3>Back-end</h3>
                    <p>
                        Built REST API's using Java/Spring Framework, consuming PostgreSQL
                        Database with JPA/Hibernate. For studying proposes, I already used
                        GraphQL, NodeJS, MongoDB, Sequelize and more.
            </p>
                </div>
            </div>

            <a href="#work" class="btn">Work</a>
        </section>
    );
}
