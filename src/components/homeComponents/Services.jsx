import React from 'react';
import ServiceItem from './ServiceItem';

import "../../styles/shared.css"
import "../../styles/style.css"

import coursesIcon from '../../assets/photos/icons/courses-green.PNG';
import tutorialsIcon from '../../assets/photos/icons/tutos-green.PNG';
import testsIcon from '../../assets/photos/icons/tests-green.PNG';
import forumIcon from '../../assets/photos/icons/forum-green.PNG';

const Services = () => {
    const servicesData = [
        {
            imgSrc: coursesIcon,
            altText: 'courses',
            title: 'Courses',
            description: 'We provide online complete courses in many different programming languages and technologies such as HTML, CSS, PHP, JAVASCRIPT, Laravel, Symfony, Node.js, React.js, and more...',
        },
        {
            imgSrc: tutorialsIcon,
            altText: 'tutorials',
            title: 'Tutorials',
            description: 'We provide online sessions and workshops about how to do specific things in the development process...',
        },
        {
            imgSrc: testsIcon,
            altText: 'tests',
            title: 'Tests',
            description: 'We offer you a wide range of placement tests that help you choose the right courses and lessons for your abilities.',
        },
        {
            imgSrc: forumIcon,
            altText: 'forum',
            title: 'Forum',
            description: 'A forum where you can ask your questions or software problems and share them with experts in the field.',
        },
    ];

    return (
        <section id="services">
            <h2>What We Provide?</h2>
            <hr />
            <ul>
                {servicesData.map((service, index) => (
                    <ServiceItem
                        key={index}
                        imgSrc={service.imgSrc}
                        altText={service.altText}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Services;
