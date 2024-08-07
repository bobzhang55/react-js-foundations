import { lazy } from 'react';
import { routes } from './routes';
import usePageTracking from './usePageTracking';
import Helmet from 'react-helmet';
import CodeLinks from './CodeLinks';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import WpBlogWidget from './WpBlogWidget';

const MainNav = lazy(() => import('./MainNav'));

function App(props) {
  usePageTracking();
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>ReactJS Foundations by Chris Minnick</title>
        <meta
          name="description"
          content="Code examples, tutorials, updates, downloads, and blog for ReactJS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
        <meta
          property="og:url"
          content={`https://www.reactjsfoundations.com${location.pathname}${location.search}`}
        />
        <meta
          property="og:image"
          content="https://www.reactjsfoundations.com/images/cover.jpg"
        />
        <meta
          property="og:description"
          content="Code examples, tutorials, updates, downloads, and blog for ReactJS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
        <link rel="preload" as="image" href="/images/cover.webp" />
      </Helmet>
      <div className="container">
        <Suspense fallback={<div>loading...</div>}>
          <div id="column2">
            <main>
              {routes}
              <CodeLinks />
            </main>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <MainNav />
          </Suspense>
          <div id="column3">
            <div className="social_icons">
              <SocialIcon
                url="https://twitter.com/chrisminnick"
                style={{ height: 40, width: 40, margin: '8px' }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/chrisminnick/"
                style={{ height: 40, width: 40, margin: '8px' }}
              />
            </div>
            <a href="https://www.amazon.com/dp/1119685540?&linkCode=li3&tag=chrismincom-20&linkId=6c69efbcfd2ca6ae74a870e3a88a40db&language=en_US&ref_=as_li_ss_il">
              <picture style={{ maxWidth: '100%', height: 'auto' }}>
                <source srcSet="/images/cover.webp" type="image/webp" />
                <source srcSet="/images/cover.jpg" type="image/jpeg" />
                <img
                  src="/images/cover.jpg"
                  width="200"
                  height="250"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  alt="React JS Foundations"
                />
              </picture>
            </a>

            <br />
            <br />
            <WpBlogWidget posts="3" title="Latest Blog Posts" />
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
