import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ siteTitle }) => (
  <>

    <header id="accueil" className="hidden md:flex flex-row items-center px-4 md:px-0 pt-5">
      <h1 className="md:px-52 px-4 text-3xl flex items-center text-red-500 ">
        <StaticImage
            src="../images/icon.png"
            width={90}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Étudiante en médecine"
        />
        <Link to="/">
          {siteTitle} 
        </Link>
      </h1>

      <h2 className="hidden md:block px-4 text-sm text-red-500 hover:text-red-600">
        <AnchorLink to="/#accueil" title="Accueil">
          Accueil
        </AnchorLink>
      </h2>

      <h2 className="hidden md:block px-4 text-sm text-red-500 hover:text-red-600">
        <AnchorLink to="/#offre" title="Offre">
          Offre
        </AnchorLink>
      </h2>

      <h2 className="hidden md:block px-4 text-sm text-red-500 hover:text-red-600">
        <AnchorLink to="/#tarif" title="Tarif">
          Tarif
        </AnchorLink>
      </h2>

      <h2 className="hidden md:block px-4 text-sm text-red-500 hover:text-red-600">
        <AnchorLink to="/#faq" title="FAQ">
          FAQ
        </AnchorLink>
      </h2>
  </header>
  </>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
