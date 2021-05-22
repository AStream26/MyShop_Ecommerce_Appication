import React from 'react'


const Profile = ({text}) => {
   
    return (
        <div style={{
            backgroundImage: `linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)`,
            backgroundColor: `#abe9cd`,
            color:"white",
            borderBottom:"1px solid white",
            padding:"1em 0px",
            textAlign:"center"
        }}>
            <h3>
                {text}
            </h3>
        </div>
    )
}



export default Profile
