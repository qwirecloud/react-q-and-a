export const Button = ({ description, action, type }) => {
  return (
    <button
      className="rounded-md py-2 px-4 bg-cyan-800 text-white"
      onClick={action}
      type={type}
    >
      {description}
    </button>
  );
};
