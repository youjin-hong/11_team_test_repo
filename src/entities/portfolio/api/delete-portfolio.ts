import api from "./index";
import { PortfolioDeleteResType } from "../types/api-types/PortfolioType";

export const deletePortfolio = async (
  portfolioId: string
): Promise<PortfolioDeleteResType> => {
  try {
    const response = await api
      .delete(`portfolios/${portfolioId}`)
      .json<PortfolioDeleteResType>();
    return response;
  } catch (error) {
    console.error("포트폴리오 삭제 실패:", error);
    return {
      success: false,
      message: "포트폴리오 삭제에 실패했습니다.",
    };
  }
};
