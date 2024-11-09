import ky from "ky";
import { PortfolioResType } from "../types/api-types/PortfolioType";

const apiUrl = import.meta.env.VITE_SERVER_URL;

export const getPortfolio = async (portfolioId: string): Promise<PortfolioResType> => {
  try {
    const response = await ky.get(`${apiUrl}/portfolios/${portfolioId}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
