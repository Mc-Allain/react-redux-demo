import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

const Section = (props) => {
  return (
    <div className={classNames(
        'flex flex-col border relative',
        props.colorThemeReducer.colors.SECTION,
        props.className,
    )}>
        {
            props.title ? (
                <div className='absolute -translate-y-[50%] ml-6 px-5 py-2 text-lg font-medium uppercase bg-inherit w-fit'>
                    {props.title}
                </div>
            ) : <></>
        }
        <div className='flex-grow h-4 px-8 py-10'>
            {props.children}
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        colorThemeReducer: state.colorThemeReducer,
    }
}

export default connect(mapStateToProps) (Section);