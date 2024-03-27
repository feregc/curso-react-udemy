export const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
          <i className="fa fa-calendar-alt"></i>
          &nbsp;
          Fernando
        </span>

        <button className="btn btn-outline-danger">
          <i className="fa fa-sign-out-alt"></i>
          &nbsp;
          <span>Salir</span>
        </button>
      </div>
    </>
  );
};
