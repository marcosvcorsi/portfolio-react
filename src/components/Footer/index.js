import React from 'react';

export default function Footer() {
    return (
        <footer class="footer">
            <a href="mailto:marcosvcorsi@gmail.com" class="footer__link"
            >hello@mvc.dev</a
            >
            <ul class="social-list">
                <li class="social-list__item">
                    <a
                        class="social-list__link"
                        href="https://www.linkedin.com/in/marcos-vinicius-corsi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>

                <li class="social-list__item">
                    <a
                        class="social-list__link"
                        href="https://github.com/marcosvcorsi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-github"></i>
                    </a>
                </li>

                <li class="social-list__item">
                    <a
                        class="social-list__link"
                        href="https://www.instagram.com/mvcorsi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>

                <li class="social-list__item">
                    <a
                        class="social-list__link"
                        href="https://www.facebook.com/marcos.corsi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
