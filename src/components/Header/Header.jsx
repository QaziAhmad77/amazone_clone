import { logo } from '../../assets';

const Header = () => {
  return (
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3">
        {/* Image Start here */}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/* Image End here */}
        {/* Deliver Start here */}

        {/* Deliver End here */}
        {/* Search Start here */}

        {/* Search End here */}
        {/* Signin Start here */}

        {/* Signin End here */}
        {/* Orders Start here */}

        {/* Orders End here */}
        {/* Cart Start here */}

        {/* Cart End here */}
      </div>
    </div>
  );
};

export default Header;
