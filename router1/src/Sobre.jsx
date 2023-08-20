import React from 'react'
import Head from './Head'
import {Helmet} from 'react-helmet'

const Sobre = () => {
  return (
    <div>
      {/*<Head title="Sobre" description="Essa é a descrição da Sobre" /> */}
      <Helmet>
        <title>Sobre</title>
        <meta name="description" content="Essa é a descrição da Sobre" />
      </Helmet>
        <h1>
            Sobre
        </h1>
        <p>Esse é o sobre.</p>
    </div>
  )
}

export default Sobre