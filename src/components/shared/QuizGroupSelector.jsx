import classNames from 'classnames';
import React from 'react'
import { connect } from 'react-redux';
import { toggleQuizGroup, toggleQuizGroupAll } from '../../redux';
import SelectorButton from './SelectorButton';

const QuizGroupSelector = (props) => {

	const isAllGroupSelected = !props.quizGroupReducer.quizGroups.some(quizGroup => quizGroup.selected === 0);

	const getGroupLabel = (group) => {
		let label = group.label;

		if (typeof label === 'object') {
			label = label?.at(1);
		}

		return label;
	}

	return (
		<div className={classNames(
			'flex justify-center flex-wrap gap-2',
			props.className
		)
		}> 
			<SelectorButton 
				className='w-32'
				isSelected={isAllGroupSelected}
				onClick={() => props.toggleQuizGroupAll(!isAllGroupSelected)}
			>
				{isAllGroupSelected ? 'Deselect All' : 'Select All'}
			</SelectorButton>
		{
				props.quizGroupReducer.quizGroups.map((quizGroup, index) => {
					return (
						<SelectorButton 
							key={index}
							isSelected={quizGroup.selected === 1}
							// isDisabled={quizGroup.selected === 1 && selectedCount === 1}
							onClick={() => props.toggleQuizGroup(quizGroup)}
						>
							{getGroupLabel(quizGroup)}
						</SelectorButton>
					)
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		colorThemeReducer: state.colorThemeReducer,
		quizGroupReducer: state.quizGroupReducer,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleQuizGroup: (quizGroup) => dispatch(toggleQuizGroup(quizGroup)),
		toggleQuizGroupAll: (doSelectAll) => dispatch(toggleQuizGroupAll(doSelectAll)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (QuizGroupSelector);