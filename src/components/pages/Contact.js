import React, {useEffect} from 'react';
import './Contact.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div data-aos="fade-up">
            <p className="contact-header">
                > ABOUT healing
            </p>
            <p className="about-healing">
                Healing is a website made for those who wish to be more educated on mental health issues and those who want a safe platform to vent their feelings and experiences.
                <br />Please note that I, the creator of this website, am in no way a medical expert, and all sources used for the 'Learn' section are credited at the bottom of each segment.
                <br />The main goal of making this website was to create something meaningful while learning new skill sets that would be valuable in my career as a software engineer.
                <br />Thus, if this website helped you in any way, even if it wasn't a significant amount of help, I'd say 'healing' has done its purpose.
                <br />Whoever you are, if you are reading this, thank you for looking through one of my passion projects and feel free to reach out with any questions or comments.
            </p>
            <p className="contact-header">
                > CONTACT
            </p>
            <div className='contact-grid'>
                <div>
                    <a className="button-linkedin" href="mailto:jlee3465@uwo.ca">Email</a>
                </div>
                <div>
                    <a className="button-linkedin" href="https://www.linkedin.com/in/stellajslee/">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Contact