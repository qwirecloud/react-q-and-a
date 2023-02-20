import { useEffect, useState } from "react";
import { BulkActionsItem } from "./BulkActionsItem";

export function BulkActionsPage() {
  const [items, setItems] = useState([]);
  const [itemsSelected, setItemsSelected] = useState(0);

  useEffect(() => {
    const values = Array.from({ length: 5000 }, (_, index) => ({
      id: index,
      title: `Task ${index}`,
      description: `Description of Task ${index}`,
      dueDate: "2023-03-01T00:00:00.000Z",
      assignedTo: ["John Doe", "Jane Smith"],
      selected: false,
    }));
    setItems(values);
  }, []);

  useEffect(() => {
    const selectedAmount = items.filter((item) => item.selected).length;
    setItemsSelected(selectedAmount);
  }, [items, itemsSelected]);

  const handleToggleSelect = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleToggleSelectAll = () => {
    const selected = itemsSelected > 0;
    const newItems = items.map((item) => ({ ...item, selected: !selected }));
    setItems(newItems);
  };

  return (
    <div className="p-4">
      <header>
        <h1 className="mb-8">Bulk Actions</h1>
      </header>
      <p className="text-gray-800 text-sm my-4">{`${itemsSelected} items selected.`}</p>
      <div className="space-x-2 font-semibold mb-4">
        <input
          type="checkbox"
          name="select-all"
          checked={itemsSelected > 0}
          onChange={handleToggleSelectAll}
        />
        <label>Select All</label>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <BulkActionsItem
            key={item.id}
            item={item}
            toggleSelect={handleToggleSelect}
          />
        ))}
      </ul>
    </div>
  );
}
