import { useEffect } from 'react';

import './App.css'
import { GetUserData, GetIssue, SearchIssues } from './services/githubApiService'

import logo from './assets/Logo.png';
import effectR from './assets/effectR.png';
import effectL from './assets/effectL.png';

export function App() {
  useEffect(() => {
    getUserInfo()
  });

  const getUserInfo = async () => {
    const userInfo = await GetUserData();
    const userSearch = await SearchIssues();
    const userIssue = await GetIssue();

    console.log('Get github user Info:', userInfo)
    console.log('Get github Search:', userSearch)
    console.log('Get github user Issues:', userIssue)
  }

  return (
    <>
      <div className='cover'>
        <img src={effectL} alt="" className='effectL' />
        <img src={logo} alt="" className='logo' />
        <img src={effectR} alt="" className='effectR' />
      </div>

      <div className=''></div>

      <h1>Vite + React</h1>

      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs"> Click on the Vite and React logos to learn more </p>
    </>
  )
}
