import React, {useState} from "react"
import "./headerComponent.css"
import {withTranslation} from "react-i18next"
import SearchComponent from "../searchComponent/SearchComponent"
import i18next from "i18next"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
/**
 * HeaderComponent
 * @author Edmond Kacaj <edmondikacaj@gmail.com>  {`${process.env.PUBLIC_URL}/nav-bar.png`}
 * @param {*} props properties
 */
const HeaderComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="light" light expand="lg" style={{marginBottom: "20px"}}>
      <NavbarBrand href="/">
        <img
          src={`${process.env.PUBLIC_URL}/nav-bar.png`}
          srcSet={`${process.env.PUBLIC_URL}/nav-bar.png 512w, ${process.env.PUBLIC_URL}/nav-bar-100x100.png 100w, ${process.env.PUBLIC_URL}/nav-bar-50x50.png 50w`}
          alt="Brand logo"
          className="header-brand-img"
          sizes="50vw"
          width={50}
          height={50}
        />
      </NavbarBrand>
      <NavbarBrand href="/">
        <h1 className="mt-0 mb-0">{props.t("HEADER.TITLE")}</h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto d-none d-lg-block" navbar>
          <NavItem>
            <h4 className="p-2 mt-0 mb-0">{props.t("HEADER.SUBTITLE")}</h4>
          </NavItem>
        </Nav>
        <SearchComponent />
        {props.children}
        <Nav className="ml-auto" navbar>
          {i18next.language !== "en" && (
            <NavItem>
              <NavLink className="p-2" onClick={() => i18next.changeLanguage("en")}>
                {props.t("HEADER.CHANGE_LANGUAGE_ENGLISH")}
              </NavLink>
            </NavItem>
          )}
          {i18next.language !== "de" && (
            <NavItem>
              <NavLink className="p-2" onClick={() => i18next.changeLanguage("de")}>
                {props.t("HEADER.CHANGE_LANGUAGE_GERMAN")}
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default withTranslation()(HeaderComponent)
