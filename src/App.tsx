import {AnimatePresence, MotionConfig, motion} from 'motion/react';
import {EASE_EDITORIAL} from './components/MotionPrimitives';
import {RouterProvider, useRouter} from './lib/router';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {ExperiencePage} from './pages/ExperiencePage';
import {HomePage} from './pages/HomePage';
import {WorkDetailPage} from './pages/WorkDetailPage';
import {WorkPage} from './pages/WorkPage';

function RouteView() {
  const {pathname} = useRouter();

  let page = <HomePage />;
  if (pathname === '/work') {
    page = <WorkPage />;
  } else if (pathname.startsWith('/work/')) {
    const slug = pathname.slice('/work/'.length);
    page = <WorkDetailPage slug={slug} />;
  } else if (pathname === '/about') {
    page = <AboutPage />;
  } else if (pathname === '/experience') {
    page = <ExperiencePage />;
  } else if (pathname === '/contact') {
    page = <ContactPage />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.22, ease: EASE_EDITORIAL}}
      >
        {page}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <RouteView />
      </RouterProvider>
    </MotionConfig>
  );
}
