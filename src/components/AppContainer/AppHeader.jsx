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
            'shadow z-[2] h-10 w-full px-10 flex justify-between items-center',
            props.colors.APP_HEADER,
        )}>
            <div className='text-lg font-medium uppercase '>
                Japanese Kana Typing Quiz
            </div>
            <div className={classNames(
                'h-full px-3 cursor-pointer flex items-center',
                props.colors.THEME_SWITCH_COLOR
            )} onClick={() => props.switchTheme(props.colorTheme === COLOR_THEMES.LIGHT ? COLOR_THEMES.DARK : COLOR_THEMES.LIGHT)}>
                { props.colorTheme === COLOR_THEMES.LIGHT ? 'Dark Theme' : 'Light Theme'}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colorTheme: state.colorTheme,
        colors: state.colors,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchTheme: (theme) => dispatch(switchTheme(theme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AppHeader);