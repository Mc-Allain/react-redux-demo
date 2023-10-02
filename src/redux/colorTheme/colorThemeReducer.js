import { SWITCH_THEME } from "./colorThemeConstants"

export const COLOR_THEMES = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
}

const THEME_COLORS = {
    LIGHT: {
        APP_CONTAINER: 'bg-gray-200',
        APP_HEADER: 'bg-gray-200',
        THEME_SWITCH_COLOR: 'hover:bg-gray-300',
        APP_BODY: 'bg-gray-100',
    },
    DARK: {
        APP_CONTAINER: 'bg-gray-700',
        APP_HEADER: 'bg-gray-900 text-white',
        THEME_SWITCH_COLOR: 'hover:bg-gray-700',
        APP_BODY: 'bg-gray-800 text-white',
    }
}

const initialState = {
    colorTheme: COLOR_THEMES.LIGHT,
    colors: THEME_COLORS.LIGHT,
}

const colorThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            const selectedTheme = action.theme;

            const selectedColors = selectedTheme === COLOR_THEMES.LIGHT ? 
                                    THEME_COLORS.LIGHT : 
                                    THEME_COLORS.DARK
                                    
            localStorage.setItem('Theme', selectedTheme);

            return {
                ...state,
                colorTheme: selectedTheme,
                colors: selectedColors,
            };
        default:
            return state;
    }
}

export default colorThemeReducer;