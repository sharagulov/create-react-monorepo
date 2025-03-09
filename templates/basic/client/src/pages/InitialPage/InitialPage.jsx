// InitialPage.jsx

import React from 'react';
import './InitialPage.scss';

export default function InitialPage() {
  return (
    <div className="initial-page flex-center">
      <div className="content">
        <img src="/CRM.svg" alt="CRM.svg" />
        <div>
          <h1>Проект успешно создан!</h1>
          <p>Теперь можешь приступить к разработке.</p>
        </div>
      </div>
    </div>
  );
}
