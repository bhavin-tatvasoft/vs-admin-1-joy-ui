import {
  Avatar,
  Button,
  Card,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Sheet,
  Table,
  Typography,
} from "@mui/joy";
import { Helmet } from "react-helmet";
import { Grid as MaterialGrid } from "@mui/material";
import {
  addUserIc,
  avgSaleIc,
  bugReportIc,
  deleteIc,
  dropdownIc,
  editIc,
  growthIc,
  itemOrdersIc,
  mailIc,
  mostSale2Ic,
  mostSaleIc,
  ordersIc,
  paymentIc,
  profitIc,
  threeDotsIc,
  totalSaleIc,
  user2,
  user3,
  user4,
  user5,
  user6,
} from "../../assets/images";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import * as React from "react";
import CountUp from "react-countup";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  radius: 0,
  plugins: {
    legend: {
      display: false,
    },
    // animationEnabled: true,
    animation: {
      duration: 2000,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#4F4F4F",
        beginAtZero: true,
      },
      grid: {
        color: "#F0F0F0",
        drawTicks: false,
      },
    },
    y: {
      ticks: {
        color: "#4F4F4F",
        stepSize: 20,
        beginAtZero: true,
      },
      grid: {
        color: "#F0F0F0",
        drawTicks: false,
      },
      border: {},
    },
  },
};
const labels = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [35, 5, 90, 50, 20],
      fill: true,
      borderColor: "#1A6BAF",
      backgroundColor: "#1A6BAF",
      tension: 0.3,
    },
    {
      label: "Dataset 2",
      data: [90, 50, 60, 10, 30],
      fill: true,
      borderColor: "#8cb5d7",
      backgroundColor: "rgba(26, 107, 175, 0.5)",
      tension: 0.3,
    },
  ],
};

function Dashboard() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      document.body.classList.add("page-scrolled");
    } else {
      document.body.classList.remove("page-scrolled");
    }
  });

  const buttonRef1 = React.useRef(null);
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const buttonRef2 = React.useRef(null);
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const buttonRef3 = React.useRef(null);
  const [open3, setOpen3] = React.useState(false);
  const handleClose3 = () => {
    setOpen3(false);
  };
  const buttonRef4 = React.useRef(null);
  const [open4, setOpen4] = React.useState(false);
  const handleClose4 = () => {
    setOpen4(false);
  };
  const buttonRef5 = React.useRef(null);
  const [open5, setOpen5] = React.useState(false);
  const handleClose5 = () => {
    setOpen5(false);
  };
  const buttonRef6 = React.useRef(null);
  const [open6, setOpen6] = React.useState(false);
  const handleClose6 = () => {
    setOpen6(false);
  };
  const buttonRef7 = React.useRef(null);
  const [open7, setOpen7] = React.useState(false);
  const handleClose7 = () => {
    setOpen7(false);
  };
  const buttonRef8 = React.useRef(null);
  const [open8, setOpen8] = React.useState(false);
  const handleClose8 = () => {
    setOpen8(false);
  };
  const progressValue = 80;

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Sheet className="wrapper">
        <Sidebar />
        <main className="main">
          <Header />
          <Sheet className="main-content">
            <Grid
              container
              spacing={{ xs: 2, xl: 4 }}
              sx={{ pb: { xs: "8px", xl: "16px" } }}
            >
              <Grid
                xs={12}
                sm={6}
                lg={3}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card className="mini-card">
                  <Sheet className="header-with-icon">
                    <Sheet className="icon-wrapper">
                      <Avatar src={profitIc} alt="Profit" />
                    </Sheet>
                    <Typography level="h6" className="card-title">
                      Profit
                    </Typography>
                    <IconButton
                      ref={buttonRef1}
                      id="basic-demo-button1"
                      aria-controls={"basic-menu1"}
                      aria-haspopup="true"
                      aria-expanded={open1 ? "true" : undefined}
                      variant="plain"
                      color="primary"
                      onClick={() => {
                        setOpen1(!open1);
                      }}
                      className="action-icon"
                    >
                      <Avatar src={threeDotsIc} alt="Action" />
                    </IconButton>
                    <Menu
                      id="basic-menu1"
                      anchorEl={buttonRef1.current}
                      open={open1}
                      onClose={handleClose1}
                      className="custom-menu"
                      placement="bottom-end"
                      aria-labelledby="basic-demo-button1"
                    >
                      <MenuItem onClick={handleClose1}>
                        <span>Item 1</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose1}>
                        <span>Item 2</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose1}>
                        <span>Item 3</span>
                      </MenuItem>
                    </Menu>
                  </Sheet>
                  <Sheet className="card-content">
                    <Typography level="body1" className="number">
                      <CountUp end={29000} prefix="$" />
                    </Typography>
                    <Typography level="body2">Jan 28, 2021</Typography>
                  </Sheet>
                  <Sheet className="elips">
                    <span className="one"></span>
                    <span className="two"></span>
                  </Sheet>
                </Card>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={3}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card className="mini-card">
                  <Sheet className="header-with-icon">
                    <Sheet className="icon-wrapper">
                      <Avatar src={paymentIc} alt="Payment" />
                    </Sheet>
                    <Typography level="h6" className="card-title">
                      Payment
                    </Typography>
                    <IconButton
                      ref={buttonRef2}
                      id="basic-demo-button2"
                      aria-controls={"basic-menu2"}
                      aria-haspopup="true"
                      aria-expanded={open2 ? "true" : undefined}
                      variant="plain"
                      color="primary"
                      onClick={() => {
                        setOpen2(!open2);
                      }}
                      className="action-icon"
                    >
                      <Avatar src={threeDotsIc} alt="Action" />
                    </IconButton>
                    <Menu
                      id="basic-menu2"
                      anchorEl={buttonRef2.current}
                      open={open2}
                      onClose={handleClose2}
                      className="custom-menu"
                      placement="bottom-end"
                      aria-labelledby="basic-demo-button2"
                    >
                      <MenuItem onClick={handleClose2}>
                        <span>Item 1</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <span>Item 2</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose2}>
                        <span>Item 3</span>
                      </MenuItem>
                    </Menu>
                  </Sheet>
                  <Sheet className="card-content">
                    <Typography level="body1" className="number">
                      <CountUp end={39500} prefix="$" />
                    </Typography>
                    <Typography level="body2">Jan 28, 2021</Typography>
                  </Sheet>
                  <Sheet className="elips">
                    <span className="one"></span>
                    <span className="two"></span>
                  </Sheet>
                </Card>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={3}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Card className="mini-card">
                  <Sheet className="header-with-icon">
                    <Sheet className="icon-wrapper">
                      <Avatar src={ordersIc} alt="Orders" />
                    </Sheet>
                    <Typography level="h6" className="card-title">
                      Orders
                    </Typography>
                    <IconButton
                      ref={buttonRef3}
                      id="basic-demo-button3"
                      aria-controls={"basic-menu3"}
                      aria-haspopup="true"
                      aria-expanded={open3 ? "true" : undefined}
                      variant="plain"
                      color="primary"
                      onClick={() => {
                        setOpen3(!open3);
                      }}
                      className="action-icon"
                    >
                      <Avatar src={threeDotsIc} alt="Action" />
                    </IconButton>
                    <Menu
                      id="basic-menu3"
                      anchorEl={buttonRef3.current}
                      open={open3}
                      onClose={handleClose3}
                      aria-labelledby="basic-demo-button3"
                      className="custom-menu"
                      placement="bottom-end"
                    >
                      <MenuItem onClick={handleClose3}>
                        <span>Item 1</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose3}>
                        <span>Item 2</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose3}>
                        <span>Item 3</span>
                      </MenuItem>
                    </Menu>
                  </Sheet>
                  <Sheet className="card-content">
                    <Typography level="body1" className="number">
                      <CountUp end={29800} prefix="$" />
                    </Typography>
                    <Typography level="body2">Jan 28, 2021</Typography>
                  </Sheet>
                  <Sheet className="elips">
                    <span className="one"></span>
                    <span className="two"></span>
                  </Sheet>
                </Card>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={3}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <Card className="mini-card">
                  <Sheet className="header-with-icon">
                    <Sheet className="icon-wrapper">
                      <Avatar src={mailIc} alt="Mails" />
                    </Sheet>
                    <Typography level="h6" className="card-title">
                      Mails
                    </Typography>
                    <IconButton
                      ref={buttonRef4}
                      id="basic-demo-button4"
                      aria-controls={"basic-menu4"}
                      aria-haspopup="true"
                      aria-expanded={open4 ? "true" : undefined}
                      variant="plain"
                      color="primary"
                      onClick={() => {
                        setOpen4(!open4);
                      }}
                      className="action-icon"
                    >
                      <Avatar src={threeDotsIc} alt="Action" />
                    </IconButton>
                    <Menu
                      id="basic-menu4"
                      anchorEl={buttonRef4.current}
                      open={open4}
                      onClose={handleClose4}
                      aria-labelledby="basic-demo-button4"
                      className="custom-menu"
                      placement="bottom-end"
                    >
                      <MenuItem onClick={handleClose4}>
                        <span>Item 1</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose4}>
                        <span>Item 2</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose4}>
                        <span>Item 3</span>
                      </MenuItem>
                    </Menu>
                  </Sheet>
                  <Sheet className="card-content">
                    <Typography level="body1" className="number">
                      <CountUp end={49800} prefix="$" />
                    </Typography>
                    <Typography level="body2">Dec 28, 2021</Typography>
                  </Sheet>
                  <Sheet className="elips">
                    <span className="one"></span>
                    <span className="two"></span>
                  </Sheet>
                </Card>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, xl: 4 }}
              sx={{ pb: { xs: "8px", xl: "16px" } }}
            >
              <Grid xs={12} lg={6} data-aos="fade-up" data-aos-delay="400">
                <Card className="primary-card">
                  <Sheet className="card-header">
                    <Typography level="h5">Statistics</Typography>
                    <IconButton
                      ref={buttonRef5}
                      id="basic-demo-button5"
                      aria-controls={"basic-menu5"}
                      aria-haspopup="true"
                      aria-expanded={open5 ? "true" : undefined}
                      variant="plain"
                      color="primary"
                      onClick={() => {
                        setOpen5(!open5);
                      }}
                      className="action-icon"
                    >
                      <Avatar src={threeDotsIc} alt="Action" />
                    </IconButton>
                    <Menu
                      id="basic-menu5"
                      anchorEl={buttonRef5.current}
                      open={open5}
                      onClose={handleClose5}
                      aria-labelledby="basic-demo-button5"
                      className="custom-menu"
                      placement="bottom-end"
                    >
                      <MenuItem onClick={handleClose5}>
                        <span>Item 1</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose5}>
                        <span>Item 2</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose5}>
                        <span>Item 3</span>
                      </MenuItem>
                    </Menu>
                  </Sheet>
                  <Sheet className="card-content">
                    <Line options={options} data={data} />
                  </Sheet>
                </Card>
              </Grid>
              <Grid xs={12} lg={6} data-aos="fade-up" data-aos-delay="800">
                <Card className="primary-card">
                  <Sheet className="card-header">
                    <Typography level="h5">Chats</Typography>
                    <IconButton
                      ref={buttonRef6}
                      id="basic-demo-button6"
                      aria-controls={"basic-menu6"}
                      aria-haspopup="true"
                      aria-expanded={open6 ? "true" : undefined}
                      variant="plain"
                      color="primary"
                      onClick={() => {
                        setOpen6(!open6);
                      }}
                      className="action-icon"
                    >
                      <Avatar src={threeDotsIc} alt="Action" />
                    </IconButton>
                    <Menu
                      id="basic-menu6"
                      anchorEl={buttonRef6.current}
                      open={open6}
                      onClose={handleClose6}
                      aria-labelledby="basic-demo-button6"
                      className="custom-menu"
                      placement="bottom-end"
                    >
                      <MenuItem onClick={handleClose6}>
                        <span>Item 1</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose6}>
                        <span>Item 2</span>
                      </MenuItem>
                      <MenuItem onClick={handleClose6}>
                        <span>Item 3</span>
                      </MenuItem>
                    </Menu>
                  </Sheet>
                  <Sheet className="card-content">
                    <Sheet className="chat-wrapper">
                      <Sheet className="message-block from-receiver">
                        <Avatar
                          src={user2}
                          alt="User"
                          className="user-profile"
                        />
                        <Sheet className="chat-block">
                          <Typography level="body1" className="message">
                            Lorem ipsum dolor sit amet
                          </Typography>
                          <Typography level="body3" className="date">
                            Dec 12, 2021
                          </Typography>
                        </Sheet>
                      </Sheet>
                      <Sheet className="message-block from-sender">
                        <Avatar
                          src={user3}
                          alt="User"
                          className="user-profile"
                        />
                        <Sheet className="chat-block">
                          <Typography level="body1" className="message">
                            Lorem ipsum dolor sit amet
                          </Typography>
                          <Typography level="body3" className="date">
                            Dec 12, 2021
                          </Typography>
                        </Sheet>
                      </Sheet>
                      <Sheet className="message-block from-receiver">
                        <Avatar
                          src={user4}
                          alt="User"
                          className="user-profile"
                        />
                        <Sheet className="chat-block">
                          <Typography level="body1" className="message">
                            Lorem ipsum dolor sit amet
                          </Typography>
                          <Typography level="body3" className="date">
                            Dec 12, 2021
                          </Typography>
                        </Sheet>
                      </Sheet>
                      <Sheet className="message-block from-sender">
                        <Avatar
                          src={user5}
                          alt="User"
                          className="user-profile"
                        />
                        <Sheet className="chat-block">
                          <Typography level="body1" className="message">
                            Lorem ipsum dolor sit amet
                          </Typography>
                          <Typography level="body3" className="date">
                            Dec 12, 2021
                          </Typography>
                        </Sheet>
                      </Sheet>
                    </Sheet>
                  </Sheet>
                </Card>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, xl: 4 }}
              sx={{ pb: { xs: "16px", xl: "32px" } }}
            >
              <Grid xs={12} xl="auto" data-aos="fade-up" data-aos-delay="400">
                <MaterialGrid
                  container
                  className="custom-row"
                  spacing={{ xs: 2, xl: 0 }}
                >
                  <MaterialGrid item xs={6} md={6} lg={3} xl={6}>
                    <Link href="#" title="Item Orders">
                      <Avatar src={itemOrdersIc} alt="Item Orders" />
                      <Typography level="h6">Item Orders</Typography>
                    </Link>
                  </MaterialGrid>
                  <MaterialGrid item xs={6} md={6} lg={3} xl={6}>
                    <Link href="#" title="Bug Reports">
                      <Avatar src={bugReportIc} alt="Bug Reports" />
                      <Typography level="h6">Bug Reports</Typography>
                    </Link>
                  </MaterialGrid>
                  <MaterialGrid item xs={6} md={6} lg={3} xl={6}>
                    <Link href="#" title="Weekly Sales">
                      <Avatar src={growthIc} alt="Weekly Sales" />
                      <Typography level="h6">Weekly Sales</Typography>
                    </Link>
                  </MaterialGrid>
                  <MaterialGrid item xs={6} md={6} lg={3} xl={6}>
                    <Link href="#" title="New Users">
                      <Avatar src={addUserIc} alt="New Users" />
                      <Typography level="h6">New Users</Typography>
                    </Link>
                  </MaterialGrid>
                </MaterialGrid>
              </Grid>
              <Grid xs={12} xl data-aos="fade-up" data-aos-delay="600">
                <Card className="primary-card sale-card">
                  <Sheet className="daily-sale">
                    <Sheet className="card-header">
                      <Typography level="h5">Daily Sales</Typography>
                    </Sheet>
                    <Sheet className="circular-progress-outer">
                      <CircularProgressbar
                        value={progressValue}
                        strokeWidth={10}
                        text={`${progressValue}%`}
                      />
                    </Sheet>
                  </Sheet>
                  <Sheet className="other-sale">
                    <Sheet className="card-header">
                      <IconButton
                        ref={buttonRef7}
                        id="basic-demo-button7"
                        aria-controls={"basic-menu7"}
                        aria-haspopup="true"
                        aria-expanded={open7 ? "true" : undefined}
                        variant="plain"
                        color="primary"
                        onClick={() => {
                          setOpen7(!open7);
                        }}
                        className="action-icon"
                      >
                        <Avatar src={threeDotsIc} alt="Action" />
                      </IconButton>
                      <Menu
                        id="basic-menu7"
                        anchorEl={buttonRef7.current}
                        open={open7}
                        onClose={handleClose7}
                        aria-labelledby="basic-demo-button7"
                        className="custom-menu"
                        placement="bottom-end"
                      >
                        <MenuItem onClick={handleClose7}>
                          <span>Item 1</span>
                        </MenuItem>
                        <MenuItem onClick={handleClose7}>
                          <span>Item 2</span>
                        </MenuItem>
                        <MenuItem onClick={handleClose7}>
                          <span>Item 3</span>
                        </MenuItem>
                      </Menu>
                    </Sheet>
                    <List>
                      <ListItem>
                        <Link href="#">
                          <span className="img-wrap">
                            <Avatar src={mostSaleIc} alt="sale-icon" />
                          </span>
                          <span>
                            <Typography level="body1" className="sale-title">
                              Most Sales
                            </Typography>
                            <Typography level="body2" className="sale-info">
                              Author with the baste sales
                            </Typography>
                          </span>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <span className="img-wrap">
                            <Avatar src={totalSaleIc} alt="sale-icon" />
                          </span>
                          <span>
                            <Typography level="body1" className="sale-title">
                              Total Sales
                            </Typography>
                            <Typography level="body2" className="sale-info">
                              Author’s Total sales
                            </Typography>
                          </span>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <span className="img-wrap">
                            <Avatar src={avgSaleIc} alt="sale-icon" />
                          </span>
                          <span>
                            <Typography level="body1" className="sale-title">
                              Avarage Sales
                            </Typography>
                            <Typography level="body2" className="sale-info">
                              Author with the avarage sales
                            </Typography>
                          </span>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <span className="img-wrap">
                            <Avatar src={mostSale2Ic} alt="sale-icon" />
                          </span>
                          <span>
                            <Typography level="body1" className="sale-title">
                              Most Sales
                            </Typography>
                            <Typography level="body2" className="sale-info">
                              Author with the baste sales
                            </Typography>
                          </span>
                        </Link>
                      </ListItem>
                    </List>
                  </Sheet>
                </Card>
              </Grid>
            </Grid>
            <Card
              className="primary-card table-card"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Sheet className="card-header">
                <Typography level="h5">Users</Typography>
                <Button
                  ref={buttonRef8}
                  id="filter-button"
                  aria-controls={"filter-menu"}
                  aria-haspopup="true"
                  aria-expanded={open8 ? "true" : undefined}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setOpen8(!open8);
                  }}
                  endDecorator={<Avatar src={dropdownIc} alt="Filter" />}
                  className="filter-btn"
                >
                  Filter
                </Button>
                <Menu
                  id="filter-menu"
                  anchorEl={buttonRef8.current}
                  open={open8}
                  onClose={handleClose8}
                  aria-labelledby="filter-button"
                  className="custom-menu"
                  placement="bottom-end"
                >
                  <MenuItem onClick={handleClose8}>
                    <span>Item 1</span>
                  </MenuItem>
                  <MenuItem onClick={handleClose8}>
                    <span>Item 2</span>
                  </MenuItem>
                  <MenuItem onClick={handleClose8}>
                    <span>Item 3</span>
                  </MenuItem>
                </Menu>
              </Sheet>
              <Sheet className="table-responsive">
                <Table borderAxis="none" variant="plain">
                  <thead>
                    <tr>
                      <th>Record Id</th>
                      <th>Name</th>
                      <th>DOB</th>
                      <th>Mobile No.</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Sheet className="user-id">
                          <Avatar src={user2} alt="User" />
                          <Typography level="body1">ET0001</Typography>
                        </Sheet>
                      </td>
                      <td>Darlene</td>
                      <td>5/19/12</td>
                      <td>(270) 555-0117</td>
                      <td>tim@example.com</td>
                      <td>
                        <Sheet className="table-action">
                          <Link href="#" title="Edit">
                            <Avatar src={editIc} alt="Edit" />
                          </Link>
                          <Link href="#" title="Delete">
                            <Avatar src={deleteIc} alt="Delete" />
                          </Link>
                        </Sheet>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Sheet className="user-id">
                          <Avatar src={user3} alt="User" />
                          <Typography level="body1">ET0002</Typography>
                        </Sheet>
                      </td>
                      <td>Theresa</td>
                      <td>2/11/12</td>
                      <td>(629) 555-0129</td>
                      <td>jessica@example.com</td>
                      <td>
                        <Sheet className="table-action">
                          <Link href="#" title="Edit">
                            <Avatar src={editIc} alt="Edit" />
                          </Link>
                          <Link href="#" title="Delete">
                            <Avatar src={deleteIc} alt="Delete" />
                          </Link>
                        </Sheet>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Sheet className="user-id">
                          <Avatar src={user4} alt="User" />
                          <Typography level="body1">ET0003</Typography>
                        </Sheet>
                      </td>
                      <td>Marvin</td>
                      <td>7/18/17</td>
                      <td>(684) 555-0102</td>
                      <td>sara@example.com</td>
                      <td>
                        <Sheet className="table-action">
                          <Link href="#" title="Edit">
                            <Avatar src={editIc} alt="Edit" />
                          </Link>
                          <Link href="#" title="Delete">
                            <Avatar src={deleteIc} alt="Delete" />
                          </Link>
                        </Sheet>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Sheet className="user-id">
                          <Avatar src={user5} alt="User" />
                          <Typography level="body1">ET0004</Typography>
                        </Sheet>
                      </td>
                      <td>Bessie</td>
                      <td>12/4/17</td>
                      <td>(208) 555-0112</td>
                      <td>willie@example.com</td>
                      <td>
                        <Sheet className="table-action">
                          <Link href="#" title="Edit">
                            <Avatar src={editIc} alt="Edit" />
                          </Link>
                          <Link href="#" title="Delete">
                            <Avatar src={deleteIc} alt="Delete" />
                          </Link>
                        </Sheet>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Sheet className="user-id">
                          <Avatar src={user6} alt="User" />
                          <Typography level="body1">ET0005</Typography>
                        </Sheet>
                      </td>
                      <td>Cody</td>
                      <td>6/21/19</td>
                      <td>(907) 555-0101</td>
                      <td>michelle@example.com</td>
                      <td>
                        <Sheet className="table-action">
                          <Link href="#" title="Edit">
                            <Avatar src={editIc} alt="Edit" />
                          </Link>
                          <Link href="#" title="Delete">
                            <Avatar src={deleteIc} alt="Delete" />
                          </Link>
                        </Sheet>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Sheet>
            </Card>
          </Sheet>
        </main>
      </Sheet>
    </>
  );
}
export default Dashboard;
