import { useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from '@mui/icons-material/Api';
import ShoppinCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Products = () => {
  const data = useLoaderData();
  console.log(data.data);
  const productData = data.data;
  //   useEffect(() => {
  //     async function ProductsData() {
  //       let data = await axios.get('https://fakestoreapi.com/products'); // https://fakestoreapiserver.vercel.app/amazonproducts
  //       console.log(data.data);
  //     }
  //     ProductsData();
  //   }, []);
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
      {productData.map((item, index) => (
        <div
          key={index}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            <ul className="w-full h-36 bg-gray-100 absolute bottom-0 flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
              <li>
                Compare{' '}
                <span>
                  <ApiIcon />{' '}
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm mb-1">
                {item.description.substring(0, 100)}...
              </p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-100 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
