import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const countries = await response.json();

    return countries;
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
}

export default function MainPage() {
  const countries = useLoaderData();

  console.log(countries);

  return (
    <main>
      <h1>Main Page!</h1>
    </main>
  );
}
