import Image from 'next/image';
import MainLayout from '@/layouts/MainLayout';

export const metadata = {
  title: 'Projects - Rohan D`Cunha',
  description: 'My Projects - Rohan D`Cunha',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some of my selected projects worth sharing.
        </p>
      </div>
      <div className="flex justify-center items-center py-12">
        <Image
          src="/under_construction.png"
          alt="Under Construction"
          width={400}
          height={300}
          className="max-w-full h-auto"
          priority
        />
      </div>
    </MainLayout>
  );
}
