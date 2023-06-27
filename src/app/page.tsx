'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@mui/material';

export default function Home() {
  const [expandido, setExpandido] = useState(false);

  const handleExpandir = () => {
    setExpandido(!expandido);
  };
  return (
    <div>
      <button onClick={handleExpandir}>Login</button>
      {expandido && (
        <div>
          <Link href="/signin-form/customer">Cliente</Link>
          <Link href="/signin-form/conductor">Condutor</Link>
        </div>
      )}
      <button>
        <Link href="/signup-form/customer">Cadastre-se</Link>
      </button>
      <Button variant="contained">
        <Link href="/signup-form/conductor">Trabalhe como motorista</Link>
      </Button>
    </div>
  );
}
