import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

function Quizz() {
  const { firstNb, lastNb } = useSelector((state) => state.gen);

  useEffect(() => {
    
  }, []);

  return (
    <div>Quizz</div>
  );
}

Quizz.propTypes = {

};

export default Quizz;
