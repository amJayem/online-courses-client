import React from "react";

const RightNav = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Sign up with Google
        </div>
        <div className=""><hr /></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Sign up with Github
        </div>
      </div>
        <div className=""><hr /></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Sign up with Email
        </div>
    </div>
  );
};

export default RightNav;
