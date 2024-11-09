import LikesAndViews from "../LikesAndViews/LikesAndViews";
import {
  Card,
  ImgCon,
  ThumbnailImg,
  CardContent,
  TitleBox,
  Profile,
  ProfileImg,
  Name,
} from "./PortfolioCard.style";

interface PortfolioCardProps {
  portfolio_id: string;
  title: string;
  thumbnailImg: string;
  profileImg: string;
  userName: string;
  views: number;
  likes: number;
  onClick: (portfolio_id: string) => void;
}

import noImage from "../../assets/no_image.svg";

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  portfolio_id,
  title,
  thumbnailImg,
  profileImg,
  userName,
  views,
  likes,
  onClick,
}) => {
  return (
    <Card>
      <ImgCon>
        <ThumbnailImg src={thumbnailImg || noImage} alt="Thumbnail" />
        <TitleBox className="title-box" onClick={() => onClick(portfolio_id)}>
          <p>{title}</p>
        </TitleBox>
      </ImgCon>
      <CardContent>
        <Profile>
          <ProfileImg>
            <img src={profileImg} alt="profile" />
          </ProfileImg>
          <Name>{userName}</Name>
        </Profile>
        <LikesAndViews views={views} likes={likes} />
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
