import { React, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom'
import metabnb_logo from '../assets/metabnb__logo.png'
import Modal from './Modal';


const HeaderBar = () => {


    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
	}
	
	const [openModal, setOpenModal] = useState(false);

  return (
		<div className="for__modal">
			<div className="header__flex">
				<div className="main__logoContainer">
					<Link to="/">
						<img
							src={metabnb_logo}
							alt="main metabnb logo"
							className="metabnb__logo"
						/>
					</Link>
				</div>
				<div className="menu__content">
					<MenuIcon className="menu__icon" onClick={showMenu} />
				</div>
				<nav className={active ? "slider active" : "slider"}>
					<ul>
						<div className="nav__middle">
							<div className="close__content">
								<CloseIcon className="close__icon" onClick={showMenu} />
							</div>
							<li className="nav__items">
								<Link className="nav__text" to="/">
									Home
								</Link>
							</li>
							<li className="nav__items">
								<Link className="nav__text" to="/Placepage">
									Place to stay
								</Link>
							</li>
							<li className="nav__items">
								<Link className="nav__text">NFTs</Link>
							</li>
							<li className="nav__items">
								<Link className="nav__text">Community</Link>
							</li>
						</div>
						<div className="btn__container">
							<li className="nav__items">
								<Link>
									<button
										className="btn__connect"
										onClick={() => setOpenModal(true)}
									>
										Connect wallet
									</button>
								</Link>
							</li>
						</div>
					</ul>
				</nav>
			</div>
			<Modal open={openModal} onClose={() => setOpenModal(false)} />
		</div>
	);
}

export default HeaderBar
