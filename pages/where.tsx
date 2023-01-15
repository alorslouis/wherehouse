import { NextPage } from "next";
import { Children, useState } from "react";
import { createPortal } from "react-dom";

const Where: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const [activeShelf, setActiveShelf] = useState<number[]>([2, 3, 2]);

  return (
    <div className="container text-center mx-auto">
      <div className="flex flex-col">
        <ul className="mx-auto flex gap-4 my-4">
          {items &&
            items.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-4">
                  <p className="text-xl font-bold text-center ">{item}</p>
                  <button
                    className="ml-auto"
                    onClick={() =>
                      setItems([...items.filter((f) => f !== item)])
                    }
                  >
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
                  </button>
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
            if (newItem) {
              setItems([...items, newItem]);
              setNewItem("");
            }
          }}
        >
          +
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
            <div className="flex w-1/2">HQ</div>
            <div className="flex ml-auto p-4 border-2 rounded-l-lg">as</div>
          </div>

          <div id="2-1" className="flex h-6">
            <div className="flex w-1/3">daniel</div>
            <div className="flex grow">
              <div id="2-1-1" className="flex w-1/2 border-2">
                <ShelfWrapper room={1} row={1} shelf={1} items={items} />
              </div>
              <div className="flex w-1/2 border-2"></div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal h-screen">
        <div className="modal-box w-11/12 max-w-5xl h-screen flex flex-col">
          <h3 className="text-xl my-4">shelf: 1 room: 1 </h3>
          <div className="flex flex-col grow border-2 justify-evenly  rounded-lg">
            {ShelvesContent[0].items.map((item, index) => {
              return (
                <div className="flex justify-evenly border-2 grow items-center">
                  {item.map((f) => {
                    return (
                      <div className={`${items.includes(f) && "text-red-500"}`}>
                        {f}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Done
            </label>
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
  const ff = ShelvesContent.filter(
    (e) => e.room === room && e.row === row && e.shelf === shelf
  );
  const [shelfItems, setShelfItems] = useState([...ff[0].items].flat());
  return (
    <>
      {shelfItems.map((item, index) => {
        if (items.includes(item)) {
          return (
            <label
              htmlFor="my-modal-5"
              className="flex gap-1 grow flex-wrap"
              // onClick={() => alert("ff")}
            >
              <div
                className="flex-grow my-auto text-xs cursor-pointer text-red-400"
                key={index}
              >
                {item}
                {/* <PortalExample /> */}
              </div>
            </label>
          );
        }
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
    items: [["1230", "1440", "8230", "1211"]],
  },
];

function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

function ModalContent({ onClose }: { onClose: any }) {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Where;
