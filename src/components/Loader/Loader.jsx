import { useEffect, useState } from 'react';
import css from './Loader.module.css';

const Loader = () => {
  const images = [
    '../../../public/img/image_part_001.png',
    '../../../public/img/image_part_002.png',
    '../../../public/img/image_part_003.png',
    '../../../public/img/image_part_004.png',
    '../../../public/img/image_part_005.png',
    '../../../public/img/image_part_006.png',
    '../../../public/img/image_part_007.png',
    '../../../public/img/image_part_008.png',
    '../../../public/img/image_part_009.png',
    '../../../public/img/image_part_010.png',
    '../../../public/img/image_part_011.png',
    '../../../public/img/image_part_012.png',
    '../../../public/img/image_part_013.png',
    '../../../public/img/image_part_014.png',
    '../../../public/img/image_part_015.png',
    '../../../public/img/image_part_016.png',
    '../../../public/img/image_part_017.png',
    '../../../public/img/image_part_018.png',
    '../../../public/img/image_part_019.png',
    '../../../public/img/image_part_020.png',
  ];
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          setIndex(prevIndex => (prevIndex + 1) % images.length);
          return prevTime - 1;
        } else {
          setIndex(0);
          return 20;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={css.container}>
      <div className={css.tumb}>
        <img className={css.img} src={images[index]} alt="slide" />
      </div>
      <p className={css.text}>
        Left time: {timeLeft} {timeLeft > 1 && 'seconds'}
        {timeLeft === 1 && 'second'}
      </p>
    </div>
  );
};
export default Loader;