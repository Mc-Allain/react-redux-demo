import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import { endHiragana } from '../../redux'

const GameOverScreen = (props) => {
	return (
		<div className="flex flex-col items-center">
			<div className="text-3xl md:text-5xl">Game Over</div>
			<div className="text-lg md:text-2xl mt-1 md:mt-3">
                {'Score: ' + props.hiraganaReducer.score + '/' + props.hiraganaReducer.hiraganaList.length}
			</div>
			<Button className={'mt-8 md:mt-16 w-fit'} onClick={() => props.endHiragana()}>Finish</Button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		hiraganaReducer: state.hiraganaReducer,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		endHiragana: () => dispatch(endHiragana()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOverScreen);