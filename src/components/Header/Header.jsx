import { dellToken } from 'api/api';
import { refresh } from 'api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { isAuthSelect } from 'store/auth/selectors';
import { logOut } from 'store/auth/slice';

const Header = ({ handleShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelect);

  const handleLogOut = () => {
    dispatch(logOut());
    dellToken();
  };
  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-md">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link text-white" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link text-white" to="/products">
              Products
            </NavLink>
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={handleShowModal}>
          Open Modal
        </button>
        <button className="btn btn-outline-success" onClick={refresh}>
          REFRESH
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => (isAuth ? handleLogOut() : navigate('/login'))}
        >
          {isAuth ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Header;
