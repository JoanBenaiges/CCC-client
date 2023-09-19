import './Navigation.css'
import { useContext, useState } from "react";
import { Button, Container, Navbar, DropdownButton } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/theme.context";
import { AuthContext } from "../../contexts/auth.context";
import sunIcon from '../../../public/sun-regular.svg'
import moonIcon from '../../../public/moon-solid.svg'

const Navigation = () => {

  const { theme, switchTheme } = useContext(ThemeContext)
  const { loggedUser, logout } = useContext(AuthContext)
  const [themeIcon, setThemeIcon] = useState(theme === 'dark' ? moonIcon : sunIcon);

  const toggleTheme = () => {
    console.log('------>', loggedUser)
    switchTheme();
    setThemeIcon(theme === 'dark' ? sunIcon : moonIcon);
  };


  return (

    <Navbar
      bg={theme === 'dark' ? 'light' : 'dark'}
      data-bs-theme={theme === 'dark' ? 'light' : 'dark'}>

      <Button className='superTemita ms-3' variant={theme} onClick={toggleTheme}>
        <img src={themeIcon} alt={theme === 'dark' ? 'Moon' : 'Sun'} width="24" height="24" />

      </Button>
      <Container>


        <Link className="hTitle">
          <h1> {import.meta.env.VITE_APP_NAME}</h1>
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="d-flex">
              {
                loggedUser &&
                <div className=" d-flex mt-2 me-3">
                  <Link to={"/park/list"} className="nav-link me-4">Park</Link>
                  <Link to={"/event/list"} className="nav-link me-4">Events</Link>
                  <Link to={"/user/list"} className="nav-link me-4"> Community</Link>
                  <Link to={`/user/${loggedUser._id}`} className="nav-link me-4">Profile</Link>
                </div>

              }
              <DropdownButton
                variant={theme}
                align="end"
                title={loggedUser ?
                  loggedUser.username : " log in"}
                id="dropdown-menu-align-end"
              >
                {
                  loggedUser &&
                  <>
                    <Link to={'/'} className='mx-2  nav-link' onClick={logout}>log out</Link>
                    <hr />
                    <Link to={`/user/${loggedUser._id}`} className='mx-2  nav-link' >profile</Link>
                  </>
                }
                {
                  !loggedUser &&
                  <>
                    <Link to={"/auth/signup"} className=" mx-2 nav-link"> Sign Up</Link>
                    <hr />
                    <Link to={"/auth/login"} className=" mx-2  nav-link"> Log In</Link>
                  </>
                }
              </DropdownButton>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>


      </Container>
    </Navbar>

  );
};

export default Navigation;
