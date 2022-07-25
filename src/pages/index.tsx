/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | intibiome</title>
      </Head>
      <main>
        <img src="/images/banner_hero.png" alt="Banner showing the products" />

        <section>
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

        <section>
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

        <section>
          <h1>our products</h1>

          <div className="our-products-cards">
            <div className="product-card">
              <img src="/images/cards/blue_mask.png" alt="Blue mask" />
            </div>
            <div className="product-card">
              <img src="/images/cards/green_mask.png" alt="Green mask" />
            </div>
            <div className="product-card">
              <img src="/images/cards/pink_mask.png" alt="Pink mask" />
            </div>
          </div>
        </section>

        <img src="/images/masks.png" alt="" />

        <section>
          <h1>keep up to date with our discoveries</h1>

          <div>
            <div>
              <img src="/images/fitness_woman.png" alt="Fitness Woman" />
            </div>

            <div>
              <img src="/images/old_woman.png" alt="Old woman" />
            </div>

            <div>
              <img src="/images/water.png" alt="Raindrops" />
            </div>
          </div>
        </section>

        <div>
          <button type="button">see more</button>
        </div>
      </main>

      <footer>
        <div>
          <a href="/contact-us">contact us</a>
          <a href="/faq">faq</a>
          <a href="/site-map">site map</a>
          <a href="/privacy-policy">privacy policy</a>
          <a href="/cookies-policy">cookies policy</a>
          <a href="/legal-notice">legal notice</a>
        </div>

        <div>
          <img src="/images/logos/ulabs.png" alt="Ulabs" />
          <img src="/images/instagram_icon.png" alt="Instagram Icon" />
        </div>
      </footer>
    </>
  );
};

export default Home;
