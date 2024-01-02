import CardWrapper from "@/components/auth/CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial={true}
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
