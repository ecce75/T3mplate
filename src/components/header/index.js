const Header = () => {
  return (
    <div className="header">
      <div className="t3mplate">
        <span className="heading">T3mplate</span>
        <span className="sub-text">Making Physiotherapy Easier</span>
        <div className="btn-container">
        <button class="btn">Explore</button>
        </div>
      </div>
      <div className="auth-container">
        <a className="auth-link" href="/">
          Login
        </a>
        <a className="auth-link" href="/">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Header;
