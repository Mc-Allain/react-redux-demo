import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";

const AppBody = (props) => {
    return (
        <div className={classNames(
            'flex-grow flex flex-col items-center w-full p-12',
            props.colorThemeReducer.colors.APP_BODY,
        )}>
            {props.children}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
    }
}

export default connect(mapStateToProps) (AppBody);
