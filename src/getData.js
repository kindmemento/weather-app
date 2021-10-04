const API_KEY = process.env.API_KEY

export default async function getData(input) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
  );
  const info = await data.json();
  return info
}