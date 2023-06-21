import { useRouter } from 'next/router';
import React from 'react';

function HomeCustomer() {
  const route = useRouter();
  function handleCLick(url: string) {
    route.push(url);
  }

  return (
    <div>
      <header>
        <span onClick={() => handleCLick('/profile/customer')}>Perfil</span>
      </header>

      <div>
        <span onClick={() => handleCLick('/rides/history')}>
          Minhas corridas
        </span>
        <br />
        <span onClick={() => handleCLick('/rides/start')}>
          Começar uma corrida
        </span>
        <br />
        <span onClick={() => handleCLick('/rides/end')}>
          Encerrar uma corrida
        </span>
      </div>
    </div>
  );
}

export default HomeCustomer;
