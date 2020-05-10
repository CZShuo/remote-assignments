import React from "react";
import PropTypes from "prop-types";
import HiddenNav from "./HiddenNav";

const Nav = (props) => (
    <div>
        <nav id="nav-bar">
            <ul>
                {props.items.map((item, index) => (
                    <li>
                        <a href="#">Item {item.item}</a>
                    </li>
                ))}
            </ul>
        </nav>

        <HiddenNav 
            items={props.items}
            navHidden={props.navHidden}
            toggleNavHidden={props.toggleNavHidden}
        />
    </div>
);

Nav.propTypes = {
    items: PropTypes.array.isRequired,
    navHidden: PropTypes.bool.isRequired,
    toggleNavHidden: PropTypes.func.isRequired
};

export default Nav;
