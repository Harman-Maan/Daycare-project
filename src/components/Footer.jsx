export default function Footer() {
  return (
    <footer className="container-fluid ff-averia">
      <div className="row">
        <div className="col-lg">
          <ul>
            <li className="brand-name mb-3 me-2">
              <img src="./logo/logo.png" alt="Logo" width="30" className="d-inline-block align-text-top img-fluid" /> <span className="">Daycare</span>
            </li>
            <li>Designed for mothers to find professional Daycare</li>
            <li>Code licensed by XYZ</li>
            <li>Version 0.0.1</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul>
            <li className="fw-bold fs-6">Links</li>
            <li>About</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul>
            <li className="fw-bold fs-6">Contact</li>
            <li>info@example.com</li>
            <li>456 123 3456</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
