import React from "react";

export const useFetch = () => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const request = React.useCallback(
    async (url: string, options: object = {}) => {
      let resp;
      let json;

      try {
        setLoading(true);
        resp = await fetch(url, options);
        json = await resp.json();

        console.log(!resp.ok)
        if (!resp.ok) throw new Error(json.message);
      } catch (e) {
        json = null;
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setData(json);
        setLoading(false);
      }

      return resp as Response;
    },
    []
  );

  return { data, loading, error, request };
};
