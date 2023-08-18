import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
        <Head />
        <h1>Home</h1>
        <p>Essa é a home.</p>
        <Link to="produto/notebook">Notebook</Link> {' '} 
        <Link to="produto/tablet">Tablet</Link>

    </div>
  )
}

export default Home