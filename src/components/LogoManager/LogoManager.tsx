import BaseLogo from "../../assets/logo/Logo";
import { SourceProp } from "../../types/Source";

const ICON_MAP = {
  baseLogo: BaseLogo,
};

type LogoProp = { source: keyof typeof ICON_MAP } & SourceProp;
const Logo = ({ source, height, width }: LogoProp) => {
  const Source = ICON_MAP[source];

  return <Source height={height} width={width} primary={""} />;
};

export default Logo;
