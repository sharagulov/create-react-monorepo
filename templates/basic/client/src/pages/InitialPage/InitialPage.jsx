// InitialPage.jsx

import React from 'react';
import styles from './InitialPage.scss';

export default function InitialPage() {

  const handleRedirect = async (url) => {
    window.location.href = url;
  };

  	return (
      <div className='container'>
    		<div className="pageContainer">
      			<img className="logo" alt="" src="/CRM192.png" />
      			<div className="projectInfoContainer">
        				<h2 className="projectStatus">The project has been successfully launched</h2>
        				<span className="projectMessage">Now make your dreams come true.</span>
      			</div>
      			<div className="buttonsWrapper">
        				<div className="buttonContainer" onClick={() => handleRedirect("https://www.npmjs.com/package/@sharagulov/create-react-monorepo")}>
          					<div className='iconTextContainer'>
            						<img className='' alt="" src="/npmlogo.png" />
            						<span className='projectStatus'>NPM</span>
          					</div>
        				</div>
        				<div className='buttonContainer' onClick={() => handleRedirect("https://github.com/sharagulov/create-react-monorepo")}>
          					<div className='iconTextContainer'>
            						<img className='' alt="" src="/githublogo.png" />
            						<span className='projectStatus'>GitHub</span>
          					</div>
        				</div>
      			</div>
    		</div>
      </div>
  	);
};
