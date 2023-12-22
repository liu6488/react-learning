import LoginAccount from './components/login-input';
import style from './style.module.scss';
import logo from '../../assets/tiger.png';
// import { useSelector } from 'react-redux';
export default function Login() {
  // const loginStatus = useSelector((state: any) => state.loginStatus);
  // console.log(loginStatus);

  return (
    <div className={style.outer}>
      <img className={style.logo} src={logo} alt="" />
      <h1>Sign in to React</h1>
      <LoginAccount />
    </div>
  );
}
