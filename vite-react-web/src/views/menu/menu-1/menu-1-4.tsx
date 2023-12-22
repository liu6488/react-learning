import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeRouterType } from '../../../store/actions/routerActions';
export default function Menu1_4(props: any) {
  const dispath = useDispatch()
  const navigate = useNavigate()
  const toNav = () => {
    // dispath(changeRouterType({ path: '/menu/menu-1/menu-1-3', isMenuItem: false }))
    navigate('/menu/menu-1/menu-1-3')
  }
  return (
    <>
      <div>Menu1-4<br />
        <Button type="primary" onClick={toNav}>toMenu1-3</Button>
      </div>
    </>
  )

}