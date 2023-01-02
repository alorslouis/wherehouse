import { NextPage } from "next";
import { useState } from "react";

const Where: NextPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  return (
    <div className="container text-center">
      test
      <div className="flex flex-col">
        <ul>
          {items &&
            items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex"
                  onClick={() => setItems([...items.filter((f) => f !== item)])}
                >
                  <p className="text-xl font-bold text-center mx-auto">
                    {item}
                  </p>
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
          <div id="back wall" className="flex border-2">
            <div className="flex grow">f</div>
            <div className="w-1/3 flex">f</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Where;
