import { END_GAME, GET_CHARACTER, QUIT_GAME, SUBMIT_CHARACTER, GENERATE_CHARACTER_LIST, QUIZ_LIST } from "./gameConstants";

const createCharacterObject = (value, romaji) => {
    return {value: value, romaji: romaji, answered: 0, skipped: 0}
}

const handleGeneration = (kanaList, romajiList, selectedQuizGroups) => {
    const characterList = [];

    const characterKeys = Object.keys(kanaList);

    for (let setIndex = 0; setIndex < characterKeys.length; setIndex++) {
        const setKey = characterKeys[setIndex];
        
        if (selectedQuizGroups.includes(setKey)) {
            const characterSet = kanaList[setKey];
            const romajiSet = romajiList[setKey];

            for (let index = 0; index < characterSet.length; index++) {
                const character = characterSet[index];
                const romaji = romajiSet[index];

                const characterObject = createCharacterObject(character, romaji);

                characterList.push(characterObject);
            }
        }
    }

    return characterList;
}

const generateCharacterList = (selectedKanaTypeGroup, selectedQuizGroups) => {
    selectedKanaTypeGroup = [...selectedKanaTypeGroup].map(quizGroup => {
        let label = quizGroup.label;

        if (typeof label === 'object') {
            label = label?.at(0);
        }

        return label;
    })

    selectedQuizGroups = [...selectedQuizGroups].map(quizGroup => {
        let label = quizGroup.label;

        if (typeof label === 'object') {
            label = label?.at(0);
        }

        return label;
    })

    let characterList = [];

    for (let kanaType of selectedKanaTypeGroup) {
        const quizList = QUIZ_LIST[kanaType];
        const generatedCharacterList = handleGeneration(quizList.KANA, quizList.ROMAJI, selectedQuizGroups);
        
        characterList.push(generatedCharacterList);
    }

    characterList = [...characterList].flat();

    return characterList;
}

const initialState = {
    characterList: [],
    characterInDisplay: {},
    score: 0,
    isCorrect: false,
    isGameOver: false,
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_CHARACTER_LIST:
            let selectedKanaTypeGroup = [];
            let selectedQuizGroups = [];

            var quizGroupKeys = Object.keys(action.quizGroups);
            
            for (let index = 0; index < quizGroupKeys.length; index++) {
                const key = quizGroupKeys[index];
            
                if (index === 0) {
                    selectedKanaTypeGroup.push(
                        [...action.quizGroups[key]].filter(quizGroup => {
                            return quizGroup.selected === 1;
                        })
                    )
                } else {
                    selectedQuizGroups.push(
                        [...action.quizGroups[key]].filter(quizGroup => {
                            return quizGroup.selected === 1;
                        })
                    )
                }
            }

            selectedKanaTypeGroup = [...selectedKanaTypeGroup].flat();
            selectedQuizGroups = [...selectedQuizGroups].flat();

            const characterList = generateCharacterList(selectedKanaTypeGroup, selectedQuizGroups);

            const randomIndex = Math.floor(Math.random() * characterList.length);

            return {
                ...state,
                characterList: characterList,
                characterInDisplay: characterList?.at(randomIndex),
                isCorrect: false,
                isGameOver: false,
            }
        case GET_CHARACTER:
            var updatedCharacterList = [...state.characterList];

            if (action.character) {                
                updatedCharacterList = [...state.characterList]?.map(character => {
                    if (character.value === action.character.value) {
                        character.skipped = 1;
                    }

                    return character;
                })
            }

            var availableCharacterList = [...updatedCharacterList].filter(character => {
                return character.answered === 0 && character.skipped === 0;
            })

            if (availableCharacterList.length === 0) {
                updatedCharacterList = [...updatedCharacterList]?.map(character => {
                    character.skipped = 0;
    
                    return character;
                })

                availableCharacterList = [...updatedCharacterList].filter(character => {
                    return character.answered === 0 && character.skipped === 0;
                })

                if (availableCharacterList.length > 1) {
                    availableCharacterList = [...availableCharacterList].filter(character => {
                        return (!action.character || action.character.value !== character.value);
                    })
                }
            }

            if (availableCharacterList.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableCharacterList.length);

                return {
                    ...state,
                    characterList: updatedCharacterList,
                    characterInDisplay: availableCharacterList?.at(randomIndex),
                    isCorrect: false,
                    isGameOver: false,
                }
            } else {
                return {
                    ...state,
                    characterList: updatedCharacterList,
                    characterInDisplay: {},
                    isCorrect: false,
                    isGameOver: true,
                }
            }
        case SUBMIT_CHARACTER:
            var clonedState = {...state};
            
            clonedState.characterList = [...state.characterList]?.map(character => {
                if (character.value === action.character.value) {
                    character.answered = 1;
                }

                return character;
            })

            const isEqualAnswer = action.character.romaji === action.answer.toLowerCase();
            const doesContainAnswer = typeof action.character.romaji === 'object' && 
                                        action.character.romaji.includes(action.answer.toLowerCase());

            if (isEqualAnswer || doesContainAnswer) {
                clonedState.score++;
                clonedState.isCorrect = true;
            }

            return clonedState;
        case QUIT_GAME:
            var clonedState = {...state};
            
            clonedState.characterList = [...state.characterList]?.map(character => {
                character.answered = 0;
                character.skipped = 0;

                return character;
            })

            clonedState.characterInDisplay = {};
            clonedState.score = 0;
            clonedState.isCorrect = false;
            clonedState.isGameOver = false;

            return clonedState;
        case END_GAME:
            var clonedState = {...state};

            clonedState.isCorrect = false;
            
            clonedState.characterList = [...state.characterList]?.map(character => {
                character.answered = 0;
                character.skipped = 0;

                return character;
            })

            clonedState.score = 0;
            clonedState.isCorrect = false;
            clonedState.isGameOver = false;

            return clonedState;
        default:
            return state;
    }
}

export default characterReducer;