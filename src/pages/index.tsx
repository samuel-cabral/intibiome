/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';
import classNames from 'classnames';
import { BannerHero } from '../components/BannerHero';
import { Card } from '../components/Card';

import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | intibiome</title>
      </Head>

      <main className={styles.contentContainer}>
        <BannerHero
          responsive
          imagePaths={{
            large: '/images/banners/banner_hero.png',
            small: '/images/banners/banner-intibiome-02@2x.png',
          }}
        />

        <section className={styles.section}>
          <h1>we’re here to help</h1>

          <p>
            When it comes to caring for our most intimate areas, we’ve lost our
            connection.
          </p>

          <p>
            Embarrassed, unwilling, or unable to communicate with others, we’re
            needlessly neglecting the parts of our bodies that need it most.
          </p>

          <p>
            We’re here to help. Providing you with the expertise, knowledge and
            products you need to feel confident in your personal care.
          </p>

          <img src="/images/icons/icons.png" alt="Icons" />
        </section>

        <section className={styles.section}>
          <h1>
            whatever your age. whatever your lifestyle. whatever your interests
          </h1>

          <p>
            Co-created with gynaecologists, our revolutionary products have been
            expertly developed to support your intimate microbiome and pH
            balance, and strengthen overall natural health.
          </p>

          <p>
            As the experts in intimate hygiene, we want to bring discussion
            about intimate wellness care out of the dark and demystify the
            taboos that surround it.
          </p>
        </section>

        <section className={classNames(styles.section, styles.products)}>
          <h1>our products</h1>

          <div className={styles.cardsWrapper}>
            <Card title="wellness" bgTitleColor="blue">
              <img src="/images/cards/blue_mask.png" alt="Blue mask" />
              <p>intibiome wellness daily intimate wash</p>
            </Card>
            <Card title="active" bgTitleColor="green">
              <img src="/images/cards/green_mask.png" alt="Green mask" />
              <p>intibiome active extra protection intimate wash</p>
            </Card>
            <Card title="agecare" bgTitleColor="red">
              <img src="/images/cards/pink_mask.png" alt="Pink mask" />
              <p>intibiome agecare dryness relief intimate wash</p>
            </Card>
          </div>
        </section>

        <BannerHero
          responsive
          imagePaths={{
            small: 'images/banners/banner-intibiome-05@2x.png',
            large: 'images/masks.png',
          }}
        />

        <section className={styles.section}>
          <h1>keep up to date with our discoveries</h1>

          <div className={styles.cardsWrapper}>
            <Card>
              <img src="/images/fitness_woman.png" alt="Fitness Woman" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>

            <Card>
              <img src="/images/old_woman.png" alt="Old woman" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>

            <Card>
              <img src="/images/water.png" alt="Raindrops" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </div>
        </section>

        <div className={styles.seeMoreButtonContainer}>
          <button type="button" className={styles.seeMoreButton}>
            see more
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
