import React from "react";
import Layout from "../layout";



export default function Home() {
  return (
    <Layout>
      <section id="hero"> <br />
        <h3 className=" fw-bold fs-3 text-white">Welcome to Rolex</h3> <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="lead fw-light fs-1 text-white"><h1>No price over time, <br /> but time is precious</h1></div><br /><br /><br /><br /><br />
      </section>

      <section id="about">
        <p>About Us</p> <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>The best watches are here,<br /> cheap and quality!!!</h1>
            </div>
            <div className="col-md-6">
              Rolex SA is a Swiss manufacturer of luxury watchmakers. The Rolex concept is luxury, such as using gold, silver, crystal materials in its watches. Explore the prestigious and high-precision collection of Rolex timepieces.<br /><br /> Rolex offers a wide variety of Classic and Professional watch styles to suit any wrist.<br /><br /> Browse the wide selection of Rolex timepieces to find the perfect blend of style and functionality.<br /><br /><br />
            </div>
          </div>
        </div>
      </section>

      <section id="product">
        <div>
          <h2 className="d-flex justify-content-center border-bottom">Our Product</h2>
        </div>
        <div className="container">
          <div className="row text-product justify-content-center text-justify">
            <div className="col-md-8">
              <h2>AIR-KING</h2><br />
              <p className="fw-light">Oyster, 40 mm, Oystersteel</p><br />
              <p className="text-justify">With a  40mm  case  of  oystersteel, a solid-case based oyster bracelet with oysterclasp, and an  are  the characteristics black disal, the air-king perserves the aerosperous heritage of the first rolex oyster.The Air-King dial features a distinctive black dial with a combination of large 3, 6, and 9 numerals marking the hours and a prominent minute scale for navigational time readings.</p> <br /><br />
              <button type="button" class="btn btn-secondary">Detail</button>
            </div>
            <div className="col-md-4 product-img-box">
              <img src="/assets/imgjam/AIR-KING.webp" alt="'menu 1" />
            </div>
          </div>

          <div className="row justify-content-center text-justify">
            <div className="col-md-8 order-2">
              <h2>SUBMARINER</h2><br />
              <p className="fw-light" >Oyster, 41 mm, Oystersteel</p><br />
              <p >Whe Oyster Perpetual Submariner From Oystersteel With A Black Ceramic Cerachrom Bezel Insert And A Black Dial With Large luminescent hour markers.It features a clockwise rotatable bezel and a solid-link Oyster bracelet. The new generation Submariner and Submariner Date retain similarities to the first model launched in 1953.</p> <br /><br />
              <button type="button" class="btn btn-secondary">Detail</button>
            </div>
            <div className="col-md-4 order-1 product-img-box">
              <img src="/assets/imgjam/SUBMARINER.webp" alt="'menu 1" />
            </div>
          </div>

          <div className="row justify-content-center text-justify">
            <div className="col-md-8">
              <h2>CELLINI MOONPHASE</h2><br />
              <p className="fw-light">18 ct Everose gold, 39 mm, polished look</p><br />
              <p>Cellini moonphase in 18 k everose gold with a leather strap. This model features an exclusive view of the different phases of the moon. White Dial with blue enamel disc at 6 o'clock indicates lunar cycle, full moon depicted with meteor applique.</p> <br /><br />
              <button type="button" class="btn bg-btn btn-secondary">Detail</button>
            </div>
            <div className="col-md-4 product-img-box">
              <img src="/assets/imgjam/CELLINI MOONPHASE.webp" alt="'menu 1" />
            </div>
          </div>

          <div className="row justify-content-center text-justify">
            <div className="col-md-8 order-2">
              <h2>GMT MASTER II</h2><br />
              <p className="fw-light">Oyster, 40 mm, Oystersteel</p><br />
              <p>The oyster perpetual gmt-master ii in oystersteel with the oyster bracelet.This model features a black dial and a Cerachrom bezel Insert in green and black ceramic. Designed to show the time of two different time zones simultaneously during intercontinental flights, the GMT-Master II has been acclaimed for its ruggedness and versatile appearance.</p> <br /><br />
              <button type="button" class="btn btn-secondary">Detail</button>
            </div>
            <div className="col-md-4 order-1 product-img-box">
              <img src="/assets/imgjam/GMT-MASTER II.webp" alt="'menu 1" />
            </div>
          </div>

          <div className="row justify-content-center text-justify">
            <div className="col-md-8">
              <h2>MILGAUSS</h2><br />
              <p className="fw-light">Oyster, 40 mm, Oystersteel</p><br />
              <p>The Oyster perpetual milgauss features a z-blue dial with luminescent hour markers and a green sapphire crystal that gives the face a unique hue.With clean lines and an evocative orange second hand, shaped like a thunderbolt to echo the first model, the Milgauss is instantly recognizable at a glance.</p> <br /><br />
              <button type="button" class="btn btn-secondary">Detail</button>
            </div>
            <div className="col-md-4 product-img-box">
              <img src="/assets/imgjam/MILGAUSS.webp" alt="'menu 1" />
            </div>
          </div>

          <div className="row justify-content-center text-justify">
            <div className="col-md-8 order-2">
              <h2>YACHT MASTER 42</h2><br />
              <p className="fw-light">Oyster, 40 mm, Oystersteel</p><br />
              <p>The oyster perpetual yacht-master 42 in 18 k yellow gold, with a black disal, and oysterflex bracelet. This model features a bidirectional rotatable 60-minute graduated bezel with matt black Cerachrom insert in ceramic, raised and polished graduation numerals, complementing the dial perfectly.</p> <br /><br />
              <button type="button" class="btn btn-secondary">Detail</button>
            </div>
            <div className="col-md-4 order-1 product-img-box">
              <img src="/assets/imgjam/YACHT-MASTER 42.webp" alt="'menu 1" />
            </div>
          </div>

        </div>
      </section>
      <section id="contact">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="row contact-subs div-subs rounded-4 py-3 px-sm-5 align-items-center flex-column flex-sm-row">
            <div className="col-sm-6 text-white align-items-center mb-2">
              <h5>Subscribe to our promo</h5>
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div className="col-sm-6 align-items-center">
              <div className="input-group align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input your email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Discover Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
