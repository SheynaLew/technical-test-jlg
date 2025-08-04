import "./BasicButton.css";

export default function BasicButton({ text, onBtnClick, width }) {
  const onHandleClick = () => {
    onBtnClick();
  };
  return (
    <button
      className="basic-button"
      onClick={onHandleClick}
      style={{ width: width }}
    >
      {text}
    </button>
  );
}
