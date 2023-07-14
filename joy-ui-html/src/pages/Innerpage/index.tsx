import {
  Avatar,
  Button,
  Card,
  Input,
  Link,
  Menu,
  MenuItem,
  Sheet,
  Select,
  Option,
  Table,
  Typography,
  Textarea,
  Grid,
  Checkbox,
  RadioGroup,
  Radio,
  Alert,
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  List,
  ListItem,
} from "@mui/joy";
import React from "react";
import { Helmet } from "react-helmet";
import {
  alertCloseIc,
  deleteIc,
  dropdownIc,
  editIc,
  fileUploadIc,
  successAlertIc,
  user2,
  user3,
  user4,
  user5,
  user6,
  errorAlertIc,
  warningAlertIc,
  paginationPrevIc,
  paginationNextIc,
} from "../../assets/images";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Innerpage() {
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
  useEffect(() => {
    let tableCard = gsap.timeline();
    tableCard.fromTo(
      ".table-card",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let singleElement = gsap.timeline({
      scrollTrigger: {
        trigger: ".single-element",
        start: "top 800px",
      },
    });
    singleElement.fromTo(
      ".single-element",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let twoElements = gsap.timeline({
      scrollTrigger: {
        trigger: ".two-elements",
        start: "top 800px",
      },
    });
    twoElements.fromTo(
      ".two-elements",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let threeElements = gsap.timeline({
      scrollTrigger: {
        trigger: ".three-elements",
        start: "top 800px",
      },
    });
    threeElements.fromTo(
      ".three-elements",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let fourElements = gsap.timeline({
      scrollTrigger: {
        trigger: ".four-elements",
        start: "top 800px",
      },
    });
    fourElements.fromTo(
      ".four-elements",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let fileUpload = gsap.timeline({
      scrollTrigger: {
        trigger: ".upload-outer",
        start: "top 800px",
      },
    });
    fileUpload.fromTo(
      ".upload-outer",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let checkbox = gsap.timeline({
      scrollTrigger: {
        trigger: ".checkbox-outer",
        start: "top 900px",
      },
    });
    checkbox.fromTo(
      ".checkbox-outer",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let radio = gsap.timeline({
      scrollTrigger: {
        trigger: ".radio-outer",
        start: "top 900px",
      },
    });
    radio.fromTo(
      ".radio-outer",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let button = gsap.timeline({
      scrollTrigger: {
        trigger: ".button-outer",
        start: "top 900px",
      },
    });
    button.fromTo(
      ".button-outer",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    let alert = gsap.timeline({
      scrollTrigger: {
        trigger: ".alert-outer",
        start: "top 900px",
      },
    });
    alert.fromTo(
      ".alert-outer",
      { translateY: "100px", opacity: 0 },
      { translateY: 0, opacity: 1, duration: 1 }
    );

    // let tab = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".tab-card",
    //     start: "top 800px",
    //   },
    // });
    // tab.fromTo(
    //   ".tab-card",
    //   { translateY: "100px", opacity: 0 },
    //   { translateY: 0, opacity: 1, duration: 1 }
    // );
  }, []);

  const listOpen = (e: any) => {
    // console.log(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Innerpage</title>
      </Helmet>
      <Sheet className="wrapper innerpage">
        <Sidebar />
        <main className="main">
          <Header />
          <Sheet className="main-content">
            {/* Table Card Start */}
            <Card
              className="primary-card table-card"
              sx={{ mb: { xs: "20px", xl: "30px" } }}
            >
              <Sheet className="card-header">
                <Typography level="h5">Users</Typography>
                <Button
                  ref={buttonRef1}
                  id="filter-button"
                  aria-controls={"filter-menu"}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setOpen1(!open1);
                  }}
                  endDecorator={<Avatar src={dropdownIc} alt="Filter" />}
                  className="filter-btn"
                >
                  Filter
                </Button>
                <Menu
                  id="filter-menu"
                  anchorEl={buttonRef1.current}
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="filter-button"
                >
                  <MenuItem onClick={handleClose1}>Item 1</MenuItem>
                  <MenuItem onClick={handleClose1}>Item 2</MenuItem>
                  <MenuItem onClick={handleClose1}>Item 3</MenuItem>
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
              <Sheet className="pagination-wrapper">
                <Link href="#" title="Prev" className="icon">
                  <Avatar src={paginationPrevIc} alt="Prev" />
                </Link>
                <List>
                  <ListItem>
                    <Link href="#" title="1" className="active">
                      1
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" title="2">
                      2
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" title="3">
                      3
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" title="4">
                      4
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#" title="5">
                      5
                    </Link>
                  </ListItem>
                </List>
                <Link href="#" title="Next" className="icon">
                  <Avatar src={paginationNextIc} alt="Prev" />
                </Link>
              </Sheet>
            </Card>
            {/* Table Card End */}

            <Card
              className="primary-card"
              sx={{ mb: { xs: "20px", xl: "30px" } }}
            >
              {/* One Column Start */}
              {/* <div className="single-element"> */}
              <Typography level="h5" sx={{ mb: { xs: "16px", xl: "20px" } }}>
                Form Elements
              </Typography>
              <Input
                placeholder="Name"
                type="text"
                sx={{ mb: { xs: "16px", xl: "20px" } }}
              />
              <Select
                color="primary"
                placeholder="Dropdown"
                sx={{ mb: { xs: "16px", xl: "20px" } }}
              >
                <Option value="One">One</Option>
                <Option value="Two">Two</Option>
                <Option value="Three">Three</Option>
              </Select>
              <Textarea
                minRows={3}
                placeholder="Textarea"
                sx={{ mb: { xs: "20px", lg: "30px" } }}
              />
              {/* </div> */}
              {/* One Column End */}

              {/* Two Column Start */}
              {/* <div className="two-elements"> */}
              <Typography level="h5" sx={{ mb: { xs: "16px", xl: "20px" } }}>
                Two Column
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, xl: 4 }}
                rowSpacing={{ xs: 2, xl: 2.5 }}
                sx={{ pb: { xs: "20px", lg: "30px" } }}
              >
                <Grid xs={12} sm={6}>
                  <Input placeholder="Name" type="text" />
                </Grid>
                <Grid xs={12} sm={6}>
                  <Input placeholder="Focus" type="text" />
                </Grid>
                <Grid xs={12} sm={6}>
                  <Select color="primary" placeholder="Dropdown">
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Select color="primary" placeholder="Dropdown">
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
              </Grid>
              {/* </div> */}
              {/* Two Column End */}

              {/* Three Column Start */}
              {/* <div className="three-elements"> */}
              <Typography level="h5" sx={{ mb: { xs: "16px", xl: "20px" } }}>
                Three Column
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, xl: 4 }}
                rowSpacing={{ xs: 2, xl: 2.5 }}
                sx={{ pb: { xs: "20px", lg: "30px" } }}
              >
                <Grid xs={12} sm={6} md={4}>
                  <Input placeholder="Firstname" type="text" />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Input
                    placeholder="Email"
                    type="text"
                    defaultValue="xyz@gmail.com"
                  />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Input placeholder="Focus" type="text" />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
              </Grid>
              {/* </div> */}
              {/* Three Column End */}

              {/* Four Column Start */}
              {/* <div className="four-elements"> */}
              <Typography level="h5" sx={{ mb: { xs: "16px", xl: "20px" } }}>
                Four Column
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, xl: 4 }}
                rowSpacing={{ xs: 2, xl: 2.5 }}
                sx={{ pb: { xs: "30px", xl: "40px" } }}
              >
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Input placeholder="Firstname" type="text" />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Input placeholder="Lastname" type="text" />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Input
                    placeholder="Email"
                    type="text"
                    defaultValue="xyz@gmail.com"
                  />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Input placeholder="Focus" type="text" />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Select
                    color="primary"
                    placeholder="Dropdown"
                    defaultValue="One"
                  >
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                  </Select>
                </Grid>
              </Grid>
              {/* </div> */}
              {/* Four Column End */}
              {/* <div className="upload-outer"> */}
              <Typography level="h5" sx={{ mb: { xs: "20px", xl: "30px" } }}>
                Other Form Elements
              </Typography>
              {/* File Upload Start */}
              <Typography level="h6" className="heading-secondary">
                File Upload
              </Typography>
              <Sheet className="file-upload">
                <label htmlFor="inputGroupFile02">
                  <Avatar src={fileUploadIc} alt="Upload Icon" />
                  <Typography level="body4">Choose FIle</Typography>
                  <input type="file" id="inputGroupFile02" />
                </label>
                <Typography level="body1">No file selected</Typography>
              </Sheet>
              {/* </div> */}
              {/* File Upload End */}

              {/* Checkbox Start */}
              {/* <div className="checkbox-outer"> */}
              <Typography level="h6" className="heading-secondary">
                Checkbox
              </Typography>
              <Sheet className="checkbox-grp">
                <Checkbox label="Option 1" />
                <Checkbox label="Option 2" />
              </Sheet>
              {/* </div> */}
              {/* Checkbox End */}

              {/* Radio Start */}
              {/* <div className="radio-outer"> */}
              <Typography level="h6" className="heading-secondary">
                Radio Button
              </Typography>
              <RadioGroup
                defaultValue="medium"
                name="radio-buttons-group"
                className="radio-grp"
              >
                <Radio value="option1" label="Option 1" color="primary" />
                <Radio value="option2" label="Option 2" color="primary" />
              </RadioGroup>
              {/* </div> */}
              {/* Radio End */}

              {/* Button Group Start */}
              {/* <div className="button-outer"> */}
              <Typography level="h6" className="heading-secondary">
                Buttons
              </Typography>
              <Sheet className="btn-grp">
                <Button color="primary" variant="solid">
                  <Typography level="body5">Primary</Typography>
                </Button>
                <Button color="neutral" variant="solid">
                  <Typography level="body5">Secondary</Typography>
                </Button>
              </Sheet>
              {/* </div> */}
              {/* Button Group End */}

              {/* Alert Group Start */}
              {/* <div className="alert-outer"> */}
              <Typography level="h6" className="heading-secondary">
                Alerts
              </Typography>
              <Sheet className="alert-wrapper">
                <Alert
                  color="success"
                  startDecorator={<Avatar src={successAlertIc} alt="Success" />}
                  endDecorator={
                    <IconButton size="sm">
                      <Avatar src={alertCloseIc} alt="Close" />
                    </IconButton>
                  }
                >
                  This is a success message.
                </Alert>
                <Alert
                  color="danger"
                  startDecorator={<Avatar src={errorAlertIc} alt="Error" />}
                  endDecorator={
                    <IconButton size="sm">
                      <Avatar src={alertCloseIc} alt="Close" />
                    </IconButton>
                  }
                >
                  This is an error message.
                </Alert>
                <Alert
                  sx={{ mb: { md: "16px" } }}
                  color="warning"
                  startDecorator={<Avatar src={warningAlertIc} alt="Warning" />}
                  endDecorator={
                    <IconButton size="sm">
                      <Avatar src={alertCloseIc} alt="Close" />
                    </IconButton>
                  }
                >
                  This is a warning message.
                </Alert>
              </Sheet>
              {/* </div> */}
              {/* Alert Group End */}
            </Card>

            {/* Tab Card Start */}
            <Card className="primary-card tab-card">
              <Typography level="h5" sx={{ mb: { xs: "20px", lg: "30px" } }}>
                Tabs
              </Typography>
              <Tabs aria-label="Basic tabs" defaultValue={0}>
                <TabList>
                  <Tab>Option 1</Tab>
                  <Tab>Option 2</Tab>
                  <Tab>Option 3</Tab>
                </TabList>
                <TabPanel value={0}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel,
                  massa dolor dignissim dolor. Ut mus vel sed mattis ullamcorper
                  tortor id tellus nec. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vel, massa dolor dignissim dolor. Ut mus vel
                  sed mattis ullamcorper tortor id tellus nec.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Vel, massa dolor
                  dignissim dolor. Ut mus vel sed mattis ullamcorper tortor id
                  tellus nec.
                </TabPanel>
                <TabPanel value={1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel,
                  massa dolor dignissim dolor. Ut mus vel sed mattis ullamcorper
                  tortor id tellus nec. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vel, massa dolor dignissim dolor.
                </TabPanel>
                <TabPanel value={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel,
                  massa dolor dignissim dolor. Ut mus vel sed mattis ullamcorper
                  tortor id tellus nec. Lorem ipsum dolor sit amet.
                </TabPanel>
              </Tabs>
            </Card>
            {/* Tab Card End */}
          </Sheet>
        </main>
      </Sheet>
    </>
  );
}
export default Innerpage;
