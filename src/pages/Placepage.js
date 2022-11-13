import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Placepage = () => {
  return (
    <div>
        <header className="header__container">
            <div className="sect__container">
				<Header />
			</div>
        </header>
        <section></section>
        <section></section>
        <footer className="sect__footer">
            <div className="sect__container">
				<Footer />
			</div>
        </footer>
    </div>
  )
}

export default Placepage
