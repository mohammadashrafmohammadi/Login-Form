import {Link} from "react-router-dom"
const user = {
  name: "Ashraf Mohammadi",
  imageUrl: "../../public/ashraf.jpg",
  imageSize: 90,
};
export function Profile() {
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
