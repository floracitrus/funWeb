import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default () => (
  <Menu
    theme="dark"
    mode="horizontal"
    style={{ lineHeight: "64px" }}
  >
    <Menu.Item key="1">
      <Link to="/">Home</Link>

    </Menu.Item>

  </Menu>
);
