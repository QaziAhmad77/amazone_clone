import { bdFlag, logo } from '../../assets';
import { middleList } from '../../constants';
import FooterMiddleList from './FooterMiddleList';

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* Top Start here */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-4 place-items-center items-start">
            {middleList.map((item, index) => (
              <FooterMiddleList
                key={index}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Top End here */}
      {/* Bottom Start here */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-20 py-3" src={logo} alt="" />
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <img src={bdFlag} alt="" />
          <p>Bangladesh</p>
        </div>
      </div>
      {/* Bottom End her */}
    </div>
  );
};

export default FooterMiddle;
