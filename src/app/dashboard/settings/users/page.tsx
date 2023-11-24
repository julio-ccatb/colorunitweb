"use client";
import { withRoles } from "../../../_components/auth/withRoles";
const SettingUserPage = () => {
  // const users: UserWithRelations[] = [];
  let option = 1;
  const setOption = (opt: number) => (option = opt);

  return (
    <div className="container rounded-box border-base-300  bg-base-100 p-4 shadow">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Usuarios"
          checked={option === 1}
          onChange={() => setOption(1)}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        ></div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked={option === 2}
          onChange={() => setOption(2)}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default withRoles(SettingUserPage, ["admin"]);
