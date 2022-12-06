import React from 'react';
import { generateGrid, isWordValid } from './utils';

class Wordle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			grid: generateGrid(),
			selectedLetters: [],
			score: 0,
			gameOver: false,
		};
	}

	handleLetterClick(letter) {
		this.setState((prevState) => {
			const selectedLetters = [...prevState.selectedLetters, letter];

			// check if the selected letters form a valid word
			if (isWordValid(selectedLetters)) {
				// increase the score and reset the selected letters
				return {
					score: prevState.score + 1,
					selectedLetters: [],
				};
			} else {
				return { selectedLetters };
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Score: {this.state.score}</h1>
				{this.state.gameOver ? (
					<h2>Game Over!</h2>
				) : (
					<div className="grid">
						{this.state.grid.map((letter) => (
							<button
								key={letter}
								onClick={() => this.handleLetterClick(letter)}
							>
								{letter}
							</button>
						))}
					</div>
				)}
			</div>
		);
	}
}

export default Wordle;
