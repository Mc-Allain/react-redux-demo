import React, { useEffect, useRef } from "react";
import { getHiragana, submitHiragana, quitHiragana, endHiragana } from '../../redux'
import { connect } from "react-redux";
import BoxButton from "../shared/BoxButton";
import Button from "../shared/Button";
import classNames from "classnames";

const Home = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (props.hiraganaReducer.isCorrect) {
            props.getHiragana();
            inputRef.current.value = '';
        }
    }, [props.hiraganaReducer.isCorrect]);

    return (
        <div className="w-full flex flex-grow">
            <div className="flex flex-grow justify-center items-center"> {
                Object.keys(props.hiraganaReducer.hiraganaInDisplay).length > 0 ? (
                    <div className="flex flex-col items-center">
                        <div className="text-4xl">
                            {'Score: ' + props.hiraganaReducer.score}
                        </div>
                        <div className="text-[170px] my-16">
                            {props.hiraganaReducer.hiraganaInDisplay.value}
                        </div>
                        <input type="text" ref={inputRef} className={classNames(
                            'text-5xl px-4 py-2 text-center border',
                            props.colorThemeReducer.colors.INPUT,
                        )}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    props.submitHiragana(props.hiraganaReducer.hiraganaInDisplay, inputRef.current.value);
                                }
                            }}
                        />
                        <Button className={'mt-10'} onClick={() => props.quitHiragana()}>Quit</Button>
                    </div>
                ) : (
                    <div> {
                            props.hiraganaReducer.isFinished ? (
                                <div className="flex flex-col items-center">
                                    <div className="text-5xl">Congratulations</div>
                                    <div className="text-2xl mt-3">
                                        {'Your Final Score: ' + props.hiraganaReducer.score}
                                    </div>
                                    <Button className={'mt-16 w-fit'} onClick={() => props.endHiragana()}>Finish</Button>
                                </div>
                            ) : (
                                <BoxButton onClick={() => props.getHiragana()}>Start</BoxButton>
                            )
                        }
                    </div>
                )
            }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
        hiraganaReducer: state.hiraganaReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getHiragana: () => dispatch(getHiragana()),
        submitHiragana: (hiragana, answer) => dispatch(submitHiragana(hiragana, answer)),
        quitHiragana: () => dispatch(quitHiragana()),
        endHiragana: () => dispatch(endHiragana()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
