import { TOGGLE_QUIZ_GROUP, TOGGLE_QUIZ_GROUP_ALL, kanaTypeGroups, kanaGroups, vocabularyGroups } from "./quizGroupConstants";

const createQuizGroupObject = (quizGroup) => {
    return {label: quizGroup, selected: 0};
}

const generateQuizGroupList = (quizGroups) => {
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
    quizGroups: {
        kanaTypeGroups: generateQuizGroupList(kanaTypeGroups),
        kanaGroups: generateQuizGroupList(kanaGroups),
        vocabularyGroups: generateQuizGroupList(vocabularyGroups),
    }
}

const quizGroupReducer = (state = initiateState, action) => {
    switch (action.type) {
        case TOGGLE_QUIZ_GROUP:
            var clonedState = {...state};
        
            var stateKeys = Object.keys(clonedState.quizGroups);
        
            for (let index = 0; index < stateKeys.length; index++) {
                const key = stateKeys[index];

                clonedState.quizGroups[key] = [...clonedState.quizGroups[key]].map(quizGroup => {
                    if (quizGroup.label === action.quizGroup.label) {
                        quizGroup.selected === 0 ? quizGroup.selected = 1 : quizGroup.selected = 0;
                    }
    
                    return quizGroup;
                })
            }

            return clonedState;
        case TOGGLE_QUIZ_GROUP_ALL:
            const selectionValue = action.doSelectAll ? 1 : 0;

            var clonedState = {...state};
        
            var stateKeys = Object.keys(clonedState.quizGroups);
        
            for (let index = 0; index < stateKeys.length; index++) {
                const key = stateKeys[index];

                clonedState.quizGroups[key] = [...clonedState.quizGroups[key]].map(quizGroup => {
                    const inGroup = [...action.quizGroups].some(selectedQuizGroup => {
                        return quizGroup.label === selectedQuizGroup.label;
                    })
                    
                    if (inGroup) {
                        quizGroup.selected = selectionValue;
                    }
    
                    return quizGroup;
                })
            }

            return clonedState;
        default:
            return state;
    }
}

export default quizGroupReducer;