import { NavLink } from "react-router-dom";

export default function NavItem({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <NavLink
          activeClassName="bg-primary"
          exact
          to={item.url}
          key={index}
          className={`flex items-center justify-end px-2 py-2 cursor-pointer`}
        >
          <h3 className="mr-2">{item.label}</h3>
          {item.icon}
        </NavLink>
      ))}
    </>
  );
}
