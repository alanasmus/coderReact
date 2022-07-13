import { Badge } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge badgeContent={0} color="secondary">
            <ShoppingBasket />
        </Badge>
    );
}

export default CartWidget;