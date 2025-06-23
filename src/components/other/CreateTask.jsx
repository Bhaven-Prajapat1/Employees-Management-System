const CreateTask = () => {
  return (
    <div className="w-full mt-5 bg-[#171616a3] p-4 rounded-md text-white">
      <form className="flex justify-between flex-wrap gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-5 w-full md:w-[45%]">
          {/* Task Title */}
          <div>
            <h2 className="font-semibold text-lg mb-1 px-2">Task Title</h2>
            <input
              className="w-full border border-gray-600 bg-transparent text-white placeholder:text-gray-400 px-5 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          {/* Date */}
          <div>
            <h2 className="font-semibold text-lg mb-1 px-2">Date</h2>
            <input
              className="w-full border border-gray-600 bg-transparent text-white px-5 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
            />
          </div>

          {/* Assign To */}
          <div>
            <h2 className="font-semibold text-lg mb-1 px-2">Assign To</h2>
            <input
              className="w-full border border-gray-600 bg-transparent text-white placeholder:text-gray-400 px-5 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Task assigning"
            />
          </div>

          {/* Category */}
          <div>
            <h2 className="font-semibold text-lg mb-1 px-2">Category</h2>
            <input
              className="w-full border border-gray-600 bg-transparent text-white placeholder:text-gray-400 px-5 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Design, Development, etc..."
            />
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="w-full md:w-[50%]">
          <h2 className="font-semibold text-lg mb-1 px-2">Description</h2>
          <textarea
            className="w-full min-h-[240px] border border-gray-600 bg-transparent text-white placeholder:text-gray-400 px-5 py-3 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Detailed description (Max 500 words)"
          ></textarea>

          <input
            className="w-full py-3 rounded-md font-semibold mt-5 bg-emerald-500 hover:bg-emerald-600 transition"
            type="submit"
            value="Create Task"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
