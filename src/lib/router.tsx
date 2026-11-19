import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';

interface RouterContextValue {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  navigate: () => {},
});

function normalizePath(path: string): string {
  const [clean] = path.split('#');
  if (!clean || clean === '') return '/';
  return clean.length > 1 && clean.endsWith('/') ? clean.slice(0, -1) : clean;
}

export function RouterProvider({children}: {children: React.ReactNode}) {
  const [pathname, setPathname] = useState<string>(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const [pathPart, hashPart] = to.split('#');
    const targetPath = normalizePath(pathPart || '/');

    if (targetPath !== normalizePath(window.location.pathname)) {
      window.history.pushState({}, '', to);
      setPathname(targetPath);
    }

    if (hashPart) {
      window.requestAnimationFrame(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }
      });
    } else {
      window.scrollTo({top: 0, behavior: 'auto'});
    }
  }, []);

  return (
    <RouterContext.Provider value={{pathname, navigate}}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeClassName?: string;
}

export function Link({to, className = '', activeClassName, onClick, children, ...rest}: LinkProps) {
  const {pathname, navigate} = useRouter();
  const targetPath = normalizePath(to);
  const isActive =
    targetPath === '/'
      ? pathname === '/'
      : pathname === targetPath || pathname.startsWith(`${targetPath}/`);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      rest.target === '_blank'
    ) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const mergedClass = activeClassName && isActive ? `${className} ${activeClassName}`.trim() : className;

  return (
    <a
      href={to}
      onClick={handleClick}
      className={mergedClass}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
