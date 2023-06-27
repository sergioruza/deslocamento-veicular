import { useRouter } from 'next/router';
import React from 'react';

import Button from './Button';

function ConductorHome() {
  const { push } = useRouter();
  return (
    <div>
      <Button
        type="button"
        actionName="Conta"
        onClick={() => push('/profile/conductor')}
      />
    </div>
  );
}

export default ConductorHome;
