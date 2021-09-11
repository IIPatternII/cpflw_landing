import { Subtext } from "./styles";
import { CaptureEmailFormProps } from "../types";
import "./convertkitStyles.css"
import ConvertKitForm from 'convertkit-react';


const convertkitConfig = {
  formId: 2587777,
  template: 'minimal',
  emailPlaceholder: 'Enter an email address',
  submitText: 'Notify me!',
  hideName: true
}


const CaptureEmailForm = ({ subtext }: CaptureEmailFormProps) => (
  <>
  {subtext && <Subtext>{subtext}</Subtext>}
  <ConvertKitForm {...convertkitConfig} className='ck-fm'/>
  </>
);

export default CaptureEmailForm;
