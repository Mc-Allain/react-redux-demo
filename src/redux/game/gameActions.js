import { END_GAME, GENERATE_CHARACTER_LIST, GET_CHARACTER, QUIT_GAME, SUBMIT_CHARACTER } from "./gameConstants"

export const generateCharacterList = (quizGroups) => {
    return {
        type: GENERATE_CHARACTER_LIST,
        quizGroups: quizGroups,
    }
}

export const getCharacter = (character) => {
    return {
        type: GET_CHARACTER,
        character: character,
    }
}

export const submitCharacter = (character, answer) => {
    return {
        type: SUBMIT_CHARACTER,
        character: character,
        answer: answer,
    }
}

export const quitGame = () => {
    return {
        type: QUIT_GAME,
    }
}

export const endGame = () => {
    return {
        type: END_GAME,
    }
}