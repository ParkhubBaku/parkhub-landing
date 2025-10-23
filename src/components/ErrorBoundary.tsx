// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log to console (and to any external service if you add one later)
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  private copyDetails = () => {
    const { error } = this.state;
    const details = [
      `Message: ${error?.message ?? ''}`,
      `Stack: ${error?.stack ?? ''}`,
      `UserAgent: ${navigator.userAgent}`,
      `URL: ${window.location.href}`,
      `Time: ${new Date().toISOString()}`,
    ].join('\n');

    navigator.clipboard
      .writeText(details)
      .catch(() => {/* noop if clipboard not available */});
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    if (!hasError) return this.props.children;

    const isDev = import.meta.env.MODE === 'development';

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
        <div
          className="w-full max-w-xl text-center p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800"
          role="alert"
          aria-live="assertive"
        >
          <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900 mb-3">
            Something went wrong.
          </h1>

          <p className="dark:text-gray-200 text-gray-700 mb-4">
            {isDev
              ? (error?.message || 'An unexpected error occurred.')
              : 'An unexpected error occurred. Please try refreshing the page.'}
          </p>

          {isDev && error?.stack && (
            <pre className="text-left text-xs sm:text-sm overflow-auto max-h-40 p-3 rounded bg-gray-50 dark:bg-gray-900 dark:text-gray-200 border border-gray-200 dark:border-gray-700 mb-4">
              {error.stack}
            </pre>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#1653ff] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#9b59d6] transition-colors"
            >
              Refresh Page
            </button>

            {isDev && (
              <button
                onClick={this.copyDetails}
                className="border border-[#1653ff] text-gray-900 dark:text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1653ff] hover:text-white transition-colors"
              >
                Copy Details
              </button>
            )}

            <a
              href="mailto:parkhubbaku@gmail.com?subject=ParkHub%20Site%20Error"
              className="underline text-[#1653ff] dark:text-[#9b59d6]"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
