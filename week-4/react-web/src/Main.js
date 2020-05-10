import React from "react";
import PropTypes from "prop-types";
import Content from "./Content"

const Main = (props) => (
    <main className="wrapper">
        <section className="welcome-message">
            <h1 onMouseDown={()=>props.toggleWelcome()}>
            {props.welcome? 'Welcome Message' : 'Have a Good Time!'}</h1>  
        </section>
        <Content 
            contents={props.contents}
            showHidden={props.showHidden}
            toggleHidden={props.toggleHidden}
            hiddenContent={props.hiddenContent}
        />
    </main>
);

Main.propTypes={
    contents: PropTypes.array.isRequired,
    welcome: PropTypes.bool.isRequired,
    toggleWelcome: PropTypes.func.isRequired,
    showHidden: PropTypes.bool.isRequired,
    toggleHidden: PropTypes.func.isRequired,
    hiddenContent: PropTypes.array.isRequired
}

export default Main;
