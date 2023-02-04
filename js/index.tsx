import React, { useEffect, useState } from 'react';

interface Props {};

const Header: React.FC<Props> = () => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener('resize', () => setHeight(window.innerHeight));
    return () => window.removeEventListener('resize', () => setHeight(window.innerHeight));
  }, []);

  const handleClick = () => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    if (body && html) {
      body.style.animate = `{scrollTop: 0}`;
      html.style.animate = `{scrollTop: 0}`;
    }
  };

  return (
    <header style={{ height: `${height}px` }}>
      <nav>
        <a onClick={handleClick}>Click me</a>
      </nav>
    </header>
  );
};

export default Header;
