
export const Balance = ({ value, isDashboardVisible }) => {
    return (
      <div className="flex">
        {isDashboardVisible ? (
          <div className="text-lg font-bold">Your balance</div>
        ) : null}
        <div className="ml-4 text-lg font-semibold">Rs {value}</div>
      </div>
    );
  };
