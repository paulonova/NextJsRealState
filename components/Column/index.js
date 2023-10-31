const Column = ({ children, width, textColor, backgroundColor }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };

  return (
    <div
      style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }}
      className="px-2 py-5"
    >
      {children}
    </div>
  );
};

export default Column;

/**
 * I´m checking the with in case the user have been set it from Wordpress,
 * if the width is set, so we use it otherwise I will set the width as a "flex-1"
 * to fill all available space.
 */
