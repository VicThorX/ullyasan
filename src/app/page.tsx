import { redirect } from 'next/navigation';

export default function RootPage() {
  // Statically redirect from "/" to the default locale "/es"
  redirect('/es');
}
