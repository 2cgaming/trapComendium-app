import React from 'react';
import style from 'styled-components';

import Sidebar from './Sidebar.jsx';
import Session from './DisplaySession.jsx';
import Components from './DisplayComponents.jsx';

const Console = style.div`
  width: 75%;
  font-size: 1.2em;
`;

export default ({data: {session, options, focus, page}, updatePage, updateFocus}) => {
  if (page === 1) {
    return (
      <div>
        <Sidebar />
        <Console>
          <Session data={session} updateFocus={updateFocus} updatePage={updatePage}/>
        </Console>
      </div>
    )
  } else if (page === 2) {
    console.log(options, focus, options[focus]);
    return (
      <div>
        <Sidebar />
        <Console>
          <Components data={options[focus]} type={focus} updatePage={updatePage}/>
        </Console>
      </div>
    )
  }
}