import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const Button = (props) => {
  return (
    <button className={classNames(
        'border border-gray-500 text-xl md:text-3xl px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl cursor-pointer',
        props.colorThemeReducer.colors.BUTTON,
        props.className,
    )}
        onClick={() => props.onClick()}
    >
        {props.children}
    </button>
  )
}

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
    }
}

export default connect(mapStateToProps) (Button);