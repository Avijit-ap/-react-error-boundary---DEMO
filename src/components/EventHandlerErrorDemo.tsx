import { useErrorBoundary } from "react-error-boundary";
import { Zap } from "lucide-react";

export function EventHandlerErrorDemo() {
  const { showBoundary } = useErrorBoundary();

  const handleClick = () => {
    try {
      // Simulating an error in an event handler.
      // Standard React Error Boundaries DO NOT catch event handler errors.
      throw new Error("⚡ Zap! An error occurred inside an event handler.");
    } catch (error) {
      // We use the showBoundary function from useErrorBoundary to manually
      // push this error into the nearest Error Boundary.
      showBoundary(error);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-gray-600 text-sm">
        Standard Error Boundaries don't catch errors inside event handlers. By using the <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">useErrorBoundary</code> hook, we can catch the error and pass it to the boundary manually.
      </p>
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
      >
        <Zap className="w-4 h-4 text-yellow-400" />
        Trigger Event Handler Error
      </button>
    </div>
  );
}
