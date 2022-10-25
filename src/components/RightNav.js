import React from "react";

const RightNav = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Sign in with Google
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Sign in with Github
        </div>
      </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          Sign in with Email
        </div>
    </div>
  );
};

export default RightNav;
