import React from "react";
import {Link} from "react-router-dom"
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we care about is food.</p>
                    </div>
                    <p className="mid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ipsam, ab molestiae qui provident neque quas. Porro, fugit nisi aut id repudiandae nulla ad asperiores laudantium fugiat quod! Praesentium minus quibusdam corrupti voluptates quis, doloribus impedit nulla hic reprehenderit saepe ducimus ad assumenda consequuntur fuga, nisi repudiandae, unde eligendi mollitia!</p>
                    <Link to={"/"}>Explore Menu
                    <span><HiOutlineArrowNarrowRight/></span></Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>

        </section>
    )
}

export default About