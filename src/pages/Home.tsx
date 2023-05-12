import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="container home-page">
            <h1>Cooking is fun!</h1>
            <p>Cooking is a beautiful blend of creativity and precision. It is an art that tantalizes the senses, drawing people together with the promise of delectable flavors and satisfying nourishment. In the kitchen, ingredients transform into culinary masterpieces through the skilled hands of the cook. The sizzle of a hot pan, the aromatic dance of herbs and spices, and the symphony of flavors melding together create an enchanting experience. Cooking is not merely about sustenance; it is an expression of love, culture, and innovation. From humble home-cooked meals to elaborate gourmet feasts, the joy of cooking is found in the delicious alchemy that happens when passion meets the plate.</p>
            <h6>API From: <a target="_blank" href="https://www.themealdb.com/api.php">TheMealDB</a></h6>
        </main>
    );
}