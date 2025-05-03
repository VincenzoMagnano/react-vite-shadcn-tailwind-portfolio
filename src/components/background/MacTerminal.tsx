import React from 'react';

const MacTerminal = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 h-8 flex items-center px-4 rounded-t-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm mx-auto">Terminal</div>
        </div>
        
        {/* Terminal Body */}
        <div className="bg-black p-4 font-mono text-sm h-64 overflow-y-auto">
          <div className="text-green-500 mb-1">Last login: {new Date().toLocaleString()} on ttys001</div>
          <div className="flex">
            <span className="text-green-400">MacBook-Pro:~ user$ </span>
            <span className="text-white ml-1">ls -la</span>
          </div>
          <div className="text-gray-300 mt-1">
            total 112<br />
            drwxr-xr-x  27 user  staff    864 May 03 10:23 .<br />
            drwxr-xr-x   5 root  admin    160 Mar 12 09:34 ..<br />
            -rw-r--r--   1 user  staff   8196 May 01 17:12 .bash_history<br />
            -rw-r--r--   1 user  staff     50 Apr 29 08:15 .gitconfig<br />
            drwxr-xr-x  13 user  staff    416 Apr 25 14:30 Documents<br />
            drwxr-xr-x  21 user  staff    672 May 02 09:45 Downloads<br />
            drwxr-xr-x   4 user  staff    128 Apr 15 11:23 Projects<br />
          </div>
          <div className="flex mt-1">
            <span className="text-green-400">MacBook-Pro:~ user$ </span>
            <span className="text-white ml-1 animate-pulse">_</span>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-4">
        Terminal Mac OS - UI Mockup
      </div>
    </div>
  );
};

export default MacTerminal;