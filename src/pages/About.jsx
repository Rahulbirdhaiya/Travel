import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <div className='Main-Container'>
            <header>
                <h1 className='aboutTitle'>About <i id='us'>Us</i></h1>
            </header>
            <section className="about__content Our-history">
                <h2>Our History</h2>
                <p className='All_p'>
                    Our journey began in 2024 with a small team of travel enthusiasts who wanted to make travel booking easier and more accessible for everyone. Over the years, we have grown into a leading travel booking platform, helping millions of travelers find the best deals and experiences.
                </p>
            </section>
            <section className="about__content Our-story">
                <h2 className='right_h2'>Our Story</h2>
                <p className='All_p'>
                    From humble beginnings, we have always been driven by a passion for travel and a commitment to providing exceptional service. Our team works tirelessly to bring you the best travel options, whether you're looking for flights, hotels, or vacation packages.
                </p>
            </section>
            <section className="about__content Website-feature">
                <h2 className='List_h2'>Website Features</h2>
                <p>• Easy and intuitive booking process</p>
                <p>• Comprehensive search filters</p>
                <p>• Personalized recommendations</p>
                <p>• Secure payment options</p>
            </section>
            <section className="about__content Website-highlight">
                <h2 className='List_h2'>Highlights</h2>
                <p>• Over 10 million satisfied customers</p>
                <p>• Partnerships with top airlines and hotels</p>
                <p>• 24/7 customer support</p>
                <p>• Exclusive deals and discounts</p>
            </section>
            <section className="about__content ecofriendly">
                <h2>Ecofriendly Initiatives</h2>
                <p>
                    We are committed to promoting sustainable travel. Our platform highlights eco-friendly options and encourages travelers to make environmentally conscious choices. We also partner with organizations that work towards reducing the carbon footprint of travel.
                </p>
            </section>
            <section className="about__content How-we-started">
                <h2 className='right_h2'>How We Started</h2>
                <p>
                    Our founders, driven by a love for travel and technology, started this company with a vision to revolutionize the travel booking industry. With a small office and big dreams, they set out to create a platform that would simplify travel planning for everyone.
                </p>
            </section>
            <section className="about__content How-AI">
                <h2>How AI is Helping Us Now</h2>
                <p>
                    Artificial Intelligence plays a crucial role in our platform. From personalized recommendations to dynamic pricing, AI helps us provide a seamless and efficient booking experience. Our AI-powered chatbots are available 24/7 to assist you with any queries and ensure you have a smooth travel experience.
                </p>
            </section>
        </div>
    );
};

export default About;