import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import Nav from '../components/Nav';

import banner from '../assets/images/banner.jpg';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
const IndexPage = () => (
  <Layout>
    <section id="header">
      <Header />
      <Nav />
      <Footer />
    </section>
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="center">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Read Only</h2>
              <p>
                Just an incredibly simple responsive site
                <br />
                template freebie by <a href="http://html5up.net">HTML5 UP</a>.
              </p>
            </header>
            <p>
              Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus
              col. Commodo id in arcu ante lorem ipsum sed accumsan erat
              praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo.
              Vis aliquet tortor ultricies non ante erat nunc integer eu ante
              ornare amet commetus vestibulum blandit integer in curae ac
              faucibus integer non. Adipiscing cubilia elementum.
            </p>
          </div>
        </section>

        <section id="two">
          <div className="container">
            <h3>Things I Can Do</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer lorem ipsum dolor sit amet.
            </p>
            <ul className="feature-icons">
              <li className="fa-code">Write all the code</li>
              <li className="fa-cubes">Stack small boxes</li>
              <li className="fa-book">Read books and stuff</li>
              <li className="fa-coffee">Drink much coffee</li>
              <li className="fa-bolt">Lightning bolt</li>
              <li className="fa-users">Shadow clone technique</li>
            </ul>
          </div>
        </section>

        <section id="three">
          <div className="container">
            <h3>A Few Accomplishments</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer. Integer eu ante ornare amet commetus.
            </p>
            <div className="features">
              <article>
                <a href="/#" className="image">
                  <img src={pic1} alt="" />
                </a>
                <div className="inner">
                  <h4>Possibly broke spacetime</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic2} alt="" />
                </a>
                <div className="inner">
                  <h4>Terraformed a small moon</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic3} alt="" />
                </a>
                <div className="inner">
                  <h4>Snapped dark matter in the wild</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit
                    integer in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="four">
          <div className="container">
            <h3>Contact Me</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer. Integer eu ante ornare amet commetus.
            </p>
            <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="6"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        className="primary"
                        value="Send Message"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset Form" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    <section id="footer">
      <PageFooter />
    </section>
  </Layout>
);

export default IndexPage;
