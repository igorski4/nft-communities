import useSWR from "swr";
import { fetcherGet } from "./fetchers";

export const useCommunities = () => {
  const { data, error, isLoading, mutate } = useSWR({ url: "/communities" }, fetcherGet);

  return {
    communities: data,
    errorCommunities: error,
    isLoadingCommunities: isLoading,
    mutateCommunities: mutate,
  };
};
