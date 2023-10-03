import { COLOR_THEMES, SWITCH_THEME, THEME_COLORS } from "./colorThemeConstants"

const initialState = {
    colorTheme: COLOR_THEMES.LIGHT,
    colors: THEME_COLORS.LIGHT,
}

const colorThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            let selectedTheme = COLOR_THEMES.LIGHT;
            
            if (action.theme) {
                selectedTheme = action.theme;
            } else {
                selectedTheme = state.colorTheme === COLOR_THEMES.LIGHT ? 
                    COLOR_THEMES.DARK : 
                    COLOR_THEMES.LIGHT
            }

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