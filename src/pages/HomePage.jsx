import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div className="flex items-center justify-center">
            <Link
                to="/category?name=All"
                className="text-3xl mt-52 rounded-lg border-2 border-red-800 p-3"
            >
                Click here to see the store
            </Link>
        </div>
    );
};

export default HomePage;
