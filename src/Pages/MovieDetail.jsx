import { useLoaderData } from "react-router-dom";
import { getMoviesDetail } from "../services/apiCalls";

export const loader = async ({ params }) => {
  const data = await getMoviesDetail(params.id);
  return { data };
};

const MovieDetail = () => {
  const { data } = useLoaderData();

  return <Card {...data} />;
};

export default MovieDetail;
