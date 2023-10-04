import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { endGame } from '../../redux'

const GameOverScreen = (props) => {
	return (
		<div className="flex flex-col items-center">
			<div className="text-3xl lg:text-5xl">Game Over</div>
			<div className="text-lg lg:text-2xl mt-1 lg:mt-3">
                {'Score: ' + props.gameReducer.score + '/' + props.gameReducer.characterList.length}
			</div>
			<Button className={'mt-8 lg:mt-16 w-fit'} onClick={() => props.endGame()}>Finish</Button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		gameReducer: state.gameReducer,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		endGame: () => dispatch(endGame()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOverScreen);