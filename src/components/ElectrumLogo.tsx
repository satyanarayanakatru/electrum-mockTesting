import ElectrumImage from "../assets/electrum_logo.svg";

interface ElectrumLogoProps  {
  width?: number;
  margin?: string | number;
};

const ElectrumLogo = ({ width = 100, margin }: ElectrumLogoProps) => {
  return (
    <>
      <img
        src={ElectrumImage}
        width={width}
        // style={{ margin: margin ? margin : "auto" }}
        alt="Electrum Logo"
      />
    </>
  );
};

export default ElectrumLogo;
