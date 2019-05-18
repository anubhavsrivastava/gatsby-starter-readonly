import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner.jpg';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const sections = [
  { id: 'one', name: 'About' },
  { id: 'two', name: 'Things I Can Do' },
  { id: 'three', name: 'A Few Accomplishments' },
  { id: 'four', name: 'Contact' },
  { id: 'five', name: 'Elements' },
];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
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
        <section id="five">
          <div className="container">
            <h3>Elements</h3>
            <h4>Text</h4>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
              <i>italic</i> and this is <em>emphasized</em>. This is{' '}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code:{' '}
              <code>for (;;) ... </code>. Finally,{' '}
              <a href="/#">this is a link</a>.
            </p>
            <hr />
            <header>
              <h4>Heading with a Subtitle</h4>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <br />
            <h5>
              This started contains all HTML elements
              <br />
              Checkout available styling
              <Link to="/Element"> here</Link>
            </h5>
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
