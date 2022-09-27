import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActions,
  Grid,
  Tooltip,
} from '@mui/material';
import { limitedData } from '../../services/Products';

const ProductsView = () => {
  type DataType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  const [products, setProducts] = useState<DataType[]>([]);

  useEffect(() => {
    limitedData(20).then((item) => setProducts(item));
  }, [setProducts]);

  return (
    <>
      <Grid
        container
        spacing={2}
        mb={5}
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
        }}
      >
        {products && products.map((product) => (
          <Grid
            item
            key={product.id}
            lg={3}
            md={4}
            sm={6}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
                maxWidth: 345,
                height: '100%',
              }}
            >
              <CardMedia
                sx={{ objectFit: 'contain' }}
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent
                sx={{
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}
              >
                <Tooltip title={product.title ? product.title : ''}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.title?.length > 35 ? `${product?.title?.substring(0, 35)}...` : product?.title}
                  </Typography>
                </Tooltip>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.description?.length > 35 ? `${product?.description?.substring(0, 250)}...` : product?.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
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
                <Typography
                  sx={{
                    px: 1,
                    py: 2,
                    color: '#000',
                  }}
                  component="p"
                >
                  Rating &nbsp;
                  {product.rating?.rate}
                  &nbsp; ⭐
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        mb={5}
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        {products && products.map((product) => (
          <Grid
            item
            key={product.id}
            lg={3}
            md={4}
            sm={6}
            display="flex"
            justifyContent="center"
          >
            <Card
              sx={{
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
              <CardContent
                sx={{
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}
              >
                <Tooltip title={product.title ? product.title : ''}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.title?.length > 35 ? `${product?.title?.substring(0, 35)}...` : product?.title}
                  </Typography>
                </Tooltip>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product?.description?.length > 35 ? `${product?.description?.substring(0, 250)}...` : product?.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
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
                <Typography
                  sx={{
                    px: 1,
                    py: 2,
                    color: '#000',
                  }}
                  component="p"
                >
                  Rating &nbsp;
                  {product.rating?.rate}
                  &nbsp; ⭐
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsView;
