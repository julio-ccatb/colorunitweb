import UserTable from "~/app/_components/tables/users";
import { withRoles } from "../../../_components/auth/withRoles";
const SettingUserPage = () => {
  return (
    <div className="container rounded-box border-base-300  bg-base-100 p-4 shadow">
      <h1 className="mb-4 text-2xl font-bold">Ajustes</h1>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab checked:text-accent"
          aria-label="Usuarios"
          defaultChecked={true}
        />
        <div
          role="tabpanel"
          className="tab-content max-w-[380px] rounded-box border-base-300 bg-base-100 p-6 sm:max-w-full"
        >
          <div className="overflow-x-auto">
            <UserTable />
          </div>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab checked:text-accent"
            aria-label="Roles"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default withRoles(SettingUserPage, ["admin"]);
