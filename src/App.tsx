import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { RenderErrorDemo } from "./components/RenderErrorDemo";
import { EventHandlerErrorDemo } from "./components/EventHandlerErrorDemo";
import { AsyncErrorDemo } from "./components/AsyncErrorDemo";
import { ShieldAlert } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-2xl mb-2">
            <ShieldAlert className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            React Error Boundary Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A practical guide to handling errors gracefully in React applications using the <code className="bg-gray-200 px-1.5 py-0.5 rounded text-gray-800 text-sm">react-error-boundary</code> package.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Example 1: Render Error */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b border-gray-100 pb-3">1. Render Phase Errors</h2>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <RenderErrorDemo />
            </ErrorBoundary>
          </section>

          {/* Example 2: Event Handler Error */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <h2 className="text-xl font-semibold border-b border-gray-100 pb-3">2. Event Handler Errors</h2>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <EventHandlerErrorDemo />
            </ErrorBoundary>
          </section>

          {/* Example 3: Async Error */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 md:col-span-2">
            <h2 className="text-xl font-semibold border-b border-gray-100 pb-3">3. Asynchronous Errors</h2>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <AsyncErrorDemo />
            </ErrorBoundary>
          </section>

        </div>

        {/* Footer info */}
        <footer className="pt-8 text-sm text-gray-500 border-t border-gray-200">
          <p>
            Notice how each error is contained within its own card. The rest of the application remains fully functional! 
            Clicking "Try again" resets the state of that specific boundary.
          </p>
        </footer>

      </div>
    </div>
  );
}
