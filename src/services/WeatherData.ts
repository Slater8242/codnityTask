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

type LocationType = {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
};

export const ipLocation = async () => {
  const request = fetch('https://ipinfo.io/json?token=e000eea0006ac7')
    .then((ip) => ip.json())
    .then((cityIp: LocationType) => cityIp);
  return request;
};

export const weatherData = async (city?:string, country?:string) => {
  const result = fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=bb240c94921f437ab1bf88e3fde4184c`,
  )
    .then((res) => res.json())
    .then((json: WeatherType) => json);
  return result;
};
