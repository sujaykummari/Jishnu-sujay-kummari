const express= require ("express");
const axios= require ("axios");


const app = express();

const fetchData = async () => {
  const data = await axios.get("http://localhost:8090/primes");
  console.log(data.data);
};

app.use(express.json());

// Check valid url with regex
// create an array and use sets to filter duplicate items
// Fetch url from params

const PORT = 5000;
app.get("/", (req, res) => {
  fetchData();
  res.send("API is running!");
});

app.listen(PORT, console.log("Server is running"));