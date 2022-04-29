import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ siteTitle }) => (
  <header id="accueil" className="flex flex-row align-middle items-center my-2 py-2 px-4 md:px-0">

      <h1 className="md:px-52">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>

      <h2 className="px-4 text-sm text-blue-700 hover:text-blue-600">
        <AnchorLink to="/#accueil" title="Accueil">
          Accueil
        </AnchorLink>
      </h2>

      <h2 className="px-4 text-sm text-blue-700 hover:text-blue-600">
        <AnchorLink to="/#offre" title="Offre">
          Offre
        </AnchorLink>
      </h2>

      <h2 className="px-4 text-sm text-blue-700 hover:text-blue-600">
        <AnchorLink to="/#tarif" title="Tarif">
          Tarif
        </AnchorLink>
      </h2>

      <h2 className="px-4 text-sm text-blue-700 hover:text-blue-600">
        <AnchorLink to="/#faq" title="FAQ">
          FAQ
        </AnchorLink>
      </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
