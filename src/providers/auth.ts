export const sendLoggingRequest = (
  userName: string,
  password: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    intelligentCredentialsCheck(userName, password)
      ? resolve(true)
      : reject("Get outta here, stranger!");
  });
};

function intelligentCredentialsCheck(
  userName: string,
  password: string
): boolean {
  return userName === "admin" && password === "admin";
}
