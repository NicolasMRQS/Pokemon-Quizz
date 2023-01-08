import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pkmnNbFromGen } from '../../../utils';

import './style.scss';

function Select() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    const gen = parseInt(event.target.dataset.gen, 10);
    const pkmnNb = pkmnNbFromGen(gen);
    dispatch({
      type: 'SELECT_GEN',
      gen: gen,
      firstNb: pkmnNb[0],
      lastNb: pkmnNb[1],
    });
    navigate('/quizz');
  };

  return (
    <>
      <h2 className="Select__title">Choisissez une génération</h2>
      <ul className="Select__gen-list">
        <li className="Select__gen" data-gen="1" onClick={handleClick}>• Génération 1</li>
        <li className="Select__gen" data-gen="2" onClick={handleClick}>• Génération 2</li>
        <li className="Select__gen" data-gen="3" onClick={handleClick}>• Génération 3</li>
        <li className="Select__gen" data-gen="4" onClick={handleClick}>• Génération 4</li>
        <li className="Select__gen" data-gen="5" onClick={handleClick}>• Génération 5</li>
      </ul>
    </>

  );
}

Select.propTypes = {

};

export default Select;
