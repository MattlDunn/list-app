import React, { useState, useEffect } from "react"

export default function TodoListItem({ user }) {

    useEffect(() => {
        
    }, [])

    return (
        <div className="w-1/4 h-full bg-gray-50 divide-y-2 divide-black divide-solid">
            <div className="text-center text-2xl">
                {user}
            </div>
            <div>
                <span className="text-lg">Recent Lists</span>
                <div>
                    
                </div>
            </div>
        </div>
    )
}