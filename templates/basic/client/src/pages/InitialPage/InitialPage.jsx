// InitialPage.jsx

import React from 'react';
import './InitialPage.scss';

export default function InitialPage() {
  return (
    <div className="initial-page flex-center">
      <div className="content">
        <img src="/CRM.svg" alt="CRM.svg" />
        <div>
          <h1>Project successfully set up!</h1>
          <p>Now make your dreams come true.</p>
        </div>
      </div>
    </div>
  );
}
