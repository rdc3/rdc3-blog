// import { MDXLayoutRenderer } from '@/components/MDXComponents';
import TimelineLayout from '@/components/layouts/MDX/TimelineLayout';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors, allProjects } from 'contentlayer/generated';

export const metadata = {
  title: 'About - Rohan D`Cunha',
  description: 'About me - Rohan D`Cunha',
};

export default function About() {
  const author = allAuthors.find((p) => p.slug === 'about');
  const projects = allProjects.sort((a, b) => b.year.localeCompare(a.year));
  console.log('Projects:', projects);
  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <AuthorLayout content={author}></AuthorLayout>
      <TimelineLayout projects={projects} author={author} />
    </MainLayout>
  );
}
