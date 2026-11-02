import { Link } from "react-router"
import logoImg from "../../assets/logo.svg"

import style from "./header.module.css"

export function Header() {
  return (
    <div className={style.header}>
      <Link to="/">
        <img src={logoImg} alt="Logo cripto app" />
      </Link>
    </div>
  )
}