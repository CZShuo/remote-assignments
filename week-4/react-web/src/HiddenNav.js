import React from "react";
import PropTypes from "prop-types";

const HiddenNav = (props) => {
    if (!props.navHidden) {
        return (
            <div id="hidden-menu">
                <ul>
                    {props.items.map((item, index) => (
                        <li>
                            <a href="#">Item {item.item}</a>
                        </li>
                    ))}
                </ul>
                <div id="close-menu">
                    <h1 onMouseDown={() =>props.toggleNavHidden()}>X</h1>
                </div>
            </div>
        );
    }
    return null;
};

HiddenNav.propTypes = {
    items: PropTypes.array.isRequired,
    navHidden: PropTypes.bool.isRequired,
    toggleNavHidden: PropTypes.func.isRequired
};

export default HiddenNav;
