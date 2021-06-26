// declara a tipagem de imagens png
declare module "*.svg" {
    import React from "react";
    import Svg, { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}