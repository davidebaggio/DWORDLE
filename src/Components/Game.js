import React from 'react';

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			score: 0,
			gameOver: false,
		};
	}

	handleClick() {
		// update the score and check if the game is over
		this.setState((prevState) => {
			return {
				score: prevState.score + 1,
				gameOver: prevState.score >= 10,
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Score: {this.state.score}</h1>
				{this.state.gameOver ? (
					<h2>Game Over!</h2>
				) : (
					<button onClick={() => this.handleClick()}>Click Me!</button>
				)}
			</div>
		);
	}
}

export default Game;
