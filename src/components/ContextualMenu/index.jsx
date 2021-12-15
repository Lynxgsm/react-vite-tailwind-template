import React from "react";

export const ContextualMenu = ({ coords }) => {
  return (
    <div
      className="absolute"
      style={{
        top: coords.y,
        left: coords.x,
      }}
    >
      <div className="bg-white w-60 border border-gray-300 rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg">
        <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
          <div className="w-8 text-gray-900">
            H<span className="text-xs">1</span>
          </div>
          <div># Heading 1</div>
        </div>
        <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
          <div className="w-8 text-gray-900">
            H<span className="text-xs">2</span>
          </div>
          <div>## Heading 2</div>
        </div>
        <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
          <div className="w-8 text-gray-900">
            H<span className="text-xs">3</span>
          </div>
          <div>### Heading 3</div>
        </div>
        <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
          <div className="w-8 text-gray-900">
            H<span className="text-xs">4</span>
          </div>
          <div>#### Heading 4</div>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
          <div className="w-8 text-gray-900 font-bold">B</div>
          <div>*Bold*</div>
        </div>
        <div className="flex hover:bg-gray-100 py-1 px-2 rounded">
          <div className="w-8 text-gray-900 italic">i</div>
          <div>**Italic**</div>
        </div>
      </div>
    </div>
  );
};
