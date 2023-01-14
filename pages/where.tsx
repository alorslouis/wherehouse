import { NextPage } from "next";
import { Children, useState } from "react";

const Where: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  return (
    <div className="container text-center mx-auto">
      test
      <div className="flex flex-col">
        <ul className="mx-auto my-4">
          {items &&
            items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-4"
                  onClick={() => setItems([...items.filter((f) => f !== item)])}
                >
                  <p className="text-xl font-bold text-center ">{item}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="ml-auto"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                  {/* <p className="mr-auto">f</p> */}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="p-2 m-4 flex gap-4 justify-center mx-auto">
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          className="rounded-md p-2"
        />
        <button
          onClick={() => {
            setItems([...items, newItem]);
            setNewItem("");
          }}
        >
          add
        </button>
      </div>
      {/* room display */}
      <div className="w-4/5 border-2 rounded-lg border-white flex flex-col grow h-screen mx-auto">
        <h3>room1</h3>
        <div className="w-1/2 border-2 rounded-lg border-white flex flex-col my-auto h-1/2 mx-auto"></div>
        <h3>room2</h3>
        <div className="w-1/2 border-2 rounded-lg border-white flex flex-col my-auto h-1/2 mx-auto">
          <div className="grow">f</div>
          <div className="flex ml-auto p-4 border-2 rounded-l-lg">as</div>
          <div
            id="back wall"
            className={`${
              items?.includes("back wall") && `border-red-500`
            } flex border-2`}
          >
            <div className="flex grow">
              <ShelfWrapper room={1} row={1} shelf={1} />
            </div>
            <div className="w-1/3 flex">f</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShelfWrapper = ({
  room,
  row,
  shelf,
  items,
}: {
  room: number;
  row: number;
  shelf: number;
  items: string[];
}) => {
  const ff = ShelvesContent.find(
    (e) => e.room === room && e.row === row && e.shelf === shelf
  );
  const [activeItems, setActiveItems] = useState([...ff?.items]);
  return (
    <>
      {activeItems.map((item, index) => {
        if (items.includes(item?.toString())) {
          return (
            <div key={index} className={`flex mx-2`}>
              {item}
            </div>
          );
        }
      })}
    </>
  );
};

const ShelvesContent = [
  { room: 1, row: 1, shelf: 1, items: [1230, 1440, 8230, 1211] },
  { room: 2, row: 3, shelf: 2, items: [1230, 1440, 8230, 1211] },
];

export default Where;
