import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="John Doe"
        age={30}
        greeting={
          <div>
            <strong>Hi John Doe, Get Lost!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Playing</p>  {/*children*/}
        <button>Contact</button>  {/*children*/}
      </ProfileCard>
    </div>
  );
};

export default Profile;


function ProfileCard(props){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.greeting}</p>
        <p>{props.children}</p>
        </>
    )
}