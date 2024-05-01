import { Link } from "react-router-dom";
import { useEffect } from "react";
const user = {
  name: "Ashraf Mohammadi",
  imageUrl: "../../../prof.jpg",
  imageSize: 90,
};
export function Profile() {
  useEffect(() => {
    console.log("Hello");

    return () => {
      console.log("Good-bye");
    };
  }, []);

  return (
    <>
      <Link to="/">Home</Link>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
