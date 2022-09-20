import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button, CardActionArea, CardActions, Grid,
} from '@mui/material';
import { limitedData } from '../../services/Products';

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
    // data().then((item) => setProducts(item));
  }, [setProducts]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 5 }}
    >
      {products?.map((product) => (
        <Grid item key={product.id} lg={3} sm={6}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 345,
              height: '100%',
            }}
          >
            <CardMedia
              sx={{ objectFit: 'contain' }}
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
            <CardActions>
              <Typography
                sx={{
                  px: 1,
                  py: 2,
                  color: '#1976d2',
                }}
                component="p"
              >
                {product.price}
                &nbsp;$
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
