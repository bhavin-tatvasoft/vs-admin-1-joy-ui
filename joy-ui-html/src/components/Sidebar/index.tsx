import { Avatar, List, ListItem, Typography } from "@mui/joy";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {
  chartActiveIc,
  chartDefaultIc,
  dashboardActiveIc,
  dashboardDefaultIc,
  innerpageActiveIc,
  innerpageDefaultIc,
  logo,
  reportActiveIc,
  reportDefaultIc,
  settingActiveIc,
  settingDefaultIc,
  taskActiveIc,
  taskDefaultIc,
} from "../../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

function Sidebar() {
  function closeSidebar() {
    document.body.classList.remove("open-sidebar");
  }
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);
  const removeSidebar = () => {
    document.body.classList.remove("open-sidebar");
  };
  return (
    <>
      <div className="overlay" onClick={removeSidebar}></div>
      <div className="sidebar">
        <NavLink
          to="/"
          title="Logo"
          className="logo"
          data-aos="fade-in"
          data-aos-delay="100"
          onClick={closeSidebar}
        >
          <Avatar src={logo} alt="Logo" />
        </NavLink>
        <List>
          <ListItem data-aos="fade-right" data-aos-delay="200">
            <NavLink to="/dashboard" title="Dashboard" onClick={closeSidebar}>
              <Avatar src={dashboardDefaultIc} alt="Dashboard" />
              <Avatar src={dashboardActiveIc} alt="Dashboard" />
              <Typography level="body4">Dashboard</Typography>
            </NavLink>
          </ListItem>
          <ListItem data-aos="fade-right" data-aos-delay="300">
            <NavLink to="/innerpage" title="Innerpage" onClick={closeSidebar}>
              <Avatar src={innerpageDefaultIc} alt="Innerpage" />
              <Avatar src={innerpageActiveIc} alt="Innerpage" />
              <Typography level="body4">Innerpage</Typography>
            </NavLink>
          </ListItem>
          <ListItem data-aos="fade-right" data-aos-delay="400">
            <NavLink to="/" title="Tasks" onClick={closeSidebar}>
              <Avatar src={taskDefaultIc} alt="Tasks" />
              <Avatar src={taskActiveIc} alt="Tasks" />
              <Typography level="body4">Tasks</Typography>
            </NavLink>
          </ListItem>
          <ListItem data-aos="fade-right" data-aos-delay="500">
            <NavLink to="/" title="Setting" onClick={closeSidebar}>
              <Avatar src={settingDefaultIc} alt="Setting" />
              <Avatar src={settingActiveIc} alt="Setting" />
              <Typography level="body4">Setting</Typography>
            </NavLink>
          </ListItem>
          <ListItem data-aos="fade-right" data-aos-delay="600">
            <NavLink to="/" title="Report" onClick={closeSidebar}>
              <Avatar src={reportDefaultIc} alt="Report" />
              <Avatar src={reportActiveIc} alt="Report" />
              <Typography level="body4">Report</Typography>
            </NavLink>
          </ListItem>
          <ListItem data-aos="fade-right" data-aos-delay="700">
            <NavLink to="/" title="Chart" onClick={closeSidebar}>
              <Avatar src={chartDefaultIc} alt="Chart" />
              <Avatar src={chartActiveIc} alt="Chart" />
              <Typography level="body4">Chart</Typography>
            </NavLink>
          </ListItem>
        </List>
      </div>
    </>
  );
}
export default Sidebar;
