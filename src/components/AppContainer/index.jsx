import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const AppContainer = (props) => {
    return (
        <div className={classNames(
            'min-h-[100vh] flex flex-col items-center',
            props.colorThemeReducer.colors.APP_CONTAINER,
        )}>
            {props.children}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
    }
}

export default connect(mapStateToProps) (AppContainer);