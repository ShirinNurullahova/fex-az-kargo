import React, { useState } from 'react'
import '../DropDown4/DropDown4.css'

const DropDown4 = ({ selected4, setSelected4 }) => {
    const [isActive4, setIsActive4] = useState(false)
    const options4 = ["Bakı", "Sumqayıt"];


    return (
        <div className='dropdown4'>
            <div className='dropdown-btn4' onClick={(e) => setIsActive4(!isActive4)}>{selected4}</div>

            {isActive4 && (
                <div className='dropdown-content4'>

                    {options4.map(option4 => {
                        return (

                            <div className='dropdown-item4' onClick={(e) => {

                                setSelected4(option4)
                                setIsActive4(false)

                            }

                            }>
                                {option4}
                            </div>

                        )

                    })}




                </div>
            )}




        </div>
    )
}

export default DropDown4