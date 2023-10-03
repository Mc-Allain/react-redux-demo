import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const BoxButton = (props) => {
  return (
    <button className={classNames(
        'border px-4 py-2 h-[110px] w-[110px] md:h-[160px] md:w-[160px] text-2xl md:text-3xl rounded-2xl cursor-pointer ',
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