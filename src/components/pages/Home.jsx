import React from "react";
import { getHiragana } from '../../redux'
import { connect } from "react-redux";
import BoxButton from "../shared/BoxButton";
import GameOverScreen from "../shared/GameOverScreen";
import MainGameScreen from "../shared/MainGameScreen";

const Home = (props) => {
    return (
        <div className="flex flex-grow justify-center items-center"> {
            Object.keys(props.hiraganaReducer.hiraganaInDisplay).length > 0 ? (
                <MainGameScreen />
            ) : (
                <div> {
                        props.hiraganaReducer.isGameOver ? (
                            <GameOverScreen />
                        ) : (
                            <BoxButton onClick={() => props.getHiragana()}>Start</BoxButton>
                        )
                    }
                </div>
            )
        }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        hiraganaReducer: state.hiraganaReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getHiragana: () => dispatch(getHiragana()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
