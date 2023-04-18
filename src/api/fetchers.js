import { api } from "./api";

export const fetcherGet = async ({ url }) => await api.get(`${url}`).then((res) => res.data);

export const fetcherPost = async ({ url, data }) => await api.post(`${url}`, data);

export const fetcherDelete = async ({ url, id }) => await api.delete(`${url}/${id}`);

export const fetcherPatch = async ({ url, data }) => await api.patch(`${url}/${data.id}`, data);