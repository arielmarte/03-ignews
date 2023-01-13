import Head from 'next/head';
import { SubscribeButton } from '../components/SubsribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentConteianer}>
        <section className={styles.hero}>
          <span>Hey, Welcome</span>
          <h1>News abou the <span>React</span> world.</h1>
          <p>Get Acess to all the publications <br />
            <span> for $9.90 month</span>
          </p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>

  )
}
