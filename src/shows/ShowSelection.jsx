import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return ( 
   <nav className="show">
     {shows.map ((show) => (
      <a
         key={show.name}
         href="#"
         className="show"
         onClick={(e) => {
          e.preventDefault();
          setSelectedShow(show);
         }}
      >
        {show.name}
      </a>   
    ))}
  </nav>
  );
}
