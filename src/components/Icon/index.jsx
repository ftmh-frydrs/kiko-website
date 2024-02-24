import { CiSearch , CiHeart , CiUser} from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { RiMapPinLine } from "react-icons/ri";

const iconComponents = {
  search: CiSearch,
  map: RiMapPinLine,
  user: CiUser,
  heart: CiHeart,
  bag: GiShoppingBag,
};

const Icon = ({ type, size, color }) => {
  const SelectedIcon = iconComponents[type];
  return <SelectedIcon size={size} color={color} />;
};

export default Icon;
