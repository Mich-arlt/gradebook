import { BookOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: "Menu",
    key: "mail",
    icon: <MenuUnfoldOutlined />,
  },
  {
    label: "Dla studenta",
    key: "app",
    icon: <BookOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: "Profil studenta",
            key: "setting:1",
          },
          {
            label: "Twoje przedmioty",
            key: "setting:2",
          },
          {
            label: "Twoje oceny końcowe",
            key: "setting:3",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </a>
    ),
    key: "alipay",
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
