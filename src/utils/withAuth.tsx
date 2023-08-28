// withAuth.tsx
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';
import { isAuthenticated } from './auth';

const withAuth = (WrappedComponent: ComponentType) => {
  const WrapperComponent = (props: any) => {
    const router = useRouter();

    if (!isAuthenticated()) {
      router.push('/login');
    }

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

export default withAuth;
