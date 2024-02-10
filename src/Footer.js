import React from 'react';

function Footer() {
  return (
    <footer className="bg-footer p-3" style={{ height: '100vh' }}>
      <div className='container-fluid text-white' style={{ backgroundImage: 'url(https://oracollections.com/wp-content/uploads/2021/12/footer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0' }}>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h3 className="text-uppercase mb-4">Welcome to Green Organic</h3>
            <p className="text-white">Located in the heart of serene countryside, Green Organic is a sanctuary of sustainability and natural abundance. We pride ourselves on cultivating premium produce that nourishes both body and soul.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h4 className="text-uppercase mb-4">Explore Our Offerings</h4>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '20px' }}>
                <strong>Organic Fruits:</strong> Bursting with flavor and nutrients, our organic fruits are a delight for the senses.
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>Organic Vegetables:</strong> From crisp greens to vibrant root vegetables, our farm-fresh produce brings wholesome goodness to your table.
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>Non-GMO Products:</strong> Rest assured, our non-GMO products are crafted with care, ensuring purity and integrity in every bite.
              </li>
              <li style={{ marginBottom: '20px' }}>
                <strong>Locally Grown Products:</strong> Support local farmers and embrace community spirit with our locally grown products.
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">Join Our Community</h4>
            <p className="text-light mb-4">Stay connected with Green Organic for exclusive updates, seasonal recipes, and special offers.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" style={{ backgroundColor: "transparent", color: "white", border: "1px solid white" }} />
                <div className="input-group-append">
                  <button className="btn btn-success" type="button">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center text-white small mb-0">Copyright © {new Date().getFullYear()} Green Organic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
