import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubsribeButton';

import styles from './home.module.scss';
import next from 'next';
import Stripe from 'stripe';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    price: string;
    amount: number;

  }

}

export default function Home({ product }: HomeProps) {
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
            <span> for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.price}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1MPnEcCDsmZdymbFRCrsarVU'
  //, {expand: ['product']}
  )

  const product = {
    priceId: price.id,
    amount: price.unit_amount? new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount/100) : null,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24h
  }
}