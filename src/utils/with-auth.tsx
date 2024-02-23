"use client"
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect } from 'react';


export default function withAuth<P extends object>(Component: FunctionComponent<P>) {
  const WithAuth: FunctionComponent<P> = (props) => {
    const router = useRouter();
    const isAuthenticated = checkIfAuthenticated();

    if (!isAuthenticated) {
      router.push('/login');
    }
    return <Component {...props} />;
  };
  return WithAuth;
}

function checkIfAuthenticated(): boolean {
  return true;
}
