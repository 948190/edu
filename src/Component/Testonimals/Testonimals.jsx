import React from 'react'
import './Testonimals.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testonimals = () => {
  return (
    <div className='testonimals'>
        {/* <img src={next_icon} alt="" className='next-btn ' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn ' onClick={slideBackward}/> */}
        <div className='slider'>
            <ul>
                <li>
                    <div className='slide'>
                        <div className='user-info'> 
                            <img src={user_1}/>
                        </div>
                        <h3>James</h3>
                        <span>Edusity,USA</span>

                    </div>
                    <div>
                        <p>Edusity USA offers an exceptional learning experience, blending cutting-edge technology with expert instruction to cultivate future leaders</p>

                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'> 
                            <img src={user_2}/>
                        </div>
                        <h3>Edwen</h3>
                        <span>Colombia,USA</span>

                    </div>
                    <div>
                        <p>Colombia USA offers an exceptional learning experience, blending cutting-edge technology with expert instruction to cultivate future leaders</p>

                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'> 
                            <img src={user_3}/>
                        </div>
                        <h3>Jackson</h3>
                        <span>hardvard,USA</span>

                    </div>
                    <div>
                        <p>harvard offers an exceptional learning experience, blending cutting-edge technology with expert instruction to cultivate future leaders</p>

                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'> 
                            <img src={user_4}/>
                        </div>
                        <h3>Eshwath</h3>
                        <span>Stanford,USA</span>

                    </div>
                    <div>
                        <p>Stanford USA offers an exceptional learning experience, blending cutting-edge technology with expert instruction to cultivate future leaders</p>

                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testonimals