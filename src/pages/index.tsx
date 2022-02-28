import { GetStaticProps } from 'next'
import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number
  }
}

export default function Home({ product }: HomeProps) {

  console.log(product)

  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world. </h1>
          <p>
            Get acess to all the publications <br />
            <span>form {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

// servidor node do next:
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KYB62Jdhmo0c4H4zeNiorEl', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    // a pagina será atualizada pelo next tirando ela estatica em 24 horas
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
