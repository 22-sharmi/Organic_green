import React from 'react';

function SecondSection() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card rounded h-100">
            <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/1519856109178_480x480.jpg?v=1601817242" className="card-img-top rounded img-fluid" alt="Organic Tomato"  style={{ height: '200px' }}  />
            <div className="card-body">
              <h5 className="card-title">Organic Tomato</h5>
              <p className="card-text">Delicious and juicy organic tomatoes grown with care in our farms, bursting with flavor and nutrients.</p>
              <a href="#" class="btn btn-outline-success">View Details</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded h-100">
            <img src="https://www.agrifarming.in/wp-content/uploads/2020/07/spinach-1501218_1280.jpg" className="card-img-top rounded img-fluid" alt="Organic Spinach"  style={{ height: '200px' }}  />
            <div className="card-body">
              <h5 className="card-title">Organic Spinach</h5>
              <p className="card-text">Fresh organic spinach, rich in vitamins and minerals, picked at the peak of freshness for your healthy meals.</p>
              <a href="#" class="btn btn-outline-success">View Details</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded h-100">
            <img src="https://media.istockphoto.com/id/1138757396/photo/homegrown-fresh-harvest-of-orange-garden-carrots.jpg?s=612x612&w=0&k=20&c=uSUDoU9OznE55C99HtGyGmIe2sxa_lSYyUpkcIyV2VY=" className="card-img-top rounded img-fluid" alt="Organic Carrots"  style={{ height: '200px' }}  />
            <div className="card-body">
              <h5 className="card-title">Organic Carrots</h5>
              <p className="card-text">Sweet and crunchy organic carrots, packed with antioxidants and essential nutrients, straight from our organic fields.</p>
              <a href="#" class="btn btn-outline-success">View Details</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded h-100">
            <img src="https://i.etsystatic.com/14438497/r/il/e60ac6/4459045812/il_794xN.4459045812_2skk.jpg" className="card-img-top rounded img-fluid"  alt="Organic Bell Pepper"  style={{ height: '200px' }}  />
            <div className="card-body">
              <h5 className="card-title">Organic Bell Pepper</h5>
              <p className="card-text">Vibrant and flavorful organic bell peppers, perfect for adding a pop of color and nutrition to your dishes.</p>
              <a href="#" class="btn btn-outline-success">View Details</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuf7-3Jf-D0I1p3u0BeMlc8uIETWCp_C-bw&usqp=CAU" className="card-img-top rounded img-fluid" alt="Organic Kale"  style={{ height: '200px' }}  />
            <div className="card-body">
              <h5 className="card-title">Organic Kale</h5>
              <p className="card-text">Nutrient-rich organic kale, packed with vitamins and minerals, grown with love and care for your well-being.</p>
              <a href="#" class="btn btn-outline-success">View Details</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded h-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrz0v9z3TEIna1a-75tQmHPCXbdGEzGIjjDA&usqp=CAU" className="card-img-top rounded img-fluid" alt="Organic Broccoli"  style={{ height: '200px' }}  />
            <div className="card-body">
              <h5 className="card-title">Organic Broccoli</h5>
              <p className="card-text">Fresh and crisp organic broccoli, a versatile vegetable that's both delicious and nutritious.</p>
              <a href="#" class="btn btn-outline-success">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
