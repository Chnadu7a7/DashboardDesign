

const InputWithLabel = ({
  label,
  children,
}) => {
  return (
    <div>
      <label className="dark:text-whiteSecondary text-blackPrimary block text-base font-semibold mb-1">
        {label}
      </label>
      {children}
    </div>
  );
};
export default InputWithLabel;
