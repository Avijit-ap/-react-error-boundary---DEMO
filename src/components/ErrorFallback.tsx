import { FallbackProps } from "react-error-boundary";
import { AlertTriangle, RefreshCw } from "lucide-react";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div
      role="alert"
      className="p-6 bg-red-50/50 border border-red-200 rounded-xl text-red-900 shadow-sm flex flex-col items-start gap-4"
    >
      <div className="flex items-center gap-2 text-red-600 font-semibold">
        <AlertTriangle className="w-5 h-5" />
        <h2 className="text-lg">Something went wrong</h2>
      </div>
      
      <div className="w-full bg-white/60 border border-red-100 rounded-lg p-4 overflow-auto">
        <pre className="text-sm font-mono text-red-800 whitespace-pre-wrap break-words">
          {error instanceof Error ? error.message : String(error)}
        </pre>
      </div>

      <button
        onClick={resetErrorBoundary}
        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
      >
        <RefreshCw className="w-4 h-4" />
        Try again
      </button>
    </div>
  );
}
