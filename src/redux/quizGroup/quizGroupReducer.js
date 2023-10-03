import { TOGGLE_QUIZ_GROUP, TOGGLE_QUIZ_GROUP_ALL, quizGroups } from "./quizGroupConstants";

const createQuizGroupObject = (quizGroup) => {
    return {label: quizGroup, selected: 0};
}

const generateQuizGroupList = () => {
    const quizGroupList = [];

    const flattenedQuizGroups = [...quizGroups].flat();

    for (let quizGroup of flattenedQuizGroups) {
        const createdQuizGroup = createQuizGroupObject(quizGroup);

        if (quizGroupList.length === 0) {
            createdQuizGroup.selected = 1;
        }

        quizGroupList.push(createdQuizGroup);
    }

    return quizGroupList;
}

const initiateState = {
    quizGroups: generateQuizGroupList(),
}

const quizGroupReducer = (state = initiateState, action) => {
    switch (action.type) {
        case TOGGLE_QUIZ_GROUP:
            var clonedState = {...state};
            
            clonedState.quizGroups = [...state.quizGroups].map(quizGroup => {
                if (quizGroup.label === action.quizGroup.label) {
                    quizGroup.selected === 0 ? quizGroup.selected = 1 : quizGroup.selected = 0;
                }

                return quizGroup;
            })

            return clonedState;
        case TOGGLE_QUIZ_GROUP_ALL:
            const selectionValue = action.doSelectAll ? 1 : 0;

            var clonedState = {...state};
            
            clonedState.quizGroups = [...clonedState.quizGroups].map((quizGroup, index) => {
                quizGroup.selected = selectionValue;

                return quizGroup;
            })

            return clonedState;
        default:
            return state;
    }
}

export default quizGroupReducer;