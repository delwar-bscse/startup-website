import UserImage from '@/components/common/UserImage';
import { ReactNode } from 'react';

const EntrepreneurLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserImage />
      {children}
    </>
  );
}
export default EntrepreneurLayout;
