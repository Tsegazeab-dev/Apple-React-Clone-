import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1224/iphones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  console.log(products);
  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((productInfo) => {
            let text = 1;
            let img = 2;
            if (flip) {
              flip = !flip;
            } else {
              text = 2;
              img = 1;
              flip = !flip
            }

            return (
              <div
                key={productInfo.product_id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${text}`}>
                  <div className="product-title">
                    {productInfo.product_name}
                  </div>
                  <div className="product-brief">
                    {productInfo.product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${productInfo.starting_price}`}
                  </div>
                  <div className="monthly-price">{productInfo.price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${productInfo.product_url}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${img}`}>
                  <div className="prodict-image">
                    <img src={productInfo.product_img} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
