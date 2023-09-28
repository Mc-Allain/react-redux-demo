import React from "react";

const AppBody = ({ children }) => {
    return (
        <div className="flex-grow flex flex-col items-center h-full w-[850px] bg-gray-800 p-12">
            {children}
        </div>
    );
};

export default AppBody;
