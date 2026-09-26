import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer no-print">
      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="brand">
            <span className="brand-mark">UoVT</span>
            <span className="brand-text">
              Job - Portal
              <small>University of Vocational Technology</small>
            </span>
          </div>
          <p className="footer-desc">
            Empowering students and graduates with vocational career opportunities.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>University of Vocational Technology</p>
          <p>Ratmalana, Sri Lanka</p>
          <p>Email: info@uovt.ac.lk</p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} UoVT Job Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}