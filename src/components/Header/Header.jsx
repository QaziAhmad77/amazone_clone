import { logo } from '../../assets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { liItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full flex items-center gap-4 bg-amazon_blue text-white px-4 py-3">
        {/* Image Start here */}
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/* Image End here */}
        {/* Deliver Start here */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{' '}
            <span className="text-sm font-semibold -mt-1 text-white">Oman</span>
          </p>
        </div>
        {/* Deliver End here */}
        {/* Search Start here */}
        <div className="h-10 rounded-md hidden  lgl:flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-200 w-14 h-full hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 bg-white top-10 left-0 overflow-y-scroll overflow-x-hidden border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                {liItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="bg-amazon_yellow w-12 h-full flex items-center justify-center hover:[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* Search End here */}
        {/* Signin Start here */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              Hello, sign in
            </p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{' '}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* Signin End here */}
        {/* Orders Start here */}
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* Orders End here */}
        {/* Cart Start here */}
        <div className="flex items-start justify-center headerHover relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">
            Cart{' '}
            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full felx justify-center items-center">
              0
            </span>
          </p>
        </div>
        {/* Cart End here */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
