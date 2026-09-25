import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import CoursesGrid from '../components/courses';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil | ${siteConfig.title}`}
      >
      <main>
        <CoursesGrid />
      </main>
    </Layout>
  );
}
