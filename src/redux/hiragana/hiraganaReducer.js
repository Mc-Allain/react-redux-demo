import { END_HIRAGANA, GET_HIRAGANA, QUIT_HIRAGANA, SUBMIT_HIRAGANA } from "./hiraganaConstants";

const initialState = {
    hiraganaList: [
        {value: 'あ', romaji: 'a', answered: 0},
        {value: 'い', romaji: 'i', answered: 0},
        {value: 'う', romaji: 'u', answered: 0},
        {value: 'え', romaji: 'e', answered: 0},
        {value: 'お', romaji: 'o', answered: 0},

        {value: 'か', romaji: 'ka', answered: 0},
        {value: 'き', romaji: 'ki', answered: 0},
        {value: 'く', romaji: 'ku', answered: 0},
        {value: 'け', romaji: 'ke', answered: 0},
        {value: 'こ', romaji: 'ko', answered: 0},

        {value: 'さ', romaji: 'sa', answered: 0},
        {value: 'し', romaji: 'shi', answered: 0},
        {value: 'す', romaji: 'su', answered: 0},
        {value: 'せ', romaji: 'se', answered: 0},
        {value: 'そ', romaji: 'so', answered: 0},

        {value: 'た', romaji: 'ta', answered: 0},
        {value: 'ち', romaji: 'chi', answered: 0},
        {value: 'つ', romaji: 'tsu', answered: 0},
        {value: 'て', romaji: 'te', answered: 0},
        {value: 'と', romaji: 'to', answered: 0},

        {value: 'な', romaji: 'na', answered: 0},
        {value: 'に', romaji: 'ni', answered: 0},
        {value: 'ぬ', romaji: 'nu', answered: 0},
        {value: 'ね', romaji: 'ne', answered: 0},
        {value: 'の', romaji: 'no', answered: 0},
        {value: 'ん', romaji: 'n', answered: 0},

        {value: 'は', romaji: 'ha', answered: 0},
        {value: 'ひ', romaji: 'hi', answered: 0},
        {value: 'ふ', romaji: 'hu', answered: 0},
        {value: 'へ', romaji: 'he', answered: 0},
        {value: 'ほ', romaji: 'ho', answered: 0},

        {value: 'ま', romaji: 'ma', answered: 0},
        {value: 'み', romaji: 'mu', answered: 0},
        {value: 'む', romaji: 'mu', answered: 0},
        {value: 'め', romaji: 'me', answered: 0},
        {value: 'む', romaji: 'mo', answered: 0},

        {value: 'ら', romaji: 'ra', answered: 0},
        {value: 'り', romaji: 'ri', answered: 0},
        {value: 'る', romaji: 'ru', answered: 0},
        {value: 'れ', romaji: 're', answered: 0},
        {value: 'ろ', romaji: 'ro', answered: 0},
        
        {value: 'や', romaji: 'ya', answered: 0},
        {value: 'ゆ', romaji: 'yu', answered: 0},
        {value: 'よ', romaji: 'yo', answered: 0},
        
        {value: 'わ', romaji: 'wa', answered: 0},
        {value: 'を', romaji: 'wo', answered: 0},
    ],
    hiraganaInDisplay: {},
    score: 0,
    isCorrect: false,
    isFinished: false,
}

const hiraganaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HIRAGANA:
            const availableHiraganaList = [...state.hiraganaList].filter(hiragana => {
                return hiragana.answered === 0;
            })

            if (availableHiraganaList.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableHiraganaList.length);

                return {
                    ...state,
                    hiraganaInDisplay: availableHiraganaList?.at(randomIndex),
                    isCorrect: false,
                    isFinished: false,
                }
            } else {
                return {
                    ...state,
                    hiraganaInDisplay: {},
                    isCorrect: false,
                    isFinished: true,
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

            if (action.hiragana.romaji === action.answer.toLowerCase()) {
                clonedState.score++;
                clonedState.isCorrect = true;
            }

            return clonedState;
        case QUIT_HIRAGANA:
            const clonedState2 = {...state};

            clonedState2.isCorrect = false;
            
            clonedState2.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                hiragana.answered = 0;
                return hiragana;
            })

            clonedState2.score = 0;
            clonedState2.isCorrect = false;
            clonedState2.isFinished = false;

            return clonedState2;
        case END_HIRAGANA:
            const clonedState3 = {...state};

            clonedState3.isCorrect = false;
            
            clonedState3.hiraganaList = [...state.hiraganaList]?.map(hiragana => {
                hiragana.answered = 0;
                return hiragana;
            })

            clonedState3.score = 0;
            clonedState3.isCorrect = false;
            clonedState3.isFinished = false;

            return clonedState3;
        default:
            return state;
    }
}

export default hiraganaReducer;