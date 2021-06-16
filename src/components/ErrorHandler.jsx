const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-handler" role="alert">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

export default ErrorHandler;
