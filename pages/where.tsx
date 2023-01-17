import { NextPage } from "next";
import { Children, useState } from "react";
import { createPortal } from "react-dom";

const Where: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const [activeShelf, setActiveShelf] = useState<number[]>([2, 3, 2]);

  const activeShelfContents = ShelvesContent.find(
    (e) =>
      e.room === activeShelf[0] &&
      e.row === activeShelf[1] &&
      e.shelf === activeShelf[2]
  );

  console.log(activeShelfContents);

  console.log(activeShelf);
  return (
    <div className="container text-center mx-auto">
      <div className="flex flex-col">
        <ul className="mx-auto flex flex-wrap justify-center gap-4 my-4">
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
                    {/* <svg
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
                    </svg> */}
                    –
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
            <div className="flex w-1/3">lew</div>
            <div className="flex grow mx-auto">
              <div className="flex mx-auto p-4 border-2 rounded-t-lg"></div>
              <div className="flex mx-auto p-4 border-2 rounded-t-lg"></div>
            </div>
            <div className="flex ml-auto p-4 border-2 rounded-l-lg"></div>
          </div>

          <div id="2-2" className="flex mb-4">
            <div className="flex w-1/3">HQ</div>
            <div className="flex grow mx-auto">
              <div
                className="flex mx-auto w-1/6 p-4 border-2 rounded-b-lg"
                onClick={() => setActiveShelf([1, 3, 1])}
              >
                <ShelfWrapper room={1} row={3} shelf={1} items={items} />
              </div>
              <div className="flex mx-auto p-4 border-2 rounded-b-lg"></div>
            </div>
            <div className="flex ml-auto p-4 border-2 rounded-l-lg"></div>
          </div>

          <div id="2-1" className="flex h-6">
            <div className="flex w-1/3">daniel</div>
            <div className="flex grow">
              <div
                id="2-1-1"
                className="flex w-1/2 border-2"
                onClick={() => setActiveShelf([1, 1, 1])}
              >
                <ShelfWrapper room={1} row={1} shelf={1} items={items} />
              </div>
              <div
                className="flex w-1/2 border-2"
                onClick={() => setActiveShelf([1, 1, 2])}
              >
                <ShelfWrapper room={1} row={1} shelf={2} items={items} />
              </div>
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
            {activeShelfContents?.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-evenly border-2 grow items-center"
                >
                  {item.map((f) => {
                    return (
                      <div
                        key={f}
                        className={`${items.includes(f) && "text-red-500"}`}
                      >
                        {f}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <h3 className="font-bold text-lg">
            {activeShelf}
            {/* Congratulations random Internet user! */}
          </h3>
          <p className="py-4">
            {/* You've been selected for a chance to get one year of subscription to
            use Wikipedia for free! */}
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

  const includedItems = shelfItems.filter((e) => items.includes(e));
  return (
    <>
      {includedItems.length <= 1 ? (
        includedItems.map((item, index) => {
          return (
            <label
              htmlFor="my-modal-5"
              key={index}
              className="flex items-center grow-0 flex-wrap"
              // onClick={() => set}
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
        })
      ) : (
        <label
          htmlFor="my-modal-5"
          className="flex mx-2 gap-2 grow-0 flex-wrap text-xs cursor-pointer text-red-400"
        >
          ({includedItems.length})
        </label>
      )}
    </>
  );
};

// rows read l-r, shelves read t-b
const ShelvesContent = [
  {
    room: 1,
    row: 1,
    shelf: 1,
    items: [
      ["1758", "1759", "1761", "1762", "1765", "1771"],
      ["1865", "1973", "1976", "2001", "2236"],
      ["2397", "2404", "2479", "2481", "2484"],
      ["2621", "2622", "2671", "2679", "2726"],
      ["2972", "2983", "3016", "3062", "3065", "3066"],
    ],
  },
  {
    room: 1,
    row: 1,
    shelf: 2,
    items: [
      ["1205", "1626", "1725", "1748", "1757"],
      ["1772", "1857", "1859", "1862", "1863"],
      ["2278", "2296", "2323", "2358", "2395"],
      ["2512", "2514", "2518", "2521", "2544", "2601"],
      ["2734", "2738", "2795", "2834", "2904", "2953"],
      ["3067", "3068", "3076"],
    ],
  },
  {
    room: 1,
    row: 3,
    shelf: 1,
    items: [
      ["1081", "1090", "1091", "1266", "1329", "1330", "1349", "1375"],
      ["1470", "1471", "1485", "1486", "1533", "1673", "1712", "1720"],
      ["1934", "2035", "2119", "2250", "2260", "2325", "2336", "2367", "2382"],
      [
        "2417",
        "2490",
        "2491",
        "2382",
        "3019",
        "2571",
        "2572",
        "2582",
        "2383",
        "2584",
        "2587",
      ],
      ["2588", "2606", "2654", "2736", "2749", "2758-2", "2798", "2587"],
      [
        "3051",
        "2250",
        "2815",
        "2994",
        "2993",
        "2871",
        "2938",
        "2948",
        "2968",
        "2970",
        "3001",
        "2443",
      ],
    ],
  },
];

// function PortalExample() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>
//         Show modal using a portal
//       </button>
//       {showModal &&
//         createPortal(
//           <ModalContent onClose={() => setShowModal(false)} />,
//           document.body
//         )}
//     </>
//   );
// }

// function ModalContent({ onClose }: { onClose: any }) {
//   return (
//     <div className="modal">
//       <div>Im a modal dialog</div>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// }

export default Where;
