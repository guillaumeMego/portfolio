export async function fetchGoogleReviews(placeId: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  if (!apiKey) throw new Error("Clé API Google manquante");
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok)
    throw new Error("Erreur lors de la récupération des avis Google");
  const data = await res.json();
  return data.result?.reviews || [];
}
