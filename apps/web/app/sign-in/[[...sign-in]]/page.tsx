import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
