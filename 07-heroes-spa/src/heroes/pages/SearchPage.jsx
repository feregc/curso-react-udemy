import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Search a hero..."
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />


          {q === ''
          ? 
          (
            <div className="alert alert-info animate__animated animate__fadeIn">Search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No heros with <b> {q} </b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
