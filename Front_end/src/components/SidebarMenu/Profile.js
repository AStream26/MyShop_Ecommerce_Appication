import React from 'react'


const Profile = ({text}) => {
   
    return (
        <div style={{
            backgroundImage: `linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)`,
            backgroundColor: `#abe9cd`,
            color:"white",
            borderBottom:"1px solid white",
            padding:"0.57em 0px",
            textAlign:"center"
        }}>
            <h4>
                {text}
            </h4>
        </div>
    )
}



export default Profile
