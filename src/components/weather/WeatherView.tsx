import { SyntheticEvent, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import { weatherData, ipLocation } from '../../services/WeatherData';

const WeatherView = () => {
  type WeatherDataType = {
    valid_date: string;
    ts: number;
    datetime: string;
    wind_gust_spd: number;
    wind_spd: number;
    wind_dir: number;
    wind_cdir: string;
    wind_cdir_full: string;
    temp: number;
    max_temp: number;
    min_temp: number;
    high_temp: number;
    low_temp: number;
    app_max_temp: number;
    app_min_temp: number;
    pop: number;
    precip: number;
    snow: number;
    snow_depth: number;
    slp: number;
    pres: number;
    dewpt: number;
    rh: number;
    weather: {
      icon: string;
      code: string;
      description: string;
    };
    clouds_low: number;
    clouds_mid: number;
    clouds_hi: number;
    clouds: number;
    vis: number;
    max_dhi: number;
    uv: number;
    moon_phase: number;
    moon_phase_lunation: number;
    moonrise_ts: number;
    moonset_ts: number;
    sunrise_ts: number;
    sunset_ts: number;
  };

  type WeatherType = {
    city_name?: string;
    country_code?: string;
    lat?: string;
    lon?: string;
    state_code?: string;
    timezone?: string;
    data: WeatherDataType[];
  };

  const [dataWeather, setDataWeather] = useState<WeatherType>();
  const [cityValue, setCityValue] = useState<string>();

  useEffect(() => {
    ipLocation().then((data) => {
      weatherData(data?.city, data?.country)
        .then((weather) => setDataWeather(weather));
    });
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    weatherData(cityValue)
      .then((weather) => setDataWeather(weather));
  };

  return (
    <>
      <Grid container justifyContent="center" mb={5}>
        <form onSubmit={handleSubmit}>
          <Grid item display="flex">
            <TextField
              id="outlined-city"
              placeholder="Input city name"
              label="City"
              onChange={(e) => setCityValue(e.target.value)}
            />
            <Button variant="outlined" type="submit">Outlined</Button>
          </Grid>
        </form>
      </Grid>
      <Grid
        container
        spacing={2}
        mb={5}
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
        }}
      >
        {dataWeather?.data.map((city) => (
          <Grid
            item
            key={city.valid_date}
            lg={3}
            sm={6}
            display="flex"
            justifyContent="center"
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Grid item display="flex" alignItems="center">
                  <CardMedia
                    sx={{ objectFit: 'contain' }}
                    component="img"
                    height="140"
                    image={`https://www.weatherbit.io/static/img/icons/${city.weather.icon}.png`}
                    alt={city.weather.description}
                  />
                  <Typography variant="h5" gutterBottom textAlign="center">
                    {city.temp}
                    &#8451;
                    &nbsp;
                    {city.weather.description}
                  </Typography>
                </Grid>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {dataWeather?.city_name}
                    &nbsp;
                    {dataWeather?.country_code}
                  </Typography>
                  <ul style={{ padding: 'unset', listStyleType: 'none' }}>
                    <li>
                      Max temp.:
                      &nbsp;
                      {city.max_temp}
                      &#8451;
                    </li>
                    <li>
                      Min temp.:
                      &nbsp;
                      {city.min_temp}
                      &#8451;
                    </li>
                    <li>
                      Wind speed:
                      &nbsp;
                      {city.wind_spd}
                      &nbsp;
                      Km/H
                    </li>
                  </ul>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WeatherView;
