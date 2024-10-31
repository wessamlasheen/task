import { ROUTES } from "../../constants/routes";
import logo from "../../assets/imgs/logo.png";
import homeIcon from "../../assets/imgs/svg/Vector (1).svg";
import ProfileIcon from "../../assets/imgs/svg/Vector (2).svg";
import dashIcon from "../../assets/imgs/svg/Group.svg";
import usersIcon from "../../assets/imgs/svg/Group (1).svg";
import notificationIcon from "../../assets/imgs/svg/Group (2).svg";
import wishlistIcon from "../../assets/imgs/svg/Group (3).svg";
import storyIcon from "../../assets/imgs/svg/Group (4).svg";
import Icon5 from "../../assets/imgs/svg/Group (5).svg";
import Icon6 from "../../assets/imgs/svg/Group (6).svg";
import Icon7 from "../../assets/imgs/svg/Group (7).svg";
import setting from "../../assets/imgs/svg/setting.svg";
import theme from "../../assets/imgs/svg/theme.svg";
import shutdown from "../../assets/imgs/svg/shutdown.svg";
import searchIcon from "../../assets/imgs/svg/search.svg";
import user from "../../assets/imgs/svg/user.svg";
import homeSecond from "../../assets/imgs/svg/homeSecond.svg";
import bell from "../../assets/imgs/svg/bell.svg";
import Home from "../../pages/Home/Index";

const navItems = [
  { route: ROUTES.main, label: "Home", icon: homeIcon, isActive: true },
  { route: ROUTES.Profile, label: "profile", icon: ProfileIcon },
  { route: ROUTES.dashboard, label: "Dashboard", icon: dashIcon },
  { route: ROUTES.users, label: "users", icon: usersIcon },
  {
    route: ROUTES.notifications,
    label: "notification",
    icon: notificationIcon,
  },
  { route: ROUTES.wishlist, label: "wishlist", icon: wishlistIcon },
  { route: ROUTES.story, label: "story", icon: storyIcon },
  { route: ROUTES.cart, label: "Icon5", icon: Icon5 },
  { route: ROUTES.charts, label: "Icon6", icon: Icon6 },
  { route: ROUTES.anaysis, label: "Icon7", icon: Icon7 },
];
const footerIcons = [{ icon: setting }, { icon: theme }, { icon: shutdown }];

const MainLayout = () => {
  return (
    <main className="flex">
      <aside className="w-[78px] flex-shrink-0 bg-primary rounded-tr-[30px] rounded-br-[30px] text-white flex flex-col items-center">
        <div className="mb-[65px] mt-[29px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] h-[61px] object-cover"
          />
        </div>

        <nav className="flex flex-col gap-4 ">
          {navItems.map((item) => (
            <a
              key={item.route}
              href={item.route}
              className={`p-[10px] rounded-[10px] ${
                item.isActive ? "bg-secondary" : ""
              }`}
            >
              <span>
                <img src={item.icon} alt={`${item.label} icon`} />
              </span>
            </a>
          ))}
        </nav>

        <div className="flex flex-col space-y-[35px] mt-auto mb-4">
          {footerIcons.map((ele, index) => (
            <img key={index} src={ele.icon} alt="Footer icon" />
          ))}
        </div>
      </aside>

      <div className="flex flex-col flex-1  pl-[26px] pr-[17px]">
        <header className="bg-white   flex gap-[460px] items-center">
          <div className="flex items-center space-x-4 mt-[54px]">
            <a
              href={ROUTES.main}
              className="flex gap-[6px] py-[18px] px-8 rounded-tl-[10px] rounded-tr-[10px] bg-[#F8F7F7]"
            >
              <img src={homeSecond} alt="Home icon" className="h-6 w-6 " />
              <span className="text-xl font-semibold  text-secondary">
                Home
              </span>
            </a>
          </div>

          <div className="flex items-center ">
            <div className="relative mr-[14px]">
              <input
                type="text"
                placeholder="Search..."
                className="text-base font-medium text-[#7F7F7F] border border-[#7F7F7F] rounded-[10px] h-[61px] w-[469px] pl-[17px] focus:outline-none"
              />
              <img
                src={searchIcon}
                alt="Search icon"
                className="absolute right-[18px] top-1/2 transform -translate-y-1/2 h-6 w-6"
              />
            </div>
            <button className="mr-[10px] hover:bg-gray-100 rounded-full">
              <img src={bell} alt="Notifications" className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <img src={user} alt="User icon" className="h-6 w-6" />
              <span className="font-medium text-base text-[#493421]">
                Rawiaa mukhtar
              </span>
            </div>
          </div>
        </header>

        <div className="overflow-y-auto">
          <Home />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
