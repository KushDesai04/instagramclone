import React from 'react'
import PageLayout from './Layouts/PageLayouts/PageLayout'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </PageLayout>
    </>
  )
}

export default App
