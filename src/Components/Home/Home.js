import MovieLists from "../MovieList/MovieLists";
import NavBar from "../Navbar/NavBar";

const Home = () => {
    return (
        <div className="home">
             <NavBar/>
             <MovieLists/>
        </div>
    );
};

export default Home;