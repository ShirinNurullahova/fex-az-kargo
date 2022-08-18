import React, { useState } from 'react'
import '../DropDown2/DropDown2.css'
const DropDown2 = ({ selected2, setSelected2 }) => {
    const [isActive2, setIsActive2] = useState(false)
    const options2 = ["maye", "sənəd"]
    return (
        <div className='dropdown2'>
            <div className='dropdown-btn2' onClick={(e) => setIsActive2(!isActive2)}>{selected2}</div>

            {isActive2 && (
                <div className='dropdown-content2'>

                    {options2.map(option2 => {
                        return (

                            <div className='dropdown-item2' onClick={(e) => {

                                setSelected2(option2)
                                setIsActive2(false)

                            }

                            }>
                                {option2}
                            </div>

                        )

                    })}




                </div>
            )}




        </div>
    )
}

export default DropDown2