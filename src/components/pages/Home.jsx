import React from "react";
import { connect } from "react-redux";
import GameOverScreen from "../shared/GameOverScreen";
import MainGameScreen from "../shared/MainGameScreen";
import StartUpScreen from "../shared/StartUpScreen";

const Home = (props) => {
    return (
        <div className="flex flex-grow justify-center items-center"> {
            Object.keys(props.hiraganaReducer.hiraganaInDisplay).length > 0 ? (
                <MainGameScreen />
            ) : (
                <> {
                        props.hiraganaReducer.isGameOver ? (
                            <GameOverScreen />
                        ) : (
                            <StartUpScreen />
                        )
                    }
                </>
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

export default connect(mapStateToProps) (Home);
