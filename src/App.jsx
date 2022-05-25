import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import './index.css'

const App = () => {
  const x = 'test info';
  //console.log("this is my tests");
  return (
    <h1 className="underline text-3xl">App - { x } test</h1>
  )
}

export default App