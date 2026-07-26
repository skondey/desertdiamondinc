import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  // Role-based redirect
  const { role } = session.user;

  if (role === 'ADMIN') {
    redirect('/admin');
  } else if (role === 'INSTRUCTOR') {
    redirect('/instructor');
  } else if (role === 'STUDENT') {
    redirect('/student');
  }

  // Fallback (should not reach here)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Redirecting...</h1>
      </div>
    </div>
  );
}
