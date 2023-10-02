import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const AppContainer = ({ children }) => {
    return (
        <div className={classNames(
            'min-h-[100vh] flex flex-col items-center',
        )}>
            {children}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        colors: state.colors,
    }
}

export default connect(mapStateToProps) (AppContainer);