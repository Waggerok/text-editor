import React from 'react';
import { Link } from 'react-router-dom';

import { IoCreateOutline, IoHomeOutline } from 'react-icons/io5';

const Navbar : React.FC = () => {
    return (
        <div className="menu">
            <div className="menu__navbar">
                <ul className="menu__navbar_links">
                    <li className="menu__navbar_links-item">
                        <Link to='/'>
                            <IoHomeOutline size={30}/>
                        </Link>
                    </li>
                    <li className="menu__navbar_links-item">
                        <Link to='/create'>
                            <IoCreateOutline size={30}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
