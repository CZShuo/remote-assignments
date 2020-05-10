import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
	
	state = {
		welcome:true,
		contents:[
			{
				box: '1',
			},
			{
				box: '2',
			},
			{
				box: '3',
			},
			{
				box: '4',
			}
		],
		showHidden:false,
		hiddenContent:[
			{
				box: '5',
			},
			{
				box: '6',
			},
			{
				box: '7',
			},
			{
				box: '8',
			}
		],
		navHidden:true,
		items: [
			{
				item:'1'
			},
			{
				item:'2'
			},
			{
				item:'3'
			},
			{
				item:'4'
			}
		]
	}

	toggleWelcome=()=> {
		this.setState({
			welcome: !this.state.welcome
		})
	}

	toggleHidden=()=> {
		this.setState({
			showHidden: !this.state.showHidden
		})
	}

	toggleNavHidden=()=> {
		this.setState({
			navHidden: !this.state.navHidden
		})
	}

    render() {
        return (
            <div>
                <Header 
					items={this.state.items}
					navHidden={this.state.navHidden}
					toggleNavHidden={this.toggleNavHidden}
				/>
                <Main 
					contents={this.state.contents}
					welcome={this.state.welcome}
					toggleWelcome={this.toggleWelcome}
					showHidden={this.state.showHidden}
					toggleHidden={this.toggleHidden}
					hiddenContent={this.state.hiddenContent}
				/>
            </div>
        );
    }
}

export default App;
