import { END_HIRAGANA, GET_HIRAGANA, HIRAGANA_LIST, QUIT_HIRAGANA, SUBMIT_HIRAGANA, ROMAJI, GENERATE_HIRAGANA_LIST } from "./hiraganaConstants";

const createHiraganaObject = (value, romaji) => {
    return {value: value, romaji: romaji, answered: 0, skipped: 0}
}

const generateHiraganaList = (selectedQuizGroups) => {
    selectedQuizGroups = [...selectedQuizGroups].map(quizGroup => {
        let label = quizGroup.label;

        if (typeof label === 'object') {
            label = label?.at(0);
        }

        return label;
    })

    const hiraganaList = [];

    const hiraganaKeys = Object.keys(HIRAGANA_LIST);

    for (let setIndex = 0; setIndex < hiraganaKeys.length; setIndex++) {
        const setKey = hiraganaKeys[setIndex];
        
        if (selectedQuizGroups.includes(setKey)) {
            const hiraganaSet = HIRAGANA_LIST[setKey];
            const romajiSet = ROMAJI[setKey];

            for (let index = 0; index < hiraganaSet.length; index++) {
                const hiragana = hiraganaSet[index];
                const romaji = romajiSet[index];

                const hiraganaObject = createHiraganaObject(hiragana, romaji);

                hiraganaList.push(hiraganaObject);
            }
        }
    }

    return hiraganaList;
}

const initialState = {
    // hiraganaList: [createHiraganaObject(HIRAGANA_LIST.D[1], ROMAJI.D[1])],
    hiraganaList: [],
    hiraganaInDisplay: {},
    score: 0,
    isCorrect: false,
    isGameOver: false,
}

const hiraganaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_HIRAGANA_LIST:
            const selectedQuizGroups = [...action.quizGroups].filter(quizGroup => {
                return quizGroup.selected === 1;
            })

            const hiraganaList = generateHiraganaList(selectedQuizGroups);

            const randomIndex = Math.floor(Math.random() * hiraganaList.length);

            return {
                ...state,
                hiraganaList: hiraganaList,
                hiraganaInDisplay: hiraganaList?.at(randomIndex),
                isCorrect: false,
                isGameOver: false,
            }
        case GET_HIRAGANA:
            var updatedHiraganaList = [...state.hiraganaList];

            if (action.hiragana) {                
                updatedHiraganaList = [...state.hiraganaList]?.map(hiragana => {
                    if (hiragana.value === action.hiragana.value) {
                        hiragana.skipped = 1;
                    }

                    return hiragana;
                })
            }

            var availableHiraganaList = [...updatedHiraganaList].filter(hiragana => {
                return hiragana.answered === 0 && hiragana.skipped === 0;
            })

            if (availableHiraganaList.length === 0) {
                updatedHiraganaList = [...updatedHiraganaList]?.map(hiragana => {
                    hiragana.skipped = 0;
    
                    return hiragana;
                })

                availableHiraganaList = [...updatedHiraganaList].filter(hiragana => {
                    return hiragana.answered === 0 && hiragana.skipped === 0;
                })

                if (availableHiraganaList.length > 1) {
                    availableHiraganaList = [...availableHiraganaList].filter(hiragana => {
                        return (!action.hiragana || action.hiragana.value !== hiragana.value);
                    })
                }
            }

            if (availableHiraganaList.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableHiraganaList.length);

                return {
                    ...state,
                    hiraganaList: updatedHiraganaList,
                    hiraganaInDisplay: availableHiraganaList?.at(randomIndex),
                    isCorrect: false,
                    isGameOver: false,
                }
            } else {
                return {
                    ...state,
                    hiraganaList: updatedHiraganaList,
                    hiraganaInDisplay: {},
                    isCorrect: false,
                    isGameOver: true,
                }
            }
        case SUBMIT_HIRAGANA:
            var clonedState = {...state};
            
            clonedState.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                if (hiragana.value === action.hiragana.value) {
                    hiragana.answered = 1;
                }

                return hiragana;
            })

            const isEqualAnswer = action.hiragana.romaji === action.answer.toLowerCase();
            const doesContainAnswer = typeof action.hiragana.romaji === 'object' && 
                                        action.hiragana.romaji.includes(action.answer.toLowerCase());

            if (isEqualAnswer || doesContainAnswer) {
                clonedState.score++;
                clonedState.isCorrect = true;
            }

            return clonedState;
        case QUIT_HIRAGANA:
            var clonedState = {...state};
            
            clonedState.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                hiragana.answered = 0;
                hiragana.skipped = 0;

                return hiragana;
            })

            clonedState.hiraganaInDisplay = {};
            clonedState.score = 0;
            clonedState.isCorrect = false;
            clonedState.isGameOver = false;

            return clonedState;
        case END_HIRAGANA:
            var clonedState = {...state};

            clonedState.isCorrect = false;
            
            clonedState.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                hiragana.answered = 0;
                hiragana.skipped = 0;

                return hiragana;
            })

            clonedState.score = 0;
            clonedState.isCorrect = false;
            clonedState.isGameOver = false;

            return clonedState;
        default:
            return state;
    }
}

export default hiraganaReducer;