import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom'
import metabnb_logo from '../assets/metabnb__logo.png'

const Header = () => {
  return (
		<div>
			<div className="sect__container">
				<div>
					<div>
                      <Link><img src={ metabnb_logo } alt="main metabnb logo" /></Link>
					</div>
                    <div className='menu__content'>
                        <MenuIcon className='menu__icon' />
                    </div>
					<nav>
						<ul>
                            <div className='close__content'>
                                <CloseIcon className='close__icon' />
                            </div>
							<li>
								<Link>Home</Link>
							</li>
							<li>
								<Link>Place to stay</Link>
							</li>
							<li>
								<Link>NFTs</Link>
							</li>
							<li>
								<Link>Community</Link>
							</li>
						</ul>
						<ul>
							<li>
                              <Link><button>Connect wallet</button></Link>
                            </li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Header
