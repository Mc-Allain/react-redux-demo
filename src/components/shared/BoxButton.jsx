import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const BoxButton = (props) => {
  return (
    <button className={classNames(
        'border px-4 py-2 h-[110px] w-[110px] lg:h-[160px] lg:w-[160px] text-2xl lg:text-3xl rounded-2xl cursor-pointer',
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

export default connect(mapStateToProps) (BoxButton);