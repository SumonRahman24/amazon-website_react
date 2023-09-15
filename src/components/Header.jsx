import "./Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src="../../public/images/logo.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/order-review">Order Review</a>
          </li>
          <li>
            <a href="/manage-inventory">Manage Inventory</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
