import Link from "@/Link";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  brand: string;
  description?: string;
  image: string;
}

const MAX_DESCRIPTION_LENGTH = 150;

const trimDescription = (description: string) => {
  if (description.length <= MAX_DESCRIPTION_LENGTH) {
    return description;
  } else {
    return description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
  }
};

const Product = ({ id, name, description, image }: ProductProps) => {
  return (
    <Link href={`/product/${id}`} noLinkStyle>
      <Card
        sx={{
          height: 300,
          backgroundColor: "background.paper",
          borderRadius: 2,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {trimDescription(description as string)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Product;
