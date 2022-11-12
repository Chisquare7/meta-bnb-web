import React from 'react'
import Footer from '../components/Footer';
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div>
      <div>
        <header className="header__container">
            <div className='sect__container'>
                <Header />
            </div>
        </header>
        <main>
            <section className='hero__section'>
                <div className='sect__container'>
                    <div>
                        <div className='hero__left'></div>
                        <div className='hero__right'></div>
                    </div>
                </div>
            </section>
            <section className='layout__one'>
                <div className='sect__container'>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <section className='layout__two'>
                <div className='sect__container'>
                    {/* <h2></h2> */}
                    <div></div>
                </div>
            </section>
            <section className='layout__three'>
                <div className='sect__container'>
                    <div>
                        <div className='layout__three-left'></div>
                        <div className='layout__three-right'></div>
                    </div>
                </div>
            </section>
        </main>
        <footer className="sect__footer">
            <div className='sect__container'>
                <Footer />
            </div>
        </footer>
      </div>
    </div>
  )
}

export default Homepage
