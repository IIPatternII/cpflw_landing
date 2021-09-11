import { FadeProps } from "react-awesome-reveal";

export interface ContentBlockProps {
  image: string;
  title: string;
  content: string;
  subtext?: string;
  section?: any;
  button?: any;
  t?: any;
  id: string;
  fadeDirection: FadeProps["direction"];
}
