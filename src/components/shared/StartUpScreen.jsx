import React from 'react'
import BoxButton from './BoxButton'
import { connect } from 'react-redux'
import { generateCharacterList } from '../../redux'
import QuizGroupSelector from './QuizGroupSelector'
import Button from './Button'
import Section from './Section'
import classNames from 'classnames'

const StartUpScreen = (props) => {
	const quizGroups = props.quizGroupReducer.quizGroups;

	let flattenedKanaTypeGroup = [];
	let flattenedQuizGroups = [];

	const stateKeys = Object.keys(quizGroups);

	for (let index = 0; index < stateKeys.length; index++) {
		const key = stateKeys[index];
		
		if (index === 0) {
			flattenedKanaTypeGroup.push(quizGroups[key]);
		} else {
			flattenedQuizGroups.push(quizGroups[key]);
		}
	}

	flattenedKanaTypeGroup = [...flattenedKanaTypeGroup].flat();
	flattenedQuizGroups = [...flattenedQuizGroups].flat();

	const selectedKanaTypeGroupCount = [...flattenedKanaTypeGroup].filter(kanaType => {
		return kanaType.selected === 1;
	}).length;

	const selectedQuizGroupsCount = [...flattenedQuizGroups].filter(quizGroup => {
		return quizGroup.selected === 1;
	}).length;

	const generateCharacterList = () => {
		props.generateCharacterList(quizGroups);
	}

	return (
		<div className="flex flex-col items-center h-full py-8 gap-6">
			<div className='flex flex-col lg:flex-row gap-7 lg:gap-10 mx-10 lg:mx-20 h-fit'>
				<Section title={'Kana Type'} className={classNames(
						'flex-grow min-w-[275px]', {
							'border-yellow-500 border-2': selectedKanaTypeGroupCount === 0,
						}
					)}
				>
					<QuizGroupSelector quizGroups={quizGroups.kanaTypeGroups} />
				</Section>
				<Section title={'Kana'} className={classNames(
						'flex-grow min-w-[275px]', {
							'border-yellow-500 border-2': selectedQuizGroupsCount === 0,
						}
					)}
				>
					<QuizGroupSelector quizGroups={quizGroups.kanaGroups} />
				</Section>
				<Section title={'Kana Vocabulary'} className={classNames(
						'flex-grow min-w-[275px]', {
							'border-yellow-500 border-2': selectedQuizGroupsCount === 0,
						}
					)}
				>
					<QuizGroupSelector quizGroups={quizGroups.vocabularyGroups} />
				</Section>
			</div>
			<div className='flex items-center lg:flex-grow'>
				{
					selectedQuizGroupsCount > 0 && selectedKanaTypeGroupCount > 0 ? (
						<>
							<BoxButton className='hidden lg:block' onClick={() => generateCharacterList()}>Start</BoxButton>
							<Button className='lg:hidden' onClick={() => generateCharacterList()}>Start</Button>
						</>
					) : (
						<div className='flex items-center flex-grow text-lg lg:text-2xl'>
							Please select at least one on both kana type and kana group
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
		generateCharacterList: (quizGroups) => dispatch(generateCharacterList(quizGroups)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartUpScreen);