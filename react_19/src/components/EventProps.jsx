import React from "react";


//Parent Component
export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Welcome ${user} to our website`);
  };

  const handleHover = () => {
    alert("You are hovering over the button");
  };

  return (
    <>
      <WelcomeUser onClick= {()=> handleWelcomeUser("John Doe")} onMouseEnter={handleHover} />
    </>
  );
};

//Child Component
const WelcomeUser = ({ onClick, onMouseEnter }) => {
  return (
    <button onClick={onClick} onMouseEnter={onMouseEnter}>
      Welcome User
    </button>
  );
};