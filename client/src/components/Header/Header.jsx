import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getDate } from '../../helpers/dateHelper';
import { setRange } from '../../redux/actionCreators/callsAC';
import s from './Header.module.css';

function Header({ handleChange }) {
  const dispatch = useDispatch();
  const chosenDate = useRef();

  return (
    <div className={s.header}>
      <input ref={chosenDate} type="date" defaultValue={getDate()}
        onChange={() => {
          handleChange();
          dispatch(setRange(chosenDate.current.value));
        }} />
    </div>
  );
}

export default Header;
