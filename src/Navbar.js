const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="blog-name">
        <h2>BLOGIFY</h2>
      </div>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/">about</a>
        </li>
        <li>
          <a href="/">services</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
