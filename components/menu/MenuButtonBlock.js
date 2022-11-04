import { Box, Container } from "@mui/material";
import MenuButton from "./MenuButton";

const MenuButtonBlock = ({categories}) => {
    const content = categories?.map((item, i) => <MenuButton key={i} item={item}/>)

    return (
        <Container sx={{maxWidth: {xl: "lg", lg: "md"}}}>
            <Box
                className="d-flex justify-center menu-button__block"
            >
                {content}
            </Box>
        </Container>
    )
}

export default MenuButtonBlock;