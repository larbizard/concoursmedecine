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

import { StaticImage } from "gatsby-plugin-image"


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
      <header id="accueil-mobile" className="flex xl:hidden flex-row justify-between py-4 px-4">
          <StaticImage
              src="../images/icon.png"
              width={32}
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              alt="Logo"
          />
          <h1 className="text-xl text-red-500">
            {data.site.siteMetadata?.title || `Title`} 
          </h1>
          <button type="button" className="text-red-500 h-5" onClick={() => showNav(!nav)}>
            {!nav ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#DC2626"  width="32" height="32"  fillRule="evenodd" clipRule="evenodd">
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
            </svg> :
            <svg  height="32" id="Layer_1" version="1.1" viewBox="0 0 256 256" width="32" fill="#DC2626" xmlns="http://www.w3.org/2000/svg"><path d="M183.191,174.141c2.5,2.498,2.5,6.552,0,9.05c-1.249,1.25-2.889,1.875-4.525,1.875c-1.638,0-3.277-0.625-4.525-1.875  l-46.142-46.142L81.856,183.19c-1.249,1.25-2.888,1.875-4.525,1.875c-1.638,0-3.277-0.625-4.525-1.875c-2.5-2.498-2.5-6.552,0-9.05  l46.143-46.143L72.806,81.856c-2.5-2.499-2.5-6.552,0-9.05c2.497-2.5,6.553-2.5,9.05,0l46.142,46.142l46.142-46.142  c2.497-2.5,6.553-2.5,9.051,0c2.5,2.499,2.5,6.552,0,9.05l-46.143,46.142L183.191,174.141z M256,128C256,57.42,198.58,0,128,0  C57.42,0,0,57.42,0,128c0,70.58,57.42,128,128,128C198.58,256,256,198.58,256,128z M243.2,128c0,63.521-51.679,115.2-115.2,115.2  c-63.522,0-115.2-51.679-115.2-115.2C12.8,64.478,64.478,12.8,128,12.8C191.521,12.8,243.2,64.478,243.2,128z"/></svg>
            }
          </button>
      </header>
      <div className={ nav ? `block xl:hidden text-center` : `hidden` }>
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

        <h2 className="px-4 text-xl text-red-500 hover:text-red-600">
          <AnchorLink to="/#abonnement" title="Abonnement">
            Abonnement
          </AnchorLink>
        </h2>

        <h2 className="px-4 text-xl text-red-500 hover:text-red-600">
          <AnchorLink to="/#infospratiques" title="Infos pratiques">
            Infos pratiques
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
