import React from 'react';
import s from './CallData.module.css';

function CallData({ callData }) {
  return (
    <div className={s['callData-container']}>
      <div className={s['callData-info']}>
        {
          callData['in_out'] === '1'
            ?
            <img src="/img/icons/incoming.png" alt="incoming call" />
            :
            <img src="/img/icons/outgoing.png" alt="outgoing call" />

        }
      </div>

      <div className={s['callData-info']}>{callData['date'].slice(11, -3)}</div>

      <div className={s['callData-info']}>
        {
          callData['person_avatar']
            ?
            <img src={callData['person_avatar']} alt="person avatar" />
            :
            <img src="https://lk.skilla.ru/img/noavatar.jpg" alt="person avatar" />
        }
      </div>

      <div className={s['callData-info']}>
        {callData['in_out'] === '1' ? callData['from_number'] : callData['to_number']}
      </div>

      <div className={s['callData-info']}>Источник</div>
      <div className={s['callData-info']}>Оценка</div>
      <div className={s['callData-info']}>{new Date(callData['time'] * 60 * 1000).toISOString().substring(11, 16)}</div>
    </div>
  );
}

export default CallData;
