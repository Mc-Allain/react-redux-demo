import React, { useEffect } from 'react'
import { switchTheme } from '../../redux'
import { connect } from 'react-redux'
import { COLOR_THEMES } from '../../redux/colorTheme/colorThemeReducer'
import classNames from 'classnames'

const AppHeader = (props) => {
    useEffect(() => {
        const savedTheme = localStorage.getItem('Theme');

        if (savedTheme && savedTheme === COLOR_THEMES.DARK) {
            props.switchTheme(COLOR_THEMES.DARK);
        }
    }, []);

    return (
        <div className={classNames(
            'z-[2] h-14 w-full px-10 flex justify-between items-center',
            props.colorThemeReducer.colors.APP_HEADER,
        )}>
            <div className='text-2xl font-medium uppercase '>
                Japanese Kana Typing Quiz
            </div>
            <div className={classNames(
                'h-full px-3 cursor-pointer flex items-center text-lg',
                props.colorThemeReducer.colors.THEME_SWITCH_COLOR
            )} onClick={() => props.switchTheme(props.colorThemeReducer.colorTheme === COLOR_THEMES.LIGHT ? COLOR_THEMES.DARK : COLOR_THEMES.LIGHT)}>
                { props.colorThemeReducer.colorTheme === COLOR_THEMES.LIGHT ? 'Dark Theme' : 'Light Theme'}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchTheme: (theme) => dispatch(switchTheme(theme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AppHeader);