import { END_HIRAGANA, GENERATE_HIRAGANA_LIST, GET_HIRAGANA, QUIT_HIRAGANA, SUBMIT_HIRAGANA } from "./hiraganaConstants"

export const generateHiraganaList = (quizGroups) => {
    return {
        type: GENERATE_HIRAGANA_LIST,
        quizGroups: quizGroups,
    }
}

export const getHiragana = (hiragana) => {
    return {
        type: GET_HIRAGANA,
        hiragana: hiragana,
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