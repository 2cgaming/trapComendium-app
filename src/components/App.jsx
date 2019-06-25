import React from 'react';
import styles from './App.scss'
import TrapBuilder from './TrapBuilder.jsx';

export default () => (
  <div>
    <nav className="row">
      <div className="button brand_name">
        2CGaming
      </div>
      <div className="button">
        Home
      </div>
      <div className="button dropdown">
        Dropdown Stand-in
      </div>
    </nav>
    <main>
      <h2>
        Ye Olde Trap Builder
      </h2>
      <TrapBuilder />
    </main>
    <footer>
      <div>
      Excepting logos owned by other parties, images and content are copyright of 2CGaming, 2019. Please do not reproduce without permission. All mailing lists are moderated by 2CGaming. We will never distribute your information provided to any third-parties. You can unsubscribe at any time. If you want your information changed, please contact us via our contact us page. 
      </div>
    </footer>
  </div>
);
