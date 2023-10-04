import React from "react";
import { connect } from "react-redux";
import GameOverScreen from "../shared/GameOverScreen";
import MainGameScreen from "../shared/MainGameScreen";
import StartUpScreen from "../shared/StartUpScreen";

const Home = (props) => {
    return (
        <div className="flex flex-grow justify-center items-center"> {
            Object.keys(props.gameReducer.characterInDisplay).length > 0 ? (
                <MainGameScreen />
            ) : (
                <> {
                        props.gameReducer.isGameOver ? (
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
        gameReducer: state.gameReducer,
    }
}

export default connect(mapStateToProps) (Home);
