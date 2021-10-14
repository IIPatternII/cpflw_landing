const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/confirm"],
    exact: true,
    component: "ConfirmEmailPage",
  },
  {
    path: ["/privacy"],
    exact: true,
    component: "PrivacyPolicyPage",
  },
  {
    path: ["/terms"],
    exact: true,
    component: "TermsOfServicePage",
  },
];

export default routes;
