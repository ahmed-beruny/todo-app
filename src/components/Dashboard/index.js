import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function Index() {
  return (
    <div>
        <Header />
        <div>
          <h1>Welcome to Beruny's Dashboard</h1>
        </div>
        <Content />
        <Footer />
    </div>
  )
}

