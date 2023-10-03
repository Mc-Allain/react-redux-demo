import { TOGGLE_QUIZ_GROUP, TOGGLE_QUIZ_GROUP_ALL } from "./quizGroupConstants"

export const toggleQuizGroup = (quizGroup) => {
    return {
        type: TOGGLE_QUIZ_GROUP,
        quizGroup: quizGroup,
    }
}

export const toggleQuizGroupAll = (doSelectAll) => {
    return {
        type: TOGGLE_QUIZ_GROUP_ALL,
        doSelectAll: doSelectAll,
    }
}