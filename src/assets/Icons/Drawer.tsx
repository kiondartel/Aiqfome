import Svg, { Path } from "react-native-svg";
import { SourceProp } from "../../types/Source";

const Drawer = ({ height, width, primary }: SourceProp) => (
  <Svg width={width} height={height} viewBox="0 0 28 24" fill="none">
    <Path
      d="M27.625 3.125C27.8125 3.125 28 3 28 2.75V1.25C28 1.0625 27.8125 0.875 27.625 0.875H0.375C0.125 0.875 0 1.0625 0 1.25V2.75C0 3 0.125 3.125 0.375 3.125H27.625ZM27.625 13.125C27.8125 13.125 28 13 28 12.75V11.25C28 11.0625 27.8125 10.875 27.625 10.875H0.375C0.125 10.875 0 11.0625 0 11.25V12.75C0 13 0.125 13.125 0.375 13.125H27.625ZM27.625 23.125C27.8125 23.125 28 23 28 22.75V21.25C28 21.0625 27.8125 20.875 27.625 20.875H0.375C0.125 20.875 0 21.0625 0 21.25V22.75C0 23 0.125 23.125 0.375 23.125H27.625Z"
      fill={primary}
    />
  </Svg>
);

export default Drawer;
