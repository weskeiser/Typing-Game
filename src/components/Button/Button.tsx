const Button = ({ buttonRef, ...rest }) => {
  return (
    <button ref={buttonRef} {...rest}>
      {rest.value}
    </button>
  );
};

export default Button;
