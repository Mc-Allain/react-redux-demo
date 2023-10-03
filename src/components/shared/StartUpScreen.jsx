import React from 'react'
import BoxButton from './BoxButton'
import { connect } from 'react-redux'
import { generateHiraganaList } from '../../redux'
import QuizGroupSelector from './QuizGroupSelector'
import Button from './Button'

const StartUpScreen = (props) => {
	const generateHiraganaList = () => {
		props.generateHiraganaList(props.quizGroupReducer.quizGroups);
	}

	return (
		<div className="flex flex-col items-center h-full py-8">
			<QuizGroupSelector className='mx-10 md:mx-20' />
			<div className='flex items-end md:items-center flex-grow'>
				<BoxButton className='hidden md:block' onClick={() => generateHiraganaList()}>Start</BoxButton>
				<Button className='md:hidden' onClick={() => generateHiraganaList()}>Start</Button>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		quizGroupReducer: state.quizGroupReducer,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		generateHiraganaList: (quizGroups) => dispatch(generateHiraganaList(quizGroups)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartUpScreen);