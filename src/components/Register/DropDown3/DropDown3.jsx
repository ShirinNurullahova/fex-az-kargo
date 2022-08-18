import React, { useState } from 'react'
import '../DropDown3/DropDown3.css'

const DropDown3 = ({ selected3, setSelected3 }) => {
    const [isActive3, setIsActive3] = useState(false)
    const options3 = ["kişi", "qadın"];


    return (
        <div className='dropdown3'>
            <div className='dropdown-btn3' onClick={(e) => setIsActive3(!isActive3)}>{selected3}</div>

            {isActive3 && (
                <div className='dropdown-content3'>

                    {options3.map(option3 => {
                        return (

                            <div className='dropdown-item3' onClick={(e) => {

                                setSelected3(option3)
                                setIsActive3(false)

                            }

                            }>
                                {option3}
                            </div>

                        )

                    })}




                </div>
            )}




        </div>
    )
}

export default DropDown3