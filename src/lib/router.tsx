import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';

interface RouterContextValue {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  navigate: () => {},
});

function getBasePrefix(): string {
  const raw = import.meta.env.BASE_URL || '/';
  if (raw === '/' || raw === './') return '';
  return raw.endsWith('/') ? raw.slice(0, -1) : raw;
}

function stripBase(fullPath: string): string {
  const base = getBasePrefix();
  const [clean] = fullPath.split('#');
  let routePath = clean || '/';
  if (base && (routePath === base || routePath.startsWith(`${base}/`))) {
    routePath = routePath.slice(base.length) || '/';
  }
  return routePath.length > 1 && routePath.endsWith('/')
    ? routePath.slice(0, -1)
    : routePath;
}

function withBase(routeTo: string): string {
  const base = getBasePrefix();
  const [pathPart, hashPart] = routeTo.split('#');
  const normalized = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  const joined = base ? `${base}${normalized === '/' ? '/' : normalized}` : normalized;
  return hashPart ? `${joined}#${hashPart}` : joined;
}

export function RouterProvider({children}: {children: React.ReactNode}) {
  const [pathname, setPathname] = useState<string>(() =>
    stripBase(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => {
      setPathname(stripBase(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const [pathPart, hashPart] = to.split('#');
    const targetPath = stripBase(pathPart || '/');
    const fullTargetUrl = withBase(to);

    if (targetPath !== stripBase(window.location.pathname)) {
      window.history.pushState({}, '', fullTargetUrl);
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
  const targetPath = stripBase(to);
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
      href={withBase(to)}
      onClick={handleClick}
      className={mergedClass}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
