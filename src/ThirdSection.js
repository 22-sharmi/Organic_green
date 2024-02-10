import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faLeaf, faCarrot, faWater, faWind } from '@fortawesome/free-solid-svg-icons';

function ThirdSection() {
  return (
    <>
      <div className="rounded"style={{backgroundImage: 'url(https://cdn.sanity.io/images/0vv8moc6/chroma/5c8b25d3afa89f2840578339bea8e7fd8716c233-4294x1652.jpg?fit=crop&auto=format)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '50px 0'}}>
        <div className="container rounded text-center p-3 bg-overlay"style={{backgroundColor: "rgba(205, 205, 205, 0.45)"}}>
          <h1 className="mb-4 fw-bold fst-italic text-white">Nourish with Natural Goodness</h1>
          <p className="lead font-monospace text-dark mb-4">Experience the nourishing power of our fresh and non-GMO products, cultivated with care to bring you the purest taste of nature. Far from the hustle and bustle of modern life, our produce is a testament to our commitment to quality and sustainability.</p>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card rounded h-100 position-relative">
              <FontAwesomeIcon icon={faSeedling} className="card-icon" style={{ color: 'green', fontSize: '30px', position: 'absolute', top: '5px', left: '5px' }} />
              <div className="card-body">
                <h5 className="card-title mt-4">Farm-to-Table Delights</h5>
                <p className="card-text">Indulge in the freshest produce straight from our farms, carefully curated to bring the taste of nature to your table. Our commitment to quality ensures each bite is a burst of flavor and nutrition.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded h-100 position-relative">
              <FontAwesomeIcon icon={faLeaf} className="card-icon" style={{ color: 'green', fontSize: '30px', position: 'absolute', top: '5px', left: '5px' }} />
              <div className="card-body">
                <h5 className="card-title mt-4">Harvested with Care</h5>
                <p className="card-text">Experience the difference with vegetables harvested with meticulous attention to detail. From field to plate, our commitment to quality shines through in every bite, ensuring you get the best of nature's bounty.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded h-100 position-relative">
              <FontAwesomeIcon icon={faCarrot} className="card-icon" style={{ color: 'green', fontSize: '30px', position: 'absolute', top: '5px', left: '5px' }} />
              <div className="card-body">
                <h5 className="card-title mt-4">Purely Organic Goodness</h5>
                <p className="card-text">Savor the pure essence of organic vegetables, nurtured in harmony with nature for unparalleled freshness and taste. Each vegetable is a testament to our dedication to sustainability and quality.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded h-100 position-relative">
              <FontAwesomeIcon icon={faWater} className="card-icon" style={{ color: 'green', fontSize: '30px', position: 'absolute', top: '5px', left: '5px' }} />
              <div className="card-body">
                <h5 className="card-title mt-4">Nourish with Nature's Elixir</h5>
                <p className="card-text">Quench your thirst with our alkaline water, enriched with essential minerals to replenish and revitalize your body. Experience hydration at its purest, straight from nature's well.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded h-100 position-relative">
              <FontAwesomeIcon icon={faWind} className="card-icon" style={{ color: 'green', fontSize: '30px', position: 'absolute', top: '5px', left: '5px' }} />
              <div className="card-body">
                <h5 className="card-title mt-4">Breathe Easy, Live Better</h5>
                <p className="card-text">Immerse yourself in the crisp freshness of pure air, revitalizing your body and mind with every breath. Our commitment to sustainability ensures you can enjoy the benefits of clean air, wherever you are.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
