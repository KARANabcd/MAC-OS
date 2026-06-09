import React from 'react'
import MacWindow from './Macwindow' 
// Yahan humne Terminal ko safer tareeqe se import kiya hai
import * as TerminalModule from 'react-console-emulator'

const Terminal = TerminalModule.default || TerminalModule.Terminal || TerminalModule;

const Cli = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow  windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        {Terminal && typeof Terminal === 'function' ? (
          <Terminal
            commands={{}}
            welcomeMessage={'Welcome to the React terminal!'}
            promptLabel={'karankumar:~$'}
          />
        ) : (
          <p>Terminal load nahi ho paa raha hai</p>
        )}
      </div>
    </MacWindow>
  )
}

export default Cli

