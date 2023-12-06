import { redirect } from "next/navigation";
import { ROUTES } from "./_utils/routesEnum";

const Home = () => {
  redirect(ROUTES.LOGIN);
};

export default Home;
