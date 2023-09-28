import React from 'react'

const AppContainer = ({ children }) => {
    return (
        <div className='min-h-[100vh] bg-gray-700 text-white flex flex-col items-center'>
            {children}
        </div>
    )
}

export default AppContainer