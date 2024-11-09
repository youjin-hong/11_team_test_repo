import ky from "ky";
import { PortfolioApiResType } from "../types/api-types/PortfolioType";
const apiUrl = import.meta.env.VITE_SERVER_URL;

export const getPortfolios = async (searchParam: string) => {
  try {
    const response = await ky.get(`${apiUrl}/portfolios/search?${searchParam}`);
    const result: PortfolioApiResType = await response.json();

    if (result.success) return { pagination: result.pagination, data: result.data };
    else return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
