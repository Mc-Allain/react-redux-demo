import { END_HIRAGANA, GET_HIRAGANA, QUIT_HIRAGANA, SUBMIT_HIRAGANA } from "./hiraganaConstants"

export const getHiragana = () => {
    return {
        type: GET_HIRAGANA,
    }
}

export const submitHiragana = (hiragana, answer) => {
    return {
        type: SUBMIT_HIRAGANA,
        hiragana: hiragana,
        answer: answer,
    }
}

export const quitHiragana = () => {
    return {
        type: QUIT_HIRAGANA,
    }
}

export const endHiragana = () => {
    return {
        type: END_HIRAGANA,
    }
}