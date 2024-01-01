import { useState } from "react";

function App() {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const nosubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, desc }]);
    console.log(setMainTask);
    settask("");
    setdesc("");
    console.log(setdesc);
  };

  const deleteTask = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let rendertask = (
    <h2 className="py-5 text-center text-2xl uppercase font-extrabold">
      No Task Entered!!!!
    </h2>
  );

  if (mainTask.length > 0) {
    rendertask = mainTask.map((t, i) => {
      return (
        <li key={i} className="my-2">
          <div className="flex justify-between text-xl">
            <h5 className="font-semibold capitalize ">{t.task}</h5>
            <h6 className="font-semibold capitalize ">{t.desc}</h6>
            <button
              onClick={() => {
                deleteTask(i);
              }}
              className="bg-red-500 font-semibold text-sm py-1 px-2 rounded-md "
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <div className="w-full h-screen text-black px-12 py-5" >
        <h1 className="text-5xl text-center font-bold ">
          Here's Your ToDo List
        </h1>

        <form className="py-8 flex flex-col gap-5 " onSubmit={nosubmit}>
          <input
            type="text"
            className="w-[50%] border-zinc-800 border-4 rounded-md text-2xl text-black py-1 px-2"
            placeholder="Enter Your Task"
            value={task}
            onChange={(e) => {
              settask(e.target.value);
            }}
          />

          <input
            type="textarea"
            className="w-[50%] border-zinc-800 border-4 rounded-md text-2xl text-black py-1 px-2"
            placeholder="Enter Task Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />

          <button className="w-[fit-content] bg-black py-1 px-2 border-2 text-white border-zinc-100 rounded-md">
            Add Task
          </button>
        </form>
        <hr className="border-2 border-zinc-800 my-2 rounded-md" />
        <div>
          <p className="text-center text-black font-bold capitalize underline">
            Your task Listed here
          </p>
          <div className="bg-slate-400 rounded-md py-2">
            <div className="flex justify-between py-1 px-2 font-semibold text-lg underline text-zinc-100">
              <h1>Task</h1>
              <h1>Task Description</h1>
              <h1>Delete Task</h1>
            </div>
            <ul className="py-1 px-2 ">{rendertask}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
