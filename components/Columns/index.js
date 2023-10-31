const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
}) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  console.log('COLORS: ', textColorStyle);
  console.log('COLORS2: ', backgroundColorStyle);

  return (
    <div
      className="my-10"
      style={{ ...textColorStyle, ...backgroundColorStyle }}
    >
      <div
        className={`max-w-5x mx-auto ${
          isStackedOnMobile ? 'block md:flex' : 'flex'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Columns;
