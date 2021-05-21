import React from 'react'


const Profile = ({text}) => {
   
    return (
        <div style={{
            backgroundColor: `#485461`,
            color:"white",
            borderBottom:"2px solid white",
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
