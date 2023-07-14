import { extendTheme } from "@mui/joy";
import {
  checkboxChecked,
  dropdownDownArrowIc,
  dropdownUpArrowIc,
} from "./assets/images";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#0d3658",
          100: "#104069",
          200: "#124b7a",
          300: "#15568c",
          400: "#17609e",
          500: "#1A6BAF",
          600: "#317ab7",
          700: "#4889bf",
          800: "#5f97c7",
          900: "#76a6cf",
          solidBg: "#1A6BAF",
          solidBorder: "#0d6efd",
          solidHoverBg: "#0b5ed7",
          solidHoverBorder: "#0a58ca",
          solidActiveBg: "#0a58ca",
          solidActiveBorder: "#0a53be",
          solidDisabledBg: "#0d6efd",
          solidDisabledBorder: "#0d6efd",
        },
      },
    },
  },
  fontFamily: {
    body: "Poppins, sans-serif",
  },
  typography: {
    h4: {
      fontWeight: "500",
      color: "#000000",
    },
    h5: {
      fontWeight: "600",
      color: "#115186",
      fontSize: "22px",
      lineHeight: "30px",
      letterSpacing: "0.04em",
    },
    h6: {
      fontWeight: "500",
      color: "#000000",
      "&.heading-secondary": {
        fontWeight: "600",
        lineHeight: "26px",
        color: "#444444",
        letterSpacing: "0.04em",
        marginBottom: "20px",
      },
    },
  },
  components: {
    JoyButton: {
      defaultProps: {
        size: "md",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 400,
          ...(ownerState.size === "md" && {}),
          ...(ownerState.size === "lg" && {
            borderRadius: "10px",
            padding: "8px 16px",
            minHeight: "52px",
            fontSize: "18px",
            lineHeight: "24px",
            fontWeight: "600",
          }),
          ...(ownerState.color === "primary" &&
            ownerState.variant === "solid" && {
              background:
                "linear-gradient(91.76deg, #1669ad 1.49%, #4484ba 98.58%)",
              border: "none",
              minWidth: "120px",
              minHeight: "44px",
              padding: "6px 16px",
              borderRadius: "12px",
              overflow: "hidden",
              "&:after": {
                content: "' '",
                position: "absolute",
                left: "0",
                top: "0",
                bottom: "0",
                width: "0",
                transition: "all 0.3s ease-out",
                backgroundColor: "#1A6BAF",
              },
              "&:hover,&:focus": {
                "&:after": { width: "100%" },
              },
              ".MuiTypography-body5": {
                position: "relative",
                zIndex: "1",
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "400",
              },
            }),
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "solid" && {
              background: "#E7E5E5",
              border: "none",
              minWidth: "120px",
              minHeight: "44px",
              padding: "6px 16px",
              color: "#444444",
              borderRadius: "12px",
              overflow: "hidden",
              "&:after": {
                content: "' '",
                position: "absolute",
                left: "0",
                top: "0",
                bottom: "0",
                width: "0",
                transition: "all 0.3s ease-out",
                backgroundColor: "#dad7d7",
                letterSpacing: "0.64px",
              },
              "&:hover,&:focus": {
                backgroundColor: "#E7E5E5",
                "&:after": { width: "100%" },
              },
              ".MuiTypography-body5": {
                position: "relative",
                zIndex: "1",
                color: "#444444",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "400",
                letterSpacing: "0.64px",
              },
            }),
          ...(ownerState.color === "primary" &&
            ownerState.variant === "outlined" && {
              borderColor: "#1a6baf",
              color: "#1a6baf",
            }),
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 16px rgba(38, 114, 178, 0.2)",
          overflow: "hidden",
          borderRadius: "8px",
          gap: 0,
        },
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          minWidth: "auto",
          minHeight: "auto",
          transition: "all 0.3s ease-out",
          "&.icon-btn": {
            minWidth: "auto",
            minHeight: "auto",
            borderRadius: "50%",
            borderColor: "#1a6baf",
            padding: "11px",
            "&:focus": { backgroundColor: "#DDF1FF" },
          },
          "&.profile-btn": {
            borderRadius: "50%",
            border: "none",
            padding: "0",
          },
          ...(ownerState.variant === "plain" &&
            ownerState.color === "primary" && {
              "&.action-icon": {
                borderRadius: "50%",
                height: "34px",
                width: "34px",
                marginLeft: "auto",
                transition: "all 0.3s ease-out",
                "&:focus": {
                  backgroundColor: "#DDF1FF",
                },
              },
            }),
        }),
      },
    },
    JoyMenu: {
      styleOverrides: {
        root: {
          border: "none",
          boxShadow: "0px 4px 20px rgba(43, 117, 179, 0.25)",
          marginTop: "4px !important",
          minWidth: "220px",
          zIndex: 1,
        },
      },
    },
    JoyMenuItem: {
      styleOverrides: {
        root: {
          color: "#444444",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    JoyLink: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
          "&.primary-link": {
            whiteSpace: "nowrap",
            "&:after": {
              content: '" "',
              position: "absolute",
              left: "0",
              bottom: "0",
              height: "1px",
              width: "0",
              background: "#1A6BAF",
              transition: "all 0.3s",
            },
            "&:hover,&:focus": {
              "&:after": { width: "100%" },
            },
          },
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    JoyAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          height: "auto",
          width: "auto",
          backgroundColor: "transparent",
        },
      },
    },
    JoyInput: {
      defaultProps: {
        size: "lg",
        variant: "outlined",
        color: "primary",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          minHeight: "50px",
          borderRadius: "8px",
          "&:before": { display: "none" },
          "&.Joy-focused": { borderColor: "#1A6BAF" },
          ".MuiInput-endDecorator": {
            ".MuiIconButton-root": {
              borderRadius: "50%",
              padding: "4px",
              "&:focus": {
                backgroundColor: "#DDF1FF",
              },
            },
          },
          input: {
            "&::placeholder": {
              color: "#AAAAAA",
              opacity: 1,
            },
          },
          ...(ownerState.color === "primary" && {
            borderColor: "#C4C4C4",
            color: "#444444",
          }),
        }),
      },
    },
    JoyCheckbox: {
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "&.Joy-focusVisible": {
            ".MuiCheckbox-checkbox": {
              borderColor: "#1A6BAF",
              backgroundColor: "#DDF1FF",
            },
          },
          ".MuiCheckbox-checkbox": {
            borderColor: "#C4C4C4",
            borderRadius: "2px",
            transition: "all 0.3s ease-out",
            "&:hover, &:focus": {
              borderColor: "#1A6BAF",
            },
            "&.Joy-checked": {
              borderColor: "#1A6BAF",
              backgroundColor: "#1A6BAF",
            },
            ".MuiSvgIcon-root": {
              fontSize: "0",
              backgroundImage: `url(${checkboxChecked})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "12px",
              height: "20px",
              width: "20px",
              path: {
                display: "none",
              },
            },
          },
          ".MuiCheckbox-label": {
            color: "#444444",
            fontSize: "14px",
            lineHeight: "20px",
            whiteSpace: "nowrap",
          },
        },
      },
    },
    JoyTable: {
      styleOverrides: {
        root: {
          tableLayout: "auto",
          tr: {
            "&:first-of-type": {
              td: {
                paddingTop: "20px",
              },
            },
            ">:first-of-type": {
              paddingLeft: "0",
            },
            ">:last-child": {
              paddingRight: "0",
              textAlign: "right",
            },
            "&:hover": {
              td: {
                backgroundColor: "rgba(26, 107, 175, 0.15)",
              },
            },
          },
          th: {
            color: "#444444",
            letterSpacing: "0.64px;",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "600",
            height: "auto",
            verticalAlign: "middle",
            padding: "15px 8px",
            borderBottom: "1px solid #cac8c8",
            whiteSpace: "nowrap",
          },
          td: {
            padding: "10px 8px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#444444",
            whiteSpace: "nowrap",
            ".MuiSheet-root": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
    JoySelect: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderColor: "#c4c4c4",
          padding: "3px 16px",
          height: "50px",
          "&.Joy-focusVisible": {
            borderColor: "#1A6BAF",
            "&:before": {
              boxShadow: "none",
            },
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Joy-expanded": { borderColor: "#1A6BAF" },
          ".MuiSelect-button": {
            opacity: 1,
            color: "#444444",
          },
          ".MuiSelect-indicator": {
            ".MuiSvgIcon-root": {
              backgroundImage: `url(${dropdownDownArrowIc})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "16px",
              path: {
                opacity: "0",
              },
            },
            "&.Joy-expanded": {
              ".MuiSvgIcon-root": {
                backgroundImage: `url(${dropdownUpArrowIc})`,
              },
            },
          },
        },
      },
    },
    JoyTextarea: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderColor: "#C4C4C4",
          "&:before": { display: "none" },
          "&.Joy-focused": {
            borderColor: "#1A6BAF",
          },
          textarea: {
            "&::placeholder": { color: "#AAAAAA", opacity: 1 },
          },
        },
      },
    },
    JoyRadio: {
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          margin: 0,
          "&.Joy-focusVisible": {
            ".MuiRadio-radio": {
              borderColor: "#1A6BAF",
              backgroundColor: "#DDF1FF",
            },
          },
          ".MuiRadio-label": {
            fontSize: "14px",
            lineHeight: "20px",
            color: "#444444",
          },
          ".MuiRadio-icon": {
            transition: "all 0.3s ease-out",
            transform: "scale(1)",
            opacity: 0,
            visibility: "hidden",
          },
          ".MuiRadio-radio": {
            borderColor: "#C4C4C4",
            color: "#fff",
            transition: "all 0.3s ease-out",
            "&.Joy-checked": {
              backgroundColor: "#1A6BAF",
              ".MuiRadio-icon": {
                opacity: 1,
                visibility: "visible",
              },
            },
            "&:hover, &.Joy-checked": {
              borderColor: "#1A6BAF",
            },
          },
        },
      },
    },
    JoyAlert: {
      defaultProps: {
        variant: "soft",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "50px",
          padding: "12px 16px",
          fontSize: "18px",
          lineHeight: "26px",
          fontWeight: "500",
          letterSpacing: "0.04em",
          ".MuiAlert-startDecorator": {
            marginRight: "21px",
          },
          ".MuiIconButton-root": {
            padding: "0",
            height: "36px",
            width: "36px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            "&:hover, &:focus": {
              backgroundColor: "#f5f5f5",
            },
          },
          ...(ownerState.variant === "soft" &&
            ownerState.color === "success" && {
              backgroundColor: "rgba(68, 229, 68, 0.25)",
              color: "#157015",
            }),
          ...(ownerState.variant === "soft" &&
            ownerState.color === "danger" && {
              backgroundColor: "rgba(217, 57, 51, 0.25)",
              color: "#880F0A",
            }),
          ...(ownerState.variant === "soft" &&
            ownerState.color === "warning" && {
              backgroundColor: "rgba(251, 159, 37, 0.25)",
              color: "#E18202",
            }),
        }),
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          padding: "0",
          borderBottom: "1px solid #C4C4C4",
          borderRadius: "0",
        },
      },
    },
    JoyTab: {
      styleOverrides: {
        root: {
          flexGrow: "0",
          fontSize: "18px",
          lineHeight: "26px",
          color: "#444444",
          padding: "5px 20px",
          letterSpacing: "0.04em",
          margin: 0,
          "&.Joy-focusVisible": {
            color: "#1a6baf",
          },
          "&:hover": { backgroundColor: "transparent", color: "#1a6baf" },
          "&:after": {
            content: "' '",
            position: "absolute",
            left: "0",
            bottom: "-2px",
            width: 0,
            height: "3px",
            backgroundColor: "transparent",
            transition: "all 0.3s ease-out",
          },
          "&.Joy-selected": {
            boxShadow: "none",
            fontWeight: "600",
            color: "#1a6baf",
            transition: "all 0.3s ease-out",
            "&:after": {
              backgroundColor: "#1a6baf",
              width: "100%",
            },
          },
        },
      },
    },
    JoyTabPanel: {
      styleOverrides: {
        root: {
          color: "#444444",
          lineHeight: "32px",
          letterSpacing: "0.04em",
          padding: "16px 0 10px",
        },
      },
    },
  },
});
export default theme;
