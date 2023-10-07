import Banner from '../components/home/Banner';
import Products from '../components/home/Products';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <div className="w-full -mt-10 xl:-mt-36 py-10">
        <Products />
      </div>
    </div>
  );
};

export default Home;
