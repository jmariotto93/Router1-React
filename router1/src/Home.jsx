import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <div>
       {/*} <Head title="Home" description="Essa é a descrição da Home" /> */}
       <Helmet>
        <title>Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
      </Helmet>
        <h1>Home</h1>
        <p>Essa é a home.</p>
        <Link to="produto/notebook">Notebook</Link> {' '} 
        <Link to="produto/tablet">Tablet</Link>

    </div>
  )
}

export default Home