import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Blog exercise</h1>
      <PostList />
    </>
  )
}

export default App
