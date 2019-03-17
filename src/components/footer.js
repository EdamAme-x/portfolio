import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div className="tabs is-medium is-hidden-desktop" style={{
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      overflow: "scroll"
    }}>
      <ul style={{
        border: "none"
      }}>
        <li><Link className="has-text-white" to="/" style={{
          borderBottom: "solid 0.3em #fff"
        }}>Home</Link></li>
        <li><Link className="has-text-white" to="/about" style={{
          borderBottom: "none"
        }}>About</Link></li>
      </ul>
    </div>
  </footer>
)

export default Footer