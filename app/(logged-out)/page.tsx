import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <h1 className="flex items-center">
        <PersonStandingIcon size={50} className="text-pink-500" /> DashboardX
      </h1>

      <p className="mb-2 text-center">
        The best dashboard to manage customer support
      </p>

      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </div>
  );
}
