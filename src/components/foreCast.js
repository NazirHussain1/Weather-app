function Forecast({ data }) {
  const daily = data.filter((item, index) => index % 8 === 0); // 1 per day

  return (
    <div className="forecast mt-4">
      <h3 className="text-center mb-3">5-Day Forecast</h3>
      <table className="table table-bordered text-center">
        <thead className="table-primary">
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {daily.map((day, i) => (
            <tr key={i}>
              <td>{day.dt_txt.split(" ")[0]}</td>
              <td>{day.main.temp.toFixed(1)}</td>
              <td className="text-capitalize">{day.weather[0].description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Forecast;
