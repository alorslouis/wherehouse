import { NextPage } from "next";
import { Children, useState } from "react";

const Where: NextPage = () => {
  const [items, setItems] = useState<number[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const [activeShelf, setActiveShelf] = useState<number[]>([2, 3, 2]);

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
            if (Number.parseInt(newItem)) {
              setItems([...items, Number.parseInt(newItem)]);
              setNewItem("");
            }
          }}
        >
          add
        </button>
      </div>
      {/* room display */}
      <div className="w-4/5 border-2 rounded-lg border-white flex flex-col md:flex-row gap-8 p-4 grow h-screen mx-auto">
        {/* <h3>room1</h3> */}
        <div className="md:w-1/2 w-full border-2 rounded-lg border-white flex flex-col my-auto h-1/2 mx-auto"></div>
        {/* <h3>room2</h3> */}
        <div className="md:w-1/2 w-full border-2 rounded-lg border-white flex flex-col my-auto h-1/2 mx-auto">
          <div id="2-5" className="flex grow justify-between">
            <div>f</div>
            <div>f</div>
          </div>

          <div className="grow">f</div>

          <div id="2-3" className="flex">
            <div className="flex w-1/2">lew</div>
            <div className="flex ml-auto p-4 border-2 rounded-l-lg">as</div>
          </div>

          <div id="2-2" className="flex">
            <div className="flex w-1/2"> </div>
            <div className="flex ml-auto p-4 border-2 rounded-l-lg">as</div>
          </div>

          <div id="2-1" className="flex h-6">
            <div className="flex w-1/3">daniel</div>
            <div className="flex grow">
              <div className="flex grow border-2">
                <ShelfWrapper room={1} row={1} shelf={1} items={items} />
              </div>
              <div className="flex grow border-2"></div>
            </div>
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
  items: number[];
}) => {
  const ff = ShelvesContent.filter(
    (e) => e.room === room && e.row === row && e.shelf === shelf
  );
  const [activeItems, setActiveItems] = useState([...ff[0].items]);
  return (
    <>
      {activeItems.map((item, index) => {
        item.map((r) => {
          return <div>{r}</div>;
        });
      })}
    </>
  );
};

// rows read l-r, shelves read b-t
const ShelvesContent = [
  {
    room: 1,
    row: 1,
    shelf: 1,
    items: [
      [1230, 1440, 8230, 1211],
      [1230, 1440, 8230, 1211],
    ],
  },
  {
    room: 2,
    row: 3,
    shelf: 2,
    items: [
      [1230, 1440, 8230, 1211],
      [1230, 1440, 8230, 1211],
    ],
  },
];

export default Where;
