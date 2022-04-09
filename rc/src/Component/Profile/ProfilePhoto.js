import React from 'react'
import logo from '../../images/profilepic.jpg'

export default function ProfilePhoto() {
    const profileStyle = {
       
        width: "300px",
        height: "300px",
        'borderRadius':'50%',
        resizeMode: 'contain',
    alignSelf: 'center',
      };
  return (
      <img src={logo} alt="Logo" className='pp' style={profileStyle} />
  
  )
}
