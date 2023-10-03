export const SWITCH_THEME = 'SWITCH_THEME';

export const COLOR_THEMES = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
}

export const THEME_COLORS = {
    LIGHT: {
        APP_CONTAINER: 'bg-gray-200',
        APP_HEADER: 'bg-gray-100 text-black border-gray-300',
        APP_BODY: 'bg-gray-200 text-black',
		THEME_TOGGLE_ICON: 'text-gray-500 hover:text-blue-400',
        BUTTON: 'bg-gray-200 hover:bg-gray-100 hover:text-gray-800 border-gray-400 hover:border-gray-500',
        INPUT: 'bg-gray-200 border-gray-500',
        SECTION: 'bg-gray-200 text-black border-gray-600',
        GROUP_SELECTOR: 'border-gray-500',
        GROUP_SELECTOR_HOVER: 'hover:bg-gray-100',
        GROUP_SELECTOR_SELECTED: 'bg-blue-500 text-white',
        GROUP_SELECTOR_SELECTED_HOVER: 'hover:bg-blue-600 cursor-pointer',
    },
    DARK: {
        APP_CONTAINER: 'bg-gray-700',
        APP_HEADER: 'bg-gray-900 text-white border-gray-600',
        APP_BODY: 'bg-gray-900 text-white',
		THEME_TOGGLE_ICON: 'text-gray-400 hover:text-yellow-200 ',
        BUTTON: 'bg-gray-900 hover:bg-gray-800 hover:text-gray-200 border-gray-500 hover:border-gray-400',
        INPUT: 'bg-gray-900 border-gray-400',
        SECTION: 'bg-gray-900 text-white border-gray-400',
        GROUP_SELECTOR: 'border-gray-500',
        GROUP_SELECTOR_HOVER: 'hover:bg-gray-700',
        GROUP_SELECTOR_SELECTED: 'bg-blue-800 text-white',
        GROUP_SELECTOR_SELECTED_HOVER: 'hover:bg-blue-600',
    }
}