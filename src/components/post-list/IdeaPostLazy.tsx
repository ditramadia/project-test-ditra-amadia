const IdeaPost = () => {
  return (
    <div className="bg-neutral-100 rounded-lg overflow-hidden flex flex-col shadow-lg shadow-shadow">
      <div className="relative w-full h-48 bg-border overflow-hidden">
      </div>

      <div className="p-3 lg:p-5">
        <div className="w-24 h-4 bg-border rounded-md"></div>
        <div className="w-full h-6 mt-2 bg-border rounded-md"></div>
        <div className="w-full h-6 mt-1 bg-border rounded-md"></div>
        <div className="w-1/2 h-6 mt-1 bg-border rounded-md"></div>
      </div>
    </div>
  );
};

export default IdeaPost;