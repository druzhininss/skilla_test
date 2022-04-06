import ContentBox from "../ContentBox/ContentBox";
import Menu from "../Menu/Menu";
import s from './App.module.css';

function App() {
  return (
    <div className={s.wrapper}>
    <Menu />
    <ContentBox />
    </div>
  );
}

export default App;
