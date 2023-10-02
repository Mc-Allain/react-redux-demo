import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";

const AppBody = (props, { children }) => {
    return (
        <div className={classNames(
            'flex-grow flex flex-col items-center h-full w-full p-12',
            props.colors.APP_BODY,
        )}>
            {children}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        colors: state.colors,
    }
}

export default connect(mapStateToProps) (AppBody);
