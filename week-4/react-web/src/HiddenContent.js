import React from "react";
import PropTypes from "prop-types";

const HiddenContent = (props) => {
    if (props.showHidden) {
        return (
            <section className="main-section">
                {props.hiddenContent.map((content, index) => (
                    <article className="content-box">
                        <p>Content Box {content.box}</p>
                    </article>
                ))}
            </section>
        );
    }
    return null;
};

HiddenContent.propTypes = {
    showHidden: PropTypes.bool.isRequired,
    hiddenContent: PropTypes.array.isRequired,
};

export default HiddenContent;
