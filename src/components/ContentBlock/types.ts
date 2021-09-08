import { FadeProps } from "react-awesome-reveal";

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: any;
  button?: any;
  t?: any;
  id: string;
  fadeDirection: FadeProps["direction"];
}
