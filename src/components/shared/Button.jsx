import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const Button = (props) => {
  return (
    <button className={classNames(
        'border border-gray-500 px-8 py-4 rounded-2xl cursor-pointer text-3xl',
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