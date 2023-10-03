import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { COLOR_THEMES } from "../../redux/colorTheme/colorThemeConstants";
import { connect } from "react-redux";
import { switchTheme } from "../../redux";

const DarkModeIconToggle = (props) => {
	const switchTheme = (theme) => {
		props.switchTheme(theme);
	}
	
    useEffect(() => {
        const savedTheme = localStorage.getItem('Theme');

        if (savedTheme && savedTheme === COLOR_THEMES.DARK) {
            switchTheme(COLOR_THEMES.DARK);
        }
    }, []);

	return (
		<FontAwesomeIcon
			icon={props.colorThemeReducer.colorTheme === COLOR_THEMES.LIGHT ? faMoon : faSun}
			className={classNames(
				"text-xl md:text-2xl p-2 cursor-pointer",
				props.colorThemeReducer.colors.THEME_TOGGLE_ICON
			)}
			onClick={() => {
				switchTheme()
			}}
		/>
	);
};

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

export default connect(mapStateToProps, mapDispatchToProps) (DarkModeIconToggle);
