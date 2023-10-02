import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const BoxButton = (props) => {
  return (
    <button className={classNames(
        'border border-gray-500 px-4 py-2 h-[160px] w-[160px] rounded-2xl cursor-pointer text-3xl',
        props.colorThemeReducer.colors.BUTTON,
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

export default connect(mapStateToProps) (BoxButton);