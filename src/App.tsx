import { useEffect } from 'react';

import './App.css'
import { GetUserData, GetIssue, SearchIssues } from './services/githubApiService'

export function App() {
  useEffect(() => {
    getUserInfo()
  });

  const getUserInfo = async () => {
    const userInfo = await GetUserData();
    const userSearch = await SearchIssues();
    const userIssue = await GetIssue();

    console.log('Get github user info:', userInfo)
    console.log('Get github user search:', userSearch)
    console.log('Get github user Issue:', userIssue)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
