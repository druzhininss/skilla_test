import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCallsDataAC, setCallsType } from '../../redux/actionCreators/callsAC';
import { v4 as uuidv4 } from 'uuid';
import CallData from '../CallData/CallData';
import Header from '../Header/Header';
import s from './ContentBox.module.css';

function ContentBox(props) {
  const dispatch = useDispatch();
  const callsRef = useRef('');

  useEffect(() => {
    dispatch(getCallsDataAC())
  }, [dispatch]);

  const { callsInRange, sortedCalls, isSorted } = useSelector(state => state.callsReducer);
  
  const setCallsOption = (ref) => {
    dispatch(setCallsType(ref.current.value));
  };

  const handleChange = () => {
    callsRef.current.value = "All";
  };

  return (
    <div className={s['wrap-container']}>
      <Header handleChange={handleChange} />
      <div className={s['CB-container']}>
        <div className={s['CB-header']}>

          <select className={s.select} ref={callsRef} onChange={() => { setCallsOption(callsRef) }}>
            <option value="All">Все звонки</option>
            <option value="In">Входящие</option>
            <option value="Out">Исходящие</option>
          </select>

        </div>
        <div className={s['CB-content']}>
          <div className={s['CB-title']}>
            <div><span className={s['text']}>Тип</span></div>
            <div><span className={s['text']}>Время</span></div>
            <div><span className={s['text']}>Сотрудник</span></div>
            <div><span className={s['text']}>Звонок</span></div>
            <div><span className={s['text']}>Источник</span></div>
            <div><span className={s['text']}>Оценка</span></div>
            <div><span className={s['text']}>Длительность</span></div>
          </div>
          <div className={s['CB-data-blocks']}>
            {
              isSorted
                ?
                sortedCalls?.length ? sortedCalls?.map((call) => <CallData key={uuidv4()} callData={call} />) : 'Звонки отсутствуют'
                :
                callsInRange?.length ? callsInRange?.map((call) => <CallData key={uuidv4()} callData={call} />) : 'Звонки отсутствуют'
            }
          </div>
        </div>
      </div>


    </div>
  );
}

export default ContentBox;
