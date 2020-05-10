import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";

const Header = (props) => (
    <header className="main-header wrapper">
        <section className="logo-title">
            <img src={require("./images/coronavirus.png")} alt="Website Logo" id="logo" />
            <p id="title">
                <a href="#" id="home">
                    Website Title
                </a>
            </p>
        </section>
        <div id="trigger">
            <img src={require("./images/list.png")} alt="Trigger icon" id="trigger-icon" 
                onMouseDown={()=>props.toggleNavHidden()}
            />
        </div>
        <Nav 
            items={props.items}
            navHidden={props.navHidden}
            toggleNavHidden={props.toggleNavHidden}
        />
    </header>
);

Header.propTypes = {
    items: PropTypes.array.isRequired,
    navHidden: PropTypes.bool.isRequired,
    toggleNavHidden: PropTypes.func.isRequired
}

export default Header;
