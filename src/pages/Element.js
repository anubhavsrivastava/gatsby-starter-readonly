import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar'; 
import banner from '../assets/images/banner.jpg';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import avatar from '../assets/images/avatar.png';

const sections = [
   { id: 'one', name: 'Text' },
   { id: 'two', name: 'Lists' },
   { id: 'three', name: 'Table' },
   { id: 'four', name: 'Buttons' },
   { id: 'five', name: 'Form' },
   { id: 'six', name: 'Image' },
   
];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
      <section >
          <div className="container">
            <h3>Elements</h3>

            <section id="one">
              <h4>Text</h4>
              <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
              This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code: <code>for (;;) ... </code>. Finally, <a href="/#">this is a link</a>.</p>
              <hr />
              <header>
                <h4>Heading with a Subtitle</h4>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <header>
                <h5>Heading with a Subtitle</h5>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
              <hr />
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
              <h5>Blockquote</h5>
              <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
              <h5>Preformatted</h5>
              <pre><code>i = 0;

while (!deck.isInOrder()) 
print 'Iteration ' + i;
deck.shuffle();
i++;


print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
            </section>

            <section id="two">
              <h4>Lists</h4>
              <div className="row">
                <div className="col-6 col-12-xsmall">
                  <h5>Unordered</h5>
                  <ul>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>
                  <h5>Alternate</h5>
                  <ul className="alt">
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>
                </div>
                <div className="col-6 col-12-xsmall">
                  <h5>Ordered</h5>
                  <ol>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Etiam vel felis at lorem sed viverra.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Etiam vel felis at lorem sed viverra.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ol>
                  <h5>Icons</h5>
                  <ul className="icons">
                    <li><a href="/#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="/#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="/#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="/#" className="icon fa-github"><span className="label">Github</span></a></li>
                    <li><a href="/#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                    <li><a href="/#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                  </ul>
                </div>
              </div>
              <h5>Actions</h5>
              <ul className="actions">
                <li><a href="/#" className="button primary">Default</a></li>
                <li><a href="/#" className="button">Default</a></li>
                <li><a href="/#" className="button alt">Default</a></li>
              </ul>
              <ul className="actions small">
                <li><a href="/#" className="button primary small">Small</a></li>
                <li><a href="/#" className="button small">Small</a></li>
                <li><a href="/#" className="button alt small">Small</a></li>
              </ul>
              <div className="row">
                <div className="col-3 col-6-medium col-12-xsmall">
                  <ul className="actions stacked">
                    <li><a href="/#" className="button primary">Default</a></li>
                    <li><a href="/#" className="button">Default</a></li>
                    <li><a href="/#" className="button alt">Default</a></li>
                  </ul>
                </div>
                <div className="col-3 col-6 col-12-xsmall">
                  <ul className="actions stacked">
                    <li><a href="/#" className="button primary small">Small</a></li>
                    <li><a href="/#" className="button small">Small</a></li>
                    <li><a href="/#" className="button alt small">Small</a></li>
                  </ul>
                </div>
                <div className="col-3 col-6-medium col-12-xsmall">
                  <ul className="actions stacked">
                    <li><a href="/#" className="button primary fit">Default</a></li>
                    <li><a href="/#" className="button fit">Default</a></li>
                    <li><a href="/#" className="button alt fit">Default</a></li>
                  </ul>
                </div>
                <div className="col-3 col-6-medium col-12-xsmall">
                  <ul className="actions stacked">
                    <li><a href="/#" className="button primary small fit">Small</a></li>
                    <li><a href="/#" className="button small fit">Small</a></li>
                    <li><a href="/#" className="button alt small fit">Small</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="three">
              <h4>Table</h4>
              <h5>Default</h5>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <h5>Alternate</h5>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item One</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Two</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Three</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item Four</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item Five</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2"></td>
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            <section id="four">
              <h4>Buttons</h4>
              <ul className="actions">
                <li><a href="/#" className="button primary">Primary</a></li>
                <li><a href="/#" className="button">Default</a></li>
                <li><a href="/#" className="button alt">Alternate</a></li>
              </ul>
              <ul className="actions">
                <li><a href="/#" className="button primary large">Large</a></li>
                <li><a href="/#" className="button">Default</a></li>
                <li><a href="/#" className="button alt small">Small</a></li>
              </ul>
              <ul className="actions fit">
                <li><a href="/#" className="button primary fit">Fit</a></li>
                <li><a href="/#" className="button fit">Fit</a></li>
                <li><a href="/#" className="button alt fit">Fit</a></li>
              </ul>
              <ul className="actions fit small">
                <li><a href="/#" className="button primary fit small">Fit + Small</a></li>
                <li><a href="/#" className="button fit small">Fit + Small</a></li>
                <li><a href="/#" className="button alt fit small">Fit + Small</a></li>
              </ul>
              <ul className="actions">
                <li><a href="/#" className="button primary icon fa-download">Icon</a></li>
                <li><a href="/#" className="button icon fa-download">Icon</a></li>
                <li><a href="/#" className="button alt icon fa-check">Icon</a></li>
              </ul>
              <ul className="actions">
                <li><span className="button primary disabled">Primary</span></li>
                <li><span className="button disabled">Default</span></li>
                <li><span className="button alt disabled">Alternate</span></li>
              </ul>
            </section>

            <section id="five">
              <h4>Form</h4>
              <form method="post" action="#">
                <div className="row gtr-uniform">
                  <div className="col-6 col-12-xsmall">
                    <input type="text" name="demo-name" id="demo-name" onChange={()=>({})} value="" placeholder="Name" />
                  </div>
                  <div className="col-6 col-12-xsmall">
                    <input type="email" name="demo-email" id="demo-email" onChange={()=>({})} value="" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <select name="demo-category" id="demo-category">
                      <option value="">- Category -</option>
                      <option value="1">Manufacturing</option>
                      <option value="1">Shipping</option>
                      <option value="1">Administration</option>
                      <option value="1">Human Resources</option>
                    </select>
                  </div>
                  <div className="col-4 col-12-medium">
                    <input type="radio" id="demo-priority-low" onChange={()=>({})} name="demo-priority" checked />
                    <label htmlFor="demo-priority-low">Low Priority</label>
                  </div>
                  <div className="col-4 col-12-medium">
                    <input type="radio" id="demo-priority-normal" name="demo-priority" />
                    <label htmlFor="demo-priority-normal">Normal Priority</label>
                  </div>
                  <div className="col-4 col-12-medium">
                    <input type="radio" id="demo-priority-high" name="demo-priority" />
                    <label htmlFor="demo-priority-high">High Priority</label>
                  </div>
                  <div className="col-6 col-12-medium">
                    <input type="checkbox" id="demo-copy" name="demo-copy" />
                    <label htmlFor="demo-copy">Email me a copy of this message</label>
                  </div>
                  <div className="col-6 col-12-medium">
                    <input type="checkbox" id="demo-human" name="demo-human" onChange={()=>({})} checked />
                    <label htmlFor="demo-human">I am a human and not a robot</label>
                  </div>
                  <div className="col-12">
                    <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li><input type="submit" onChange={()=>({})} value="Send Message" /></li>
                      <li><input type="reset" onChange={()=>({})} value="Reset" className="alt" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </section>

            <section id="six">
              <h4>Image</h4>
              <h5>Fit</h5>
              <span className="image fit"><img src={banner} alt="" /></span>
              <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                  <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic3} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic1} alt="" /></span></div>
                  <div className="col-4"><span className="image fit"><img src={pic2} alt="" /></span></div>
                </div>
              </div>
              <h5>Left &amp; Right</h5>
              <p><span className="image left"><img src={avatar} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
              <p><span className="image right"><img src={avatar} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
            </section>

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
