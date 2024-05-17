export const noBody = () => {
  return Response.json(
    { error: Errors.NoBody, success: false },
    {
      status: 400,
    }
  );
};

export const invalidBody = () => {
  return Response.json(
    { error: Errors.InvalidBody, success: false },
    {
      status: 400,
    }
  );
};

export const notAllowed = () => {
  return Response.json(
    { error: Errors.NotAllowed, success: false },
    {
      status: 400,
    }
  );
};

export const notFound = () => {
  return Response.json(
    { error: Errors.NotFound, success: false },
    {
      status: 404,
    }
  );
};

export const success = <T extends any>(data?: T, init?: ResponseInit) => {
  return Response.json(
    {
      success: true,
      data,
    },
    init
  );
};

export enum Errors {
  InvalidBody = "Invalid body!",
  InvalidSecret = "Invalid secret!",
  Limit500 = "Limit must be less than 500!",
  NoBody = "No body provided!",
  NotAllowed = "Not allowed!",
  NotFound = "Not Found!",
  SignWallet = "Please sign in your wallet.",
  SomethingWentWrong = "Something went wrong!",
  SomethingWrongWithPortal = "Something went wrong with the portal!",
  Suspended = "Your profile has been suspended!",
}
