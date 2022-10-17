import { Button } from 'react-bootstrap';
import logo from '../../assets/Images/logo-full.png'
import { BsSearch } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
interface NavbarProps {

}

const menu = [
{link:'search',title:'Tìm kiếm'},
{link:'phimhot',title:'Phim Hot'},
{link:'phimle',title:'Phim Lẻ'},
{link:'phimbo',title:'Phim Bộ'},
{link:'phimmoi',title:'Phim Mới'},
{link:'faq',title:'FAQ'},

]

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const active = {

  }
  return (
    <header className="d-flex justify-content-between menu_navbar align-items-center">
      <div className='d-flex align-items-center'>
        <div className='p-2'>
          <img src={logo} alt="" style={{ width: '7rem', height: '2rem' }} className='pointer' />
        </div>
        <div className='d-flex justify-content-between  menu_link'>
          <div className='p-3 menu_link pointer'>
            <BsSearch className=' me-2 text-white pointer'></BsSearch>
            <a href='/'>Tìm kiếm </a>
          </div>
          <div className='p-3 menu_link pointer'>
            <a href='/'>Phim Hot</a>
          </div>
          <div className='p-3 menu_link pointer'>
            <a href='/'>Phim Lẻ</a>
          </div>
          <div className='p-3 menu_link pointer'>
            <a href='/'>Phim Bộ</a>
          </div>
          <div className='p-3 menu_link pointer'>
            <a href='/'>Phim Mới</a>
          </div>
          <div className='p-3 menu_link pointer'>
            <a href='/'>FAQ</a>
          </div>
        </div>
      </div>
      <div className='p-2'>
        <button className='loginButton'>Đăng nhập</button>
      </div>
    </header>
  );
}

export default Navbar;