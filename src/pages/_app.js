import Nav from "./../components/Nav";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="w-screen full-container flex-col md:flex-row flex ">
      <div className="md:basis-1/5  ">
        <Nav />
      </div>
      <div className="md:overflow-y-scroll md:max-h-screen text-white grow md:grow-0 md:basis-4/5 flex child:grow flex-col ">
        <LazyMotion features={domAnimation}>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <m.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=""
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
}

export default MyApp;
