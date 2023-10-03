import classNames from "classnames";
import React from "react";
import { connect } from "react-redux";

const AppBody = (props) => {
    return (
		<div className="grow w-full flex justify-center overflow-y-auto">
            <div className={classNames(
                'flex min-h-full h-fit w-full',
                props.colorThemeReducer.colors.APP_BODY,
            )}>
                {props.children}
            </div>
		</div>
    );
};

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
    }
}

export default connect(mapStateToProps) (AppBody);
