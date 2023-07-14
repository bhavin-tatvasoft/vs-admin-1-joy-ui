import {
  Avatar,
  Badge,
  IconButton,
  Input,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Sheet,
  Typography,
} from "@mui/joy";
import { Hidden } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  alertIc,
  arrowDownIc,
  messageIc,
  userIcon,
  notificationIc,
  searchIc,
  userProfile,
  logoutIc,
  searchPrimaryIc,
  menuWhiteIc,
  mobileLogo,
} from "../../assets/images";

const toggleSidebar = () => {
  document.body.classList.toggle("open-sidebar");
};
const toggleSearch = () => {
  document.body.classList.toggle("open-search");
};
function Header() {
  const notificationRef = React.useRef(null);
  const [openNotification, setOpenNotification] = React.useState(false);
  const handleNotificationClose = () => {
    setOpenNotification(false);
  };
  const messageRef = React.useRef(null);
  const [openMessage, setOpenMessage] = React.useState(false);
  const handleMessageClose = () => {
    setOpenMessage(false);
  };
  const profileRef = React.useRef(null);
  const [openProfile, setOpenProfile] = React.useState(false);
  const handleProfileClose = () => {
    setOpenProfile(false);
  };

  return (
    <Sheet className="header">
      <div className="search-overlay" onClick={toggleSearch}></div>
      <Hidden mdUp>
        <Sheet className="header-left">
          <IconButton variant="solid" color="primary" onClick={toggleSidebar}>
            <Avatar src={menuWhiteIc} alt="Hamburger" />
          </IconButton>
          <Link href="#" title="Logo">
            <Avatar src={mobileLogo} alt="Logo" />
          </Link>
        </Sheet>
      </Hidden>
      <form action="" className="form-wrapper">
        <Input
          placeholder="Search"
          type="search"
          endDecorator={
            <IconButton variant="solid" color="primary">
              <Avatar src={searchIc} alt="Search" />
            </IconButton>
          }
        />
      </form>
      <List>
        <Hidden mdUp>
          <ListItem>
            <IconButton
              className="icon-btn"
              variant="outlined"
              color="primary"
              onClick={toggleSearch}
            >
              <Avatar src={searchPrimaryIc} alt="Search" />
            </IconButton>
          </ListItem>
        </Hidden>
        <ListItem>
          <Badge badgeContent={2}>
            <IconButton
              ref={notificationRef}
              id="notification-menu"
              className="icon-btn"
              aria-controls={"notification"}
              aria-haspopup="true"
              aria-expanded={openNotification ? "true" : undefined}
              variant="outlined"
              color="primary"
              onClick={() => {
                setOpenNotification(!openNotification);
              }}
            >
              <Avatar src={notificationIc} alt="Notification" />
            </IconButton>
          </Badge>
          <Menu
            id="notification"
            anchorEl={notificationRef.current}
            open={openNotification}
            className="header-menu"
            placement="bottom-end"
            onClose={handleNotificationClose}
            aria-labelledby="notification-menu"
          >
            <MenuItem>Notification</MenuItem>
            <MenuItem onClick={handleNotificationClose}>
              <List>
                <ListItem>
                  <Link href="#" title="Notification">
                    <Sheet className="img-block">
                      <Avatar src={alertIc} alt="Notification" />
                    </Sheet>
                    <Sheet className="notification-content">
                      <Typography level="body1">
                        Lorem Ipsum Dummy Text
                      </Typography>
                      <Typography level="body4">1m ago</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Notification">
                    <Sheet className="img-block">
                      <Avatar src={alertIc} alt="Notification" />
                    </Sheet>
                    <Sheet className="notification-content">
                      <Typography level="body1">
                        Lorem Ipsum Dummy Text
                      </Typography>
                      <Typography level="body4">1m ago</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Notification">
                    <Sheet className="img-block">
                      <Avatar src={alertIc} alt="Notification" />
                    </Sheet>
                    <Sheet className="notification-content">
                      <Typography level="body1">
                        Lorem Ipsum Dummy Text
                      </Typography>
                      <Typography level="body4">1m ago</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Notification">
                    <Sheet className="img-block">
                      <Avatar src={alertIc} alt="Notification" />
                    </Sheet>
                    <Sheet className="notification-content">
                      <Typography level="body1">
                        Lorem Ipsum Dummy Text
                      </Typography>
                      <Typography level="body4">1m ago</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Notification">
                    <Sheet className="img-block">
                      <Avatar src={alertIc} alt="Notification" />
                    </Sheet>
                    <Sheet className="notification-content">
                      <Typography level="body1">
                        Lorem Ipsum Dummy Text
                      </Typography>
                      <Typography level="body4">1m ago</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
              </List>
            </MenuItem>
            <MenuItem>
              <Link href="#" title="View All" className="primary-link">
                View All
                <Avatar src={arrowDownIc} alt="Down Arrow" />
              </Link>
            </MenuItem>
          </Menu>
        </ListItem>
        <ListItem>
          <Badge badgeContent={2}>
            <IconButton
              ref={messageRef}
              id="message-menu"
              className="icon-btn"
              aria-controls={"message"}
              aria-haspopup="true"
              aria-expanded={openMessage ? "true" : undefined}
              variant="outlined"
              color="primary"
              onClick={() => {
                setOpenMessage(!openMessage);
              }}
            >
              <Avatar src={messageIc} alt="Message" />
            </IconButton>
          </Badge>
          <Menu
            id="message"
            anchorEl={messageRef.current}
            open={openMessage}
            placement="bottom-end"
            onClose={handleMessageClose}
            aria-labelledby="message-menu"
            className="header-menu message-menu"
          >
            <MenuItem>Message</MenuItem>
            <MenuItem onClick={handleMessageClose}>
              <List>
                <ListItem>
                  <Link href="#" title="Message">
                    <Avatar src={userIcon} alt="User" className="img-block" />
                    <Sheet className="message-content">
                      <Sheet className="username">
                        <Typography level="body3">John Doe</Typography>
                        <Typography level="body5">08:01 PM</Typography>
                      </Sheet>
                      <Typography level="body4">Hi, How are you.</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Message">
                    <Avatar src={userIcon} alt="User" className="img-block" />
                    <Sheet className="message-content">
                      <Sheet className="username">
                        <Typography level="body3">John Doe</Typography>
                        <Typography level="body5">08:01 PM</Typography>
                      </Sheet>
                      <Typography level="body4">Hi, How are you.</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Message">
                    <Avatar src={userIcon} alt="User" className="img-block" />
                    <Sheet className="message-content">
                      <Sheet className="username">
                        <Typography level="body3">John Doe</Typography>
                        <Typography level="body5">08:01 PM</Typography>
                      </Sheet>
                      <Typography level="body4">Hi, How are you.</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Message">
                    <Avatar src={userIcon} alt="User" className="img-block" />
                    <Sheet className="message-content">
                      <Sheet className="username">
                        <Typography level="body3">John Doe</Typography>
                        <Typography level="body5">08:01 PM</Typography>
                      </Sheet>
                      <Typography level="body4">Hi, How are you.</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#" title="Message">
                    <Avatar src={userIcon} alt="User" className="img-block" />
                    <Sheet className="message-content">
                      <Sheet className="username">
                        <Typography level="body3">John Doe</Typography>
                        <Typography level="body5">08:01 PM</Typography>
                      </Sheet>
                      <Typography level="body4">Hi, How are you.</Typography>
                    </Sheet>
                  </Link>
                </ListItem>
              </List>
            </MenuItem>
            <MenuItem>
              <Link href="#" title="View All" className="primary-link">
                View All
                <Avatar src={arrowDownIc} alt="Down Arrow" />
              </Link>
            </MenuItem>
          </Menu>
        </ListItem>
        <ListItem>
          <IconButton
            ref={profileRef}
            id="profile-menu"
            className="profile-btn"
            aria-controls={"profile"}
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
            variant="outlined"
            color="primary"
            onClick={() => {
              setOpenProfile(!openProfile);
            }}
          >
            <Avatar src={userProfile} alt="Profile" />
          </IconButton>
          <Menu
            id="profile"
            anchorEl={profileRef.current}
            open={openProfile}
            className="custom-menu log-out-menu"
            placement="bottom-end"
            onClose={handleProfileClose}
            aria-labelledby="profile-menu"
          >
            <MenuItem
              onClick={handleProfileClose}
              component={NavLink}
              to="/login"
            >
              <Typography
                startDecorator={<Avatar src={logoutIc} alt="Log Out" />}
              >
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </ListItem>
      </List>
    </Sheet>
  );
}
export default Header;
