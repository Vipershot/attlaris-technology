export const InputMain = ({
  type,
  placeHolder,
  name,
  style,
  value,
  id,
  onChange,
  disabled,
}) => {
  return (
    <input
      style={{
        width: 245,
        height: 25,
        padding: 5,
        border: "1px solid #02020278",
        borderRadius: 6,
      }}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};
