import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './index.scss';

const Page7: React.FC = () => {
  const [flag, setflag] = useState(true);
  console.log('flag: ', flag);

  const sideAniData = {
    open: {
      clipPath: `circle(${400 * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(24px at 26px 26px)',
      transition: {
        type: 'spring',
        delay: 0.5,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemAniData = {
    open: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        y: { stiffness: 1000, velocity: -100 },
      },
    }),
    closed: (index: number) => ({
      y: 50,
      opacity: 0,
      transition: {
        delay: (7 - index) * 0.1,
        y: {
          stiffness: 1000,
          delay: (7 - index) * 0.07,
        },
      },
    }),
  };

  return (
    <div className="page7">
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={false}
        animate={flag ? 'open' : 'closed'}
        variants={sideAniData}
        className="sild-nav"
      >
        <div onClick={() => setflag(!flag)} className="close-btn">
          x
        </div>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((e) => (
          <motion.li
            whileTap={{ scale: 0.9 }}
            whileHover={{
              backgroundColor: '#aaa',
              scale: 1.2,
              transition: {
                type: 'spring',
                stiffness: 1000,
                damping: 50,
                velocity: 10,
              },
            }}
            custom={e}
            variants={itemAniData}
          />
        ))}
      </motion.div>

      <motion.div className="demo1" animate={{ scale: 1.5 }} />
      <motion.div
        className="demo2"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Page7;
