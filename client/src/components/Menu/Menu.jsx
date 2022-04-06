import React from 'react';
import s from './Menu.module.css';

function Menu(props) {
  return (
    <aside className={s.sidebar}>
      <img src="/img/logo.png" alt="logo" className={s.logo} />
      <div className={s.buttons}><span>Итоги</span></div>
      <div className={s.buttons}><span>Заказы</span></div>
      <div className={s.buttons}><span>Сообщения</span></div>
      <div style={{backgroundColor: "rgb(66, 76, 104)"}} className={s.buttons}><span>Звонки</span></div>
      <div className={s.buttons}><span>Контрагенты</span></div>
      <div className={s.buttons}><span>Документы</span></div>
      <div className={s.buttons}><span>Исполнители</span></div>
      <div className={s.buttons}><span>Отчеты</span></div>
      <div className={s.buttons}><span>База знаний</span></div>
      <div className={s.buttons}><span>Настройки</span></div>
    </aside>
  );
}

export default Menu;
