import { muiSxPropType } from "components/types";

export const testimonialDesignation: muiSxPropType = {
    whiteSpace: "nowrap",
    width: {
        xs: "123px",
        lg: "100%"
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: { xs: "10px", lg: "12px" }
}

export const svgIcon: muiSxPropType = {
    position: 'absolute',
    right: '20px',
    bottom: '30px',
    display: {
        xs: "none",
        sm: "block"
    },
    width: {
        sm: "40px",
        md: '40px',
        lg: "50px"
    },
}