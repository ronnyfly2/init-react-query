import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink } from "react-router-dom"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <h1>Navigation</h1>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}