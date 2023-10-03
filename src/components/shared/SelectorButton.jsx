import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const SelectorButton = (props) => {
  return (
    <div
        className={classNames(
            'min-w-[80px] flex-grow border px-4 py-1 text-xl rounded-lg',
            props.colorThemeReducer.colors.GROUP_SELECTOR,{
              [`${props.colorThemeReducer.colors.GROUP_SELECTOR_HOVER} cursor-pointer`]: !props.isSelected && !props.isDisabled,
              [`${props.colorThemeReducer.colors.GROUP_SELECTOR_SELECTED}`]: props.isSelected,
              [`${props.colorThemeReducer.colors.GROUP_SELECTOR_SELECTED_HOVER} cursor-pointer`]: props.isSelected && !props.isDisabled,
            },
            props.className,
        )}
        onClick={() => {
          if (!props.isDisabled) {
            props.onClick();
          }
        }}
    >
        {props.children}
    </div>
  )
}

const mapStateToProps = state => {
	return {
		colorThemeReducer: state.colorThemeReducer,
	}
}


export default connect(mapStateToProps) (SelectorButton);