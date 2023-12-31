export function Logo(props) {
  const { fill = "white" } = props;

  return (
    <svg
      className="w-8"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <g id="SVGRepo_iconCarrier">
        <path
          d="M16 0h208c8.8 0 16 7.2 16 16v208c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V16C0 7.2 7.2 0 16 0zm32 48v144h144V48H48zM288 0h208c8.8 0 16 7.2 16 16v208c0 8.8-7.2 16-16 16H288c-8.8 0-16-7.2-16-16V16c0-8.8 7.2-16 16-16zM16 272h208c8.8 0 16 7.2 16 16v208c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V288c0-8.8 7.2-16 16-16zm32 48v144h144V320H48zM288 272h208c8.8 0 16 7.2 16 16v208c0 8.8-7.2 16-16 16H288c-8.8 0-16-7.2-16-16V288c0-8.8 7.2-16 16-16zm32 48v144h144V320H320z"
          className="fil0"
        ></path>
      </g>
    </svg>
  );
}
