/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { StaticImage, GatsbyImage } from "gatsby-plugin-image"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  const [nav, showNav] = React.useState(false);


  return (
    <>
      <header id="accueil-mobile" className="flex md:hidden flex-row justify-between py-4 px-4">
          <StaticImage
              src="../images/icon.png"
              width={44}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Logo"
          />
          <h1 className="text-xl text-red-500">
            {data.site.siteMetadata?.title || `Title`} 
          </h1>
          <button type="button" className="text-red-500" onClick={() => showNav(!nav)}>
            {!nav ? <svg  fill="#DC2626"  width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64"><line x1="9.37" x2="54.63" y1="9.37" y2="54.63" fill="#DC2626" stroke="#DC2626" stroke-miterlimit="10" stroke-width="8"/><line x1="9.37" x2="54.63" y1="54.63" y2="9.37" fill="none" stroke="#DC2626" stroke-miterlimit="10" stroke-width="8"/></svg> }
          </button>
      </header>
      <div className={ nav ? `block md:hidden text-center` : `hidden` }>
        <h2 className="px-4 text-xl text-red-500 hover:text-red-600">
          <AnchorLink to="/#accueil" title="Accueil">
            Accueil
          </AnchorLink>
        </h2>

        <h2 className="px-4 text-xl text-red-500 hover:text-red-600">
          <AnchorLink to="/#offre" title="Offre">
            Offre
          </AnchorLink>
        </h2>

        <h2 className="px-4 text-xl text-red-500 hover:text-red-600">
          <AnchorLink to="/#tarif" title="Tarif">
            Tarif
          </AnchorLink>
        </h2>

        <h2 className="px-4 text-xl text-red-500 hover:text-red-600">
          <AnchorLink to="/#faq" title="FAQ">
            FAQ
          </AnchorLink>
        </h2>
      </div>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
         className="px-4 md:px-0"
      >
        <main>{children}</main>
        <footer
          className="md:px-52 my-2"
        >
          © {new Date().getFullYear()}
          {` `}
          <a href="http://concours-medecine.ma/">concours-medecine.ma</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
