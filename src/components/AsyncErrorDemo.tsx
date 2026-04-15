import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { CloudOff, Loader2 } from "lucide-react";

export function AsyncErrorDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const fetchFakeData = async () => {
    setIsLoading(true);
    try {
      // Simulate a network request that takes 1 second then fails
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("🌐 Network Error: Failed to fetch data from the server. The endpoint might be down.");
    } catch (error) {
      // Catch the async error and delegate it to the Error Boundary
      showBoundary(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-gray-600 text-sm">
        Errors in asynchronous code (like <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">fetch</code> or <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">setTimeout</code>) are also ignored by standard boundaries. We can catch them and use <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">showBoundary</code> to handle them gracefully.
      </p>
      <button
        onClick={fetchFakeData}
        disabled={isLoading}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white text-sm font-medium rounded-lg transition-colors"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <CloudOff className="w-4 h-4 text-blue-400" />
        )}
        {isLoading ? "Fetching..." : "Trigger Async Error"}
      </button>
    </div>
  );
}
