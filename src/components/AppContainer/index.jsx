import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const AppContainer = (props) => {
    return (
        <div className={classNames(
            'h-screen flex flex-col',
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