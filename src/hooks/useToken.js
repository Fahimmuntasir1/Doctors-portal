import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, seiTolen] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("successfully done", data);
      });
  }, [user]);
  return [token];
};

export default useToken;

