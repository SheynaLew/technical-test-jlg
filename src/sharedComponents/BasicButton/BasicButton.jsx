export default function BasicButton({ text, onBtnClick }) {
  const onHandleClick = () => {
    onBtnClick();
  };
  return (
    <button className="basic-button" onClick={onHandleClick}>
      {text}
    </button>
  );
}
