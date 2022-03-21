import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(value);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="Controlled input"
      />
      <input type="text" ref={inputRef} placeholder="Uncontrolled input" />
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>click</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: "200px", height: 200, background: "red" }}
      />
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 10,
        }}
      />
    </div>
  );
};

export default EventsExample;
