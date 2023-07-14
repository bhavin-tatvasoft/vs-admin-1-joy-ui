import { Helmet } from "react-helmet";
import {
  Grid,
  Link,
  Sheet,
  Avatar,
  Typography,
  Input,
  IconButton,
  Checkbox,
  Button,
} from "@mui/joy";
import {
  hidePassword,
  logoPrimary,
  mockup,
  showPassword,
} from "../../assets/images";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  const [password, setPassword] = useState(true);
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
        <title>Login</title>
      </Helmet>
      <Sheet className="login-wrapper">
        <Grid container spacing={2}>
          <Grid xs={12} md={6} className="login-mockup-wrapper">
            {/* <object
              type="image/svg+xml"
              data="../../assets/images/mockup-animated.svg"
              className="svg-obj"
            >
              <Avatar src={mockupAnimated} />
            </object> */}
            <Avatar
              src={mockup}
              className="login-mockup"
              data-aos="fade-right"
            />
          </Grid>
          <Grid xs={12} md={6} className="login-content-wrapper">
            <Sheet className="login-content" data-aos="fade-left">
              <Link href="#" title="Logo" className="logo">
                <Avatar src={logoPrimary} />
              </Link>
              <Typography level="h4">Login to Your Account</Typography>
              <Sheet className="form-group user-field">
                <Input placeholder="Username" type="text" />
              </Sheet>
              <Sheet className="form-group password-field">
                <Input
                  placeholder="Password"
                  type={password ? "password" : "text"}
                  endDecorator={
                    <IconButton
                      variant="plain"
                      onClick={() => setPassword(!password)}
                    >
                      <Avatar src={password ? hidePassword : showPassword} />
                    </IconButton>
                  }
                />
              </Sheet>
              <Sheet className="action-group">
                <Checkbox label="Remember me" />
                <Link
                  href="#"
                  title="Forgot Password?"
                  underline="none"
                  className="primary-link"
                >
                  Forgot Password?
                </Link>
              </Sheet>
              <Button
                variant="solid"
                color="primary"
                size="lg"
                fullWidth
                component={NavLink}
                to="/dashboard"
              >
                <Typography level="body5">Log In</Typography>
              </Button>
            </Sheet>
          </Grid>
        </Grid>
      </Sheet>
    </>
  );
}
export default Login;
