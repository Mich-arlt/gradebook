import { BookOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: "Menu",
    icon: <MenuUnfoldOutlined />,
    disabled: true,
  },
  {
    label: "For student",
    key: "app",
    icon: <BookOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Profile",
            key: "setting:1",
          },
          {
            label: "Your subjects",
            key: "setting:2",
          },
          {
            label: "Your final grades",
            key: "setting:3",
          },
        ],
      },
    ],
  },
];
const GBMenu = ({ openModal }) => {
  const onClick = (e) => {
    if (e.key === "setting:1") {
      openModal("searching");
    }
    if (e.key === "setting:2") {
      openModal("subjects");
    }
    if (e.key === "setting:3") {
      openModal("grades");
    }
  };
  return <Menu onClick={onClick} mode="vertical" items={items} theme="dark" />;
};
export default GBMenu;
