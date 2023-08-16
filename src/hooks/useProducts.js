import { fetcher } from "@/utils/api_config";

export const useProduct = () => {
  const { data, isLoading, error } = useSWR("/", fetcher);

  return {
    product: data,
    isLoading,
    error,
  };
};
