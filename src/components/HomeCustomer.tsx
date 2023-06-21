import { useRouter } from 'next/router';
import React from 'react';

function HomeCustomer() {
  function handleCLick(url: string) {
    const route = useRouter();
    route.push(url);
  }

  return (
    <div>
      <header>
        <span onClick={() => handleCLick('/profile/customer')}>Perfil</span>
      </header>
    </div>
  );
}

export default HomeCustomer;
