import React from "react";
import './About.css';

function About() {
    return (
        <div className="container">
            <h4 style={{ textAlign: 'center', fontStyle: 'italic' }}>About Us.......</h4>
            <div className="row" id="about-row">
                <div className="col-lg-6 col-sm-12">
                    <h5>Welcome to FoodPrism Restaurant</h5>
                    <p>
                        Our new menus, conceived by Chef David Hawksworth and his culinary team, showcase ingredient led, contemporary cuisine that is firmly rooted in the classics; bold, bright flavours are presented in skillfully executed dishes that echo nostalgia with a modern and local twist.

                        Our award-winning wine list is deep and global, carefully selected to deliver value and quality – let us guide you to your favourites or help you discover new varietals.

                        Open for lunch and dinner, with cocktail bar and happy hour in between and our own private dining room overlooking the art gallery, Hawksworth delivers an array of experiences to suit your individual mood and preferences.
                    </p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <strong>we tweeted:</strong>
                    <p>

                        Chef Hawksworth and his culinary team are in the midst of developing a fresh and vibrant seasonal menu, highlighti… t.co/s6gfzdMqu9 Time ago 12 Hours via LaterMedia.
                        Chef Hawksworth and his culinary team are in the midst of developing a fresh and vibrant seasonal menu, highlighti… t.co/s6gfzdMqu9 Time ago 12 Hours via LaterMedia.
                        Chef Hawksworth and his culinary team are in the midst of developing a fresh and vibrant seasonal menu, highlighti… t.co/s6gfzdMqu9 Time ago 12 Hours via LaterMedia.
                        Chef Hawksworth and his culinary team are in the midst of developing a fresh and vibrant seasonal menu, highlighti… t.co/s6gfzdMqu9 Time ago 12 Hours via LaterMedia.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default About;