import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div>
        <header></header>
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
        <footer></footer>
      </div>
    </div>
  )
}

export default Homepage
