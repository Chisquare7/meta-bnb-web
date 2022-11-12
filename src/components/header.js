import { React, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom'
import metabnb_logo from '../assets/metabnb__logo.png'

const Header = () => {


    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

  return (
		<div>
			<div>
					<div className='header__flex'>
						<div className='main__logoContainer'>
							<Link>
								<img src={metabnb_logo} alt="main metabnb logo" className='metabnb__logo' />
							</Link>
						</div>
						<div className="menu__content">
							<MenuIcon className="menu__icon" onClick={showMenu} />
						</div>
						<nav className={active ? 'slider active' : 'slider'}>
							<ul>
								<div className="nav__middle">
									<div className="close__content">
										<CloseIcon className="close__icon" onClick={showMenu} />
									</div>
									<li className="nav__items">
										<Link className="nav__text">Home</Link>
									</li>
									<li className="nav__items">
										<Link className="nav__text">Place to stay</Link>
									</li>
									<li className="nav__items">
										<Link className="nav__text">NFTs</Link>
									</li>
									<li className="nav__items">
										<Link className="nav__text">Community</Link>
									</li>
								</div>
								<div className='btn__container'>
									<li className="nav__items">
										<Link>
											<button className='btn__connect'>Connect wallet</button>
										</Link>
									</li>
								</div>
							</ul>
							{/* <ul>
								<li>
									<Link>
										<button>Connect wallet</button>
									</Link>
								</li>
							</ul> */}
						</nav>
					</div>
			</div>
		</div>
	);
}

export default Header
