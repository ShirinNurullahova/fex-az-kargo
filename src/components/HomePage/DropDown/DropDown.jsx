import React, { useState } from 'react'
import '../DropDown/DropDown.css'
const DropDown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false)
    const options = ["Italia", "Fransa", "Almania"]
    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>{selected}</div>

            {isActive && (
                <div className='dropdown-content'>

                    {options.map(option => {
                        return (

                            <div className='dropdown-item' onClick={(e) => {

                                setSelected(option)
                                setIsActive(false)

                            }

                            }>
                                {option}
                            </div>

                        )

                    })}




                </div>
            )}




        </div>
    )
}

export default DropDown