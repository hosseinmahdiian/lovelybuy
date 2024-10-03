import React from 'react';
import { FiGitPullRequest, FiTrello } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Counter = () => {
    return (
      <div className=" w-full flex right-0 left-0 h-20 items-center fixed bottom-0 ">
        <NavLink to={-1} className="w-1/2 h-20 rounded-xl border-black border-opacity-5 border pt-5 text-center bg-white">
          <FiGitPullRequest className="inline text-xl" />
        </NavLink>
        <NavLink to='/Home' className="w-1/2 h-20 rounded-xl border-black border-opacity-5 border pt-5 text-center bg-white">
          <FiTrello className="inline text-xl" />
        </NavLink>
      </div>
    );
}

export default Counter;
