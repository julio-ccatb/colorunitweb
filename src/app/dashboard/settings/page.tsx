import { redirect } from "next/navigation";
import { ROUTES } from "~/app/_utils/routesEnum";

const SettingPage = () => redirect(ROUTES.SETTINGS_USERS);

export default SettingPage;
