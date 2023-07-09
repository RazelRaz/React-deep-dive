

const Clock = ({ locale }) => {
    let cities = ["Dhaka", "Pune", "Lahore", "Sydney"];
    return (
        <div>
            <p>current time: {new Date().toLocaleTimeString(locale)}</p>
            <ul>
                {
                    cities.map((city, key) => {
                        return <li key={key}>{city}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Clock;