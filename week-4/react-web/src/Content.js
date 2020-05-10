import React from "react";
import PropTypes from "prop-types";
import HiddenContent from "./HiddenContent";

const Content = (props) => (
    <div>
        <section className="main-section">
            <h2>Section Title</h2>
            {props.contents.map((content, index) => (
                <article className="content-box">
                    <p>Content Box {content.box}</p>
                </article>
            ))}
        </section>
        

        <section className="wrapper">
            <div className="action-button">
                <p onMouseDown={() => props.toggleHidden()}>Call to Action</p>
            </div>
        </section>
        
        <HiddenContent
            showHidden={props.showHidden}
            hiddenContent={props.hiddenContent}
        />
    </div>
);

Content.propTypes = {
    contents: PropTypes.array.isRequired,
    showHidden: PropTypes.bool.isRequired,
    toggleHidden: PropTypes.func.isRequired,
    hiddenContent: PropTypes.array.isRequired
};

export default Content;
