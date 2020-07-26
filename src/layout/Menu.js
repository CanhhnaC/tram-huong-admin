import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DashboardMenuItem, MenuItemLink } from "react-admin";

import products from "../components/products";
import SubMenu from "./SubMenu";

const Menu = ({ onMenuClick, dense, logout }) => {
  const [state, setState] = useState({ menuProduct: false });
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div>
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <SubMenu
        handleToggle={() => handleToggle("menuProduct")}
        isOpen={state.menuProduct}
        name="Sản phẩm"
        dense={dense}
      >
        <MenuItemLink
          to={`/products`}
          primaryText={`Sản phẩm`}
          leftIcon={<products.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/types`}
          primaryText={`Thể loại`}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
    </div>
  );
};

export default Menu;
