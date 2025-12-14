'use client';

import { MDXLayoutRenderer } from '@/components/MDXComponents';
import type { Authors, Projects } from 'contentlayer/generated';
import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  author: Authors;
  projects?: Projects[];
}

export default function TimelineLayout({ author, projects }: Props) {
  // Handle missing or empty projects array
  if (!projects || projects.length === 0) {
    return (
      <section aria-label="Career timeline and journey overview">
        <div className="rounded-[26px] bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-6 md:my-6">
            <aside
              className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
              aria-label="Journey overview and navigation"
            >
              <p className="ml-2 text-yellow-500 dark:text-yellow-300 uppercase tracking-loose">
                My journey
              </p>
              <h1 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-gray-900 dark:text-white">
                my learnings
              </h1>
              <div role="complementary" aria-label="Author information">
                <MDXLayoutRenderer content={author} />
              </div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-50 mb-4">
                Here's my blog.
              </p>
              <a
                href="/blog"
                className="bg-transparent mr-auto hover:bg-yellow-500 dark:hover:bg-yellow-300 text-yellow-600 dark:text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-600 dark:border-yellow-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-300 focus:ring-opacity-50"
                aria-label="Explore blog posts and articles"
              >
                Explore Now
              </a>
            </aside>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="text-center py-16">
                    <div className="animate-pulse">
                      <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-300 rounded-full mx-auto mb-4"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-300 mb-4">
                      Timeline Loading...
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Career timeline entries are being prepared. Please check back soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section aria-label="Career timeline and journey overview">
        <div className="rounded-[26px] bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-6 md:my-6">
            <aside
              className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
              aria-label="Journey overview and navigation"
            >
              <p className="ml-2 text-yellow-500 dark:text-yellow-300 uppercase tracking-loose">
                My journey
              </p>
              <h1 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-gray-900 dark:text-white">
                my learnings
              </h1>
              <div role="complementary" aria-label="Author information">
                <MDXLayoutRenderer content={author} />
              </div>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-50 mb-4">
                Here's my blog.
              </p>
              <a
                href="/blog"
                className="bg-transparent mr-auto hover:bg-yellow-500 dark:hover:bg-yellow-300 text-yellow-600 dark:text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-600 dark:border-yellow-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-300 focus:ring-opacity-50"
                aria-label="Explore blog posts and articles"
              >
                Explore Now
              </a>
            </aside>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <nav
                  role="navigation"
                  aria-label="Career timeline navigation"
                  className="relative wrap overflow-hidden p-10 h-full timeline-container"
                >
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border border-yellow-500 dark:border-yellow-300"
                    style={{
                      right: '50%',
                      borderWidth: '2px',
                      borderRadius: '50%',
                    }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border border-yellow-500 dark:border-yellow-300"
                    style={{ left: '50%', borderWidth: '2px', borderRadius: '50%' }}
                    aria-hidden="true"
                  ></div>
                  <ol aria-label="Career timeline entries" className="list-none">
                    {projects.map((project, index) => {
                      // Handle missing project data gracefully
                      if (!project || !project.designation || !project.company || !project.year) {
                        return (
                          <li
                            key={index}
                            className="mb-8 flex justify-between items-center w-full timeline-child"
                          >
                            <div className="order-1 w-5/12"></div>
                            <div className="order-1 w-5/12 px-1 py-4 text-center">
                              <div className="text-yellow-500 dark:text-yellow-300 mb-2">⚠️</div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Project data incomplete
                              </p>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li
                          key={index}
                          aria-label={`Career entry ${index + 1}: ${project.designation} at ${
                            project.company
                          } in ${project.year}`}
                          className={
                            'mb-8 flex justify-between items-center w-full timeline-child focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 rounded-lg' +
                            (index % 2 == 0 ? ' flex-row-reverse left-timeline' : ' right-timeline')
                          }
                        >
                          <div className="order-1 w-5/12"></div>
                          <article
                            className={
                              'order-1 w-5/12 px-1 py-4 focus:outline-none' +
                              (index % 2 != 0 ? ' text-left' : ' text-right')
                            }
                          >
                            <time
                              className="mb-3 text-base text-yellow-600 dark:text-yellow-300"
                              dateTime={project.year}
                              aria-label={`Year: ${project.year}`}
                            >
                              {project.year} | {project.company}
                            </time>
                            <h3
                              className="mb-3 font-bold text-lg md:text-2xl text-gray-900 dark:text-white"
                              id={`timeline-entry-${index}`}
                            >
                              {project.designation}
                            </h3>
                            <div
                              className="text-sm md:text-base leading-snug text-gray-700 dark:text-gray-50 text-opacity-100"
                              aria-labelledby={`timeline-entry-${index}`}
                            >
                              <div className="prose max-w-none pt-8 pb-8 dark:prose-dark career-timeline">
                                <MDXLayoutRenderer
                                  content={project}
                                  toc={project.toc}
                                  authorDetails={author}
                                />
                              </div>
                            </div>
                          </article>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
                <Image
                  alt="Timeline completion indicator showing the end of the career journey"
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  width={300}
                  height={150}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
