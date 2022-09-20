import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { limitedData, data } from '../../services/Products';
import styles from './Cards.module.css';

const Cards = () => {
  type DataType = {
    id: number;
    title?: string;
    price?: number;
    description?: string;
    category?: string;
    image?: string;
    rating?: {
      rate?: number;
      count?: number;
    };
  };

  const [products, setProducts] = useState<DataType[]>();

  useEffect(() => {
    limitedData(5).then((item) => setProducts(item));
  }, [setProducts]);

  products?.forEach((todo) => console.log(todo));

  return (
    <div className={styles.cardsStyle}>
      {products?.map((product) => (
        <Card sx={{ maxWidth: 345 }} key={product.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
