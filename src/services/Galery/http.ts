import { fetchApi } from "@/api";
import { handleGalery, handleLoading } from "@/context/redux/action";

export const getGalery = async () => {
  const result = await fetchApi({
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_API,
    url: "api/v1/images",
  });
  handleGalery(result.data.data.feed.entry);
  handleLoading(false);
};

export const getGaleryByTag = async (tag: string) => {
  const result = await fetchApi({
    method: "GET",
    baseURL: process.env.NEXT_PUBLIC_API,
    url: `api/v1/images/tags?tag=${tag}`,
  });
  handleGalery(result.data.data.feed.entry);
  handleLoading(false);
};
