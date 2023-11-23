import { withRoles } from "../../_components/auth/withRoles";
const Home = () => {
  return <div className="text-grayPrimary">Hello moto</div>;
};

export default withRoles(Home, ["A000"]);
