import Head from 'next/head'

export default function CustomHead() {
  return (
    <Head>
      {/* Additional meta tags for better social media sharing */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="George Links Portfolio" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      
      {/* Twitter specific meta tags */}
      <meta name="twitter:image:alt" content="George - Full Stack Web3 Developer" />
      <meta name="twitter:site" content="@georgelinks" />
      
      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#00D4FF" />
      <meta name="msapplication-TileColor" content="#00D4FF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="George Links" />
      
      {/* Preconnect to external domains for faster loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional favicon formats */}
      <link rel="icon" type="image/png" sizes="32x32" href="/geo-favi.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/geo-favi.png" />
      <link rel="apple-touch-icon" href="/geo-favi.png" />
    </Head>
  )
}
