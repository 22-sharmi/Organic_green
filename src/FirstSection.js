import React from 'react';


function FirstSection() {
  return (
    <div className="rounded" style={{backgroundImage: 'url(https://youmatter.world/app/uploads/sites/2/2019/02/organic-definition-what.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '50px 0'}}>
      <div className=" container rounded text-center  p-3" style={{backgroundColor: "rgba(205, 205, 205, 0.45)"}}>
        <h1 className="mb-4 fw-bold fst-italic text-white">100% Organic</h1>
        <p className="lead font-monospace text-dark mb-4">Discover the pure goodness of our organically grown products, cultivated with care for your well-being.Indulge in the richness of our organic offerings, carefully nurtured to enhance your health and vitality.</p>
        <button class="btn btn-outline-light me-2" type="button">Learn More</button>
      </div>
    </div>
  );
}

export default FirstSection;
