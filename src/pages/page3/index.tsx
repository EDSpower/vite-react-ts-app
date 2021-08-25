import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const Page3: React.FC = () => {
  const [flip, set] = useState(false);

  const words = ['We', 'came.', 'We', 'saw.', 'We', 'kicked', 'its', 'ass.'];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });

  return (
    <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: 60,
        overflow: 'auto',
        fontSize: '0.5em',
      }}
      scrollTop={scroll}
    >
      {words.map((word, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`${word}_${i}`} style={{ width: '100%', height: 50, textAlign: 'center' }}>
          {word}
        </div>
      ))}
    </animated.div>
  );
};

export default Page3;
