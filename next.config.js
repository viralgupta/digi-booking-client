module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/user/login",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/user/login",
      },
      {
        source: "/api/user/signup",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/user/signup",
      },
      {
        source: "/api/user/bookevent",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/user/bookevent",
      },
      {
        source: "/api/user/myevents",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/user/myevents",
      },
      {
        source: "/api/event/getevents",
        destination: "https://2e8f-14-96-13-220.ngrok-free.app/api/event/getevents",
      }
    ];
  };
  return {
    rewrites,
  };
};