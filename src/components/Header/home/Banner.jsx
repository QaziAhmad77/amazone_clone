import Slider from 'react-slick';
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from '../../../assets';
import { useState } from 'react';
const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div // whole card
        style={{
          position: 'absolute',
          top: '70%',
          left: '45%',
          width: '210px',
          transform: 'translate(-50%,-50%)',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul // buttons card
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: '35px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (
      i // button inside
    ) => (
      <div
        style={
          i === dotActive
            ? {
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                color: 'white',
                border: '1px black solid',
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
            : {
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                color: 'white',
                border: '1px black solid',
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }
        }
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="" />
          </div>
          <div>
            <img src={bannerImgThree} alt="" />
          </div>
          <div>
            <img src={bannerImgFour} alt="" />
          </div>
          <div>
            <img src={bannerImgFive} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
