import React from 'react';
interface Iprops {
  href: string;
  className: string;
  // please learn to type it properly usama
  children: string;
}
const Link: React.FC<Iprops> = ({ href, className, children }) => {
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent: PopStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
