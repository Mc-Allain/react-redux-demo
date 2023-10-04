import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { getCharacter, quitGame, submitCharacter } from '../../redux';
import classNames from 'classnames';
import Button from './Button';

const MainGameScreen = (props) => {
	const inputRef = useRef(null);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const characterInDisplay = props.gameReducer.characterInDisplay;

    const isCorrect = props.gameReducer.isCorrect;

    const getCharacter = (characterInDisplay) => {
        props.getCharacter(characterInDisplay);
    }

    useEffect(() => {
        if (isCorrect) {
            getCharacter();
            inputRef.current.value = '';
        }

        inputRef.current.focus();
    }, [isCorrect]);

    const inInclusiveBetween = (value, min, max) => {
        return value >= min && value <= max;
    }

    return (
        <div className="flex flex-col items-center mx-7">
            <div className="text-2xl lg:text-4xl">
                {'Score: ' + props.gameReducer.score + '/' + props.gameReducer.characterList.length}
            </div>
            <div className={classNames(
                'my-16', {
                    'text-8xl lg:text-9xl': inInclusiveBetween(characterInDisplay.value.length, 1, 3),
                    'text-5xl lg:text-8xl': inInclusiveBetween(characterInDisplay.value.length, 4, 6),
                    'text-4xl lg:text-5xl': inInclusiveBetween(characterInDisplay.value.length, 7, 10),
                    'text-3xl lg:text-4xl': inInclusiveBetween(characterInDisplay.value.length, 11, characterInDisplay.value.length),
                    // 'text-red-600': !props.gameReducer.isCorrect && isSubmitted,
                }
            )}>
                {characterInDisplay.value}
            </div>
            <input type="text" ref={inputRef} className={classNames(
                'text-2xl lg:text-5xl px-4 py-2 text-center w-full border w-64 lg:w-96',
                props.colorThemeReducer.colors.INPUT, {
                    // 'text-red-600': !props.gameReducer.isCorrect && isSubmitted,
                }
            )}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        props.submitCharacter(props.gameReducer.characterInDisplay, inputRef.current.value);
                        // setIsSubmitted(true);
                    } else if (e.key === 'Escape') {
                        getCharacter(props.gameReducer.characterInDisplay);
                    }
                }}

                // onChange={() => {
                //     if (isSubmitted) {
                //         setIsSubmitted(false);
                //     }
                // }}
            />
            <div className='flex gap-5 mt-10'>
                <Button onClick={() => props.quitGame()}>Quit</Button>
                <Button onClick={() => getCharacter(props.gameReducer.characterInDisplay)}>Next (ESC)</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
        gameReducer: state.gameReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacter: (character) => dispatch(getCharacter(character)),
        submitCharacter: (character, answer) => dispatch(submitCharacter(character, answer)),
        quitGame: () => dispatch(quitGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainGameScreen);