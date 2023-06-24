import { useRouter } from 'next/router';
import React from 'react';

import Button from 'components/Button';
import FormProfile from 'components/FormProfile';

function customer() {
  const router = useRouter();
  function logout() {
    localStorage.removeItem('user');
    router.push('/');
  }
  return (
    <div>
      <FormProfile />
      <Button actionName="Sair" type="button" onClick={logout} />
    </div>
  );
}

export default customer;
