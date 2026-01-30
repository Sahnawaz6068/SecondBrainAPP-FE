const FallbackLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-black animate-spin" />
        </div>
        <p className="text-lg font-medium text-gray-800 mb-1">
          Loading your Second Brain
        </p>

        <p className="text-sm text-gray-500">
          Setting things up for you…
        </p>
      </div>
    </div>
  );
};

export default FallbackLoader;
