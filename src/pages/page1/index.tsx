import React from 'react';
import { useHistory } from 'react-router-dom';

const Page1: React.FC = () => {
  const history = useHistory();
  return (
    <div onClick={() => history.push('/page2')}>
      Page1Page1Page11Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1Page1
    </div>
  );
};

export default Page1;
