/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
// import * as React from "react"

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  // setHeadComponents([
  //   <link
  //     rel="preload"
  //     href="/webfonts/RedHatText/RedHatText-Regular.woff2"
  //     as="font"
  //     type="font/woff2"
  //     crossOrigin="anonymous"
  //     key="RedHatFont"
  //   />,
  // ])
}
