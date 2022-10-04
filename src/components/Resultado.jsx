import useClima from "../hooks/useClima";
const Resultado = () => {
  const { resultado } = useClima();

  const { name, main } = resultado;
  const { temp, temp_max, temp_min, humidity } = main;
  const kelvin = 273.15
  return (
    <div className="contenedor">
      <h2>El clima de {name} es:</h2>
      <p>La temperatura es de {parseInt(temp - kelvin)}°C</p>
      <p>La temperatura máxima de hoy es {parseInt(temp_max - kelvin)}°C</p>
      <p>La temperatura minima de hoy es {parseInt(temp_min - kelvin)}°C</p>
      <p>La humedad es de {humidity} %</p>
    </div>
  );
};

export default Resultado;
