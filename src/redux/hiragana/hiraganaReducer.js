import { END_HIRAGANA, GET_HIRAGANA, HIRAGANA_LIST, QUIT_HIRAGANA, SUBMIT_HIRAGANA, ROMAJI } from "./hiraganaConstants";

const createHiraganaObject = (value, romaji) => {
    return {value: value, romaji: romaji, answered: 0, skipped: 0}
}

const generateHiraganaList = () => {
    const hiraganaList = [];

    const hiraganaKeys = Object.keys(HIRAGANA_LIST);

    for (let setIndex = 0; setIndex < hiraganaKeys.length; setIndex++) {
        const setKey = hiraganaKeys[setIndex];
        const hiraganaSet = HIRAGANA_LIST[setKey];
        const romajiSet = ROMAJI[setKey];

        for (let index = 0; index < hiraganaSet.length; index++) {
            const hiragana = hiraganaSet[index];
            const romaji = romajiSet[index];

            const hiraganaObject = createHiraganaObject(hiragana, romaji);

            hiraganaList.push(hiraganaObject);
        }
    }

    return hiraganaList;
}

const initialState = {
    // hiraganaList: [createHiraganaObject(HIRAGANA_LIST.D[1], ROMAJI.D[1])],
    hiraganaList: generateHiraganaList(),
    hiraganaInDisplay: {},
    score: 0,
    isCorrect: false,
    isGameOver: false,
}

const hiraganaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HIRAGANA:
            let updatedHiraganaList = [...state.hiraganaList];

            if (action.hiragana) {                
                updatedHiraganaList = [...state.hiraganaList]?.map(hiragana => {
                    if (hiragana.value === action.hiragana.value) {
                        hiragana.skipped = 1;
                    }

                    return hiragana;
                })
            }

            let availableHiraganaList = [...updatedHiraganaList].filter(hiragana => {
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
            const clonedState = {...state};
            
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
            const clonedState2 = {...state};
            
            clonedState2.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                hiragana.answered = 0;
                hiragana.skipped = 0;

                return hiragana;
            })

            clonedState2.hiraganaInDisplay = {};
            clonedState2.score = 0;
            clonedState2.isCorrect = false;
            clonedState2.isGameOver = false;

            return clonedState2;
        case END_HIRAGANA:
            const clonedState3 = {...state};

            clonedState3.isCorrect = false;
            
            clonedState3.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                hiragana.answered = 0;
                hiragana.skipped = 0;

                return hiragana;
            })

            clonedState3.score = 0;
            clonedState3.isCorrect = false;
            clonedState3.isGameOver = false;

            return clonedState3;
        default:
            return state;
    }
}

export default hiraganaReducer;