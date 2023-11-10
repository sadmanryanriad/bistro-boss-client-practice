const Footer = () => {
    // Get the current year.
    const currentYear = new Date().getFullYear();
  
    return (
      <>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © {currentYear} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </>
    );
  };
  
  export default Footer;
  