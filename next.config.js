module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/user/login",
        destination: "https://e60c-103-4-220-252.ngrok-free.app/api/user/login",
      },
      {
        source: "/api/user/signup",
        destination: "https://e60c-103-4-220-252.ngrok-free.app/api/user/signup",
      },
      {
        source: "/api/user/bookevent",
        destination: "https://e60c-103-4-220-252.ngrok-free.app/api/user/bookevent",
      },
      {
        source: "/api/user/myevents",
        destination: "https://e60c-103-4-220-252.ngrok-free.app/api/user/myevents",
      },
      {
        source: "/api/event/getevents",
        destination: "https://e60c-103-4-220-252.ngrok-free.app/api/event/getevents",
      }
    ];
  };
  return {
    rewrites,
  };
};