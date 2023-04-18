import useSWR from "swr";
import { fetcherGet } from "./fetchers";

export const useCommunities = () => {
  const { data, error, isLoading } = useSWR({ url: "/communities" }, fetcherGet, { refreshInterval: 1 });

  return {
    communities: data,
    errorCommunities: error,
    isLoadingCommunities: isLoading,
  };
};
