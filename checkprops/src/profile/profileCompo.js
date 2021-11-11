import avatar from './img1.png';
import React from 'react';
import PropTypes from 'prop-types';

const Profile = props =>{
    console.log(`props:`,props)
    return (
      <div style={{marginTop: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", backgroundColor: "yellowgreen", color: "red", textAlign: "justify", fontFamily: "monospace"}}>
      <h1>
      hello and welcome to the JUNGLE !!!
          <br/>
          
          <br/>
          you are... <img src = {avatar} alt = "my-Profile-Pic" {...props.children} style={{width: "10%", height: "10%"}} /> {props.FullName}
          <br/>
          your bio... {props.Bio}
          <br/>
          your profession... {props.Profession}
          <br/>
          <button onClick={() => props.handleName(`your user name is BOMBASTIC01`)}>
            ClickMe
            </button>
    </h1>
      </div>
    );
   };
   export default Profile;

   Profile.defaultProps = {
       FullName: 'not found',
       Bio: 'not found',
       Profession: 'not found',
   };

   Profile.propTypes = {
FullName: PropTypes.string,
Bio: PropTypes.string,
Profession : PropTypes.string
   }