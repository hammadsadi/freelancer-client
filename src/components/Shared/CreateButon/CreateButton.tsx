import { Link } from "react-router-dom";

const CreateButton = ({ title, dLink }: { title: string; dLink: string }) => {
  return (
    <>
      <button className="bg-rose-500 text-white py-1 px-3 rounded">
        <Link to={dLink} className="text-base">
          {title}
        </Link>
      </button>
    </>
  );
};

export default CreateButton;
