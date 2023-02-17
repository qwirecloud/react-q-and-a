const options = { year: "numeric", month: "long", day: "numeric" };

export function BulkActionsItem({ item }) {
  const { title, description, dueDate } = item;

  return (
    <li className="px-2 py-1 hover:bg-gray-100">
      <div>{title}</div>
      <div className="flex justify-between">
        <div className="text-gray-600 text-sm">
          <p>{description}</p>
        </div>
        <div className="text-sm">
          {new Intl.DateTimeFormat("en-US", options).format(new Date(dueDate))}
        </div>
      </div>
    </li>
  );
}
