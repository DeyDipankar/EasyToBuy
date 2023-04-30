import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react";
import {ReactComponent as LogoSVG} from "../../assets/crown.svg" //Note the use of logo svg as component
import "./navigation.styles.scss"

function Navigation ()
{
  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={'/'}>
            <LogoSVG className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to={'/shop'}>
                SHOP
            </Link>
            <Link className="nav-link" to={'/contact'}>
                CONTACT
            </Link>
            <Link className="nav-link" to={'/signin'}>
                SIGN IN
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
 export default Navigation;