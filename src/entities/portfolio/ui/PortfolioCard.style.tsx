import styled from "@emotion/styled";

export const Card = styled.div`
  min-width: 200px;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.DEFAULT};
`;

export const ImgCon = styled.div`
  height: 90%;
  position: relative;

  :hover {
    .title-box {
      visibility: visible;
    }
  }
`;

export const TitleBox = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.DEFAULT};
  padding: 1.5rem 1rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(233, 233, 233, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  visibility: hidden;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.THICK};
  font-size: 15px;
  cursor: pointer;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS.MAIN_BG};
    letter-spacing: -0.25px;
    font-weight: 700;
    z-index: 10;
  }

  ::after {
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 5rem;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.DEFAULT};
  }
`;

export const ThumbnailImg = styled.img`
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.DEFAULT};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 3px 1px;
  width: 100%;
  height: 10%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
`;

export const ProfileImg = styled.div`
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.CIRCLE};
  width: 1.7rem;
  height: 1.7rem;

  > img {
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.CIRCLE};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.THICK};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.MAIN_BLACK};

  max-width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 600px) {
    max-width: 100px;
  }
`;
