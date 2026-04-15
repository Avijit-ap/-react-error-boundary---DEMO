import { useState } from "react";
import { Bug } from "lucide-react";

export function RenderErrorDemo() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    // This error is thrown during the render phase.
    // Standard React Error Boundaries catch these automatically.
    throw new Error("💥 Crash! A rendering error occurred in RenderErrorDemo.");
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-gray-600 text-sm">
        This component will throw an error directly in its render function. React Error Boundaries are designed to catch exactly this type of error automatically.
      </p>
      <button
        onClick={() => setShouldCrash(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
      >
        <Bug className="w-4 h-4 text-red-400" />
        Trigger Render Error
      </button>
    </div>
  );
}
