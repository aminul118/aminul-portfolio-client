'use client';

import { logoutUser } from '@/actions/auth';
import { Button } from '@/components/ui/button';

const AdminHomePage = () => {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <section className="mx-auto w-11/12">
      <Button onClick={handleLogout}>Logout</Button>
    </section>
  );
};

export default AdminHomePage;
