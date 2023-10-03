import React from 'react'
import BoxButton from './BoxButton'
import { connect } from 'react-redux'
import { generateHiraganaList } from '../../redux'
import QuizGroupSelector from './QuizGroupSelector'
import Button from './Button'
import Section from './Section'

const StartUpScreen = (props) => {
	const selectedCount = [...props.quizGroupReducer.quizGroups].filter(quizGroup => {
		return quizGroup.selected === 1;
	}).length;

	const generateHiraganaList = () => {
		props.generateHiraganaList(props.quizGroupReducer.quizGroups);
	}

	return (
		<div className="flex flex-col items-center h-full py-8 gap-6">
			<Section title={'Group'} className='mx-10 md:mx-20 flex-grow md:flex-grow-0'>
				<div className='h-full overflow-y-auto'>
					<QuizGroupSelector />
				</div>
			</Section>
			<div className='flex items-center h-16 md:flex-grow'>
				{
					selectedCount > 0 ? (
						<>
							<BoxButton className='hidden md:block' onClick={() => generateHiraganaList()}>Start</BoxButton>
							<Button className='md:hidden' onClick={() => generateHiraganaList()}>Start</Button>
						</>
					) : (
						<div className='flex items-center flex-grow text-lg md:text-3xl'>
							Please select at least one group
						</div>
					)
				}
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