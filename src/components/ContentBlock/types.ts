import { FadeProps } from "react-awesome-reveal";

export interface ContentBlockProps {
  content: string;
  id: string;
  fadeDirection: FadeProps["direction"];
}
