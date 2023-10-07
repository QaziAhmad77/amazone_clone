import { useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

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
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <div className="w-full h-auto flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
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
              <p className="text-sm">{item.description.substring(0, 100)}...</p>
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
