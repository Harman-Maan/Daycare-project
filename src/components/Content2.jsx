export default function Content2() {
  return (
    <section className="container-fluid text-center content2 ">
      <div className="img-container">
        <img src="public/images/img-5T.png" className="img-rounded bg-img" alt="Cinque Terre" />
      </div>
      <div className="row gy-3">
        <div className="col-12 col-lg-4">
          <div className="card text-bg-dark">
            <img src="public/images/img-8.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="public/images/img-6.jpg" className="rounded-start h-100 w-100" alt="..." style={{ objectFit: "cover" }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card text-bg-success">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Success card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
