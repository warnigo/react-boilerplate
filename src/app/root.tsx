import { type FC, type PropsWithChildren } from "react"

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <html suppressHydrationWarning lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />
      <meta content="noindex, nofollow" name="robots" />

      {/*Brief description of the page (important for SEO, even if noindex is applied) */}
      <meta
        content="Admin dashboard or other Projects for managing' operations."
        name="description"
      />

      {/*Name of the author or creator of the page */}
      <meta content="Abubakir Shavkatov (Warnigo)" name="author" />

      {/*Open Graph tags to enhance link previews on social media platforms */}
      <meta content="react boilerplate" property="og:title" />
      <meta
        content="https://github.com/warnigo/react-boilerplate"
        property="og:url"
      />
      <meta content="https://warnigo.uz/avatar.webp" property="og:image" />

      {/*iOS-specific settings for web app behavior and title */}
      <meta content="React Boilerplate" name="apple-mobile-web-app-title" />

      {/*Sets the theme color for browsers, especially on mobile devices */}
      <meta content="#ffffff" name="theme-color" />

      {/*Link to various favicon files for different platforms and devices */}
      <link
        href="/favicons/favicon-48x48.png"
        rel="icon"
        sizes="48x48"
        type="image/png"
      />
      <link href="/favicons/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link href="/favicons/site.webmanifest" rel="manifest" />

      {/*Page title that appears on the browser tab */}
      <title>React Boilerplate</title>

      <Meta />
      <Links />
    </head>

    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
)

// eslint-disable-next-line react/no-multi-comp
const Root: FC = () => <Outlet />

export default Root
