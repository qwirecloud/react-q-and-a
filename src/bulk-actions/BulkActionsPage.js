import { useEffect, useState } from "react";
import { BulkActionsItem } from "./BulkActionsItem";

export function BulkActionsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const values = Array.from({ length: 2000 }, (_, index) => ({
      id: index,
      title: `Task ${index}`,
      description: `Description of Task ${index}`,
      dueDate: "2023-03-01T00:00:00.000Z",
      assignedTo: ["John Doe", "Jane Smith"],
    }));
    setItems(values);
  }, []);

  return (
    <div className="p-4">
      <header>
        <h1 className="mb-8">Bulk Actions</h1>
      </header>
      <main>
        <ul className="space-y-2">
          {items.map((item) => (
            <BulkActionsItem key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}
