import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { getHiragana, quitHiragana, submitHiragana } from '../../redux';
import classNames from 'classnames';
import Button from './Button';

const MainGameScreen = (props) => {
	const inputRef = useRef(null);

    const isCorrect = props.hiraganaReducer.isCorrect;

    const getHiragana = (hiraganaInDisplay) => {
        props.getHiragana(hiraganaInDisplay);
    }

    useEffect(() => {
        if (isCorrect) {
            getHiragana();
            inputRef.current.value = '';
        }

        inputRef.current.focus();
    }, [isCorrect]);

    return (
        <div className="flex flex-col items-center mx-7">
            <div className="text-2xl md:text-4xl">
                {'Score: ' + props.hiraganaReducer.score + '/' + props.hiraganaReducer.hiraganaList.length}
            </div>
            <div className="text-8xl md:text-[170px] my-16">
                {props.hiraganaReducer.hiraganaInDisplay.value}
            </div>
            <input type="text" ref={inputRef} className={classNames(
                ' text-2xl md:text-5xl px-4 py-2 text-center border',
                props.colorThemeReducer.colors.INPUT,
            )}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        props.submitHiragana(props.hiraganaReducer.hiraganaInDisplay, inputRef.current.value);
                    } else if (e.key === 'Escape') {
                        getHiragana(props.hiraganaReducer.hiraganaInDisplay);
                    }
                }}
            />
            <div className='flex gap-5 mt-10'>
                <Button onClick={() => props.quitHiragana()}>Quit</Button>
                <Button onClick={() => getHiragana(props.hiraganaReducer.hiraganaInDisplay)}>Next (ESC)</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
        hiraganaReducer: state.hiraganaReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getHiragana: (hiragana) => dispatch(getHiragana(hiragana)),
        submitHiragana: (hiragana, answer) => dispatch(submitHiragana(hiragana, answer)),
        quitHiragana: () => dispatch(quitHiragana()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainGameScreen);