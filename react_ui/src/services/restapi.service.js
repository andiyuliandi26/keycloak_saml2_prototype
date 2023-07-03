import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_DJANGO_REST_API;

export const getUserList = async () => {
    const config = {
      url: `${apiServerUrl}/users/`,
      method: "GET",
      headers: {
            "Content-Type": "application/json"
        },
        //crossOriginIsolated: false,
        withCredentials: false
    };
  
    const { data, error } = await callExternalApi({ config });
  
    return {
      data: data || null,
      error,
    };
  };
  