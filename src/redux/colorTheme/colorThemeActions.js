import { SWITCH_THEME } from "./colorThemeConstants"

export const switchTheme = (theme) => {
    return {
        type: SWITCH_THEME,
        theme: theme,
    }
}