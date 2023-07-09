

const Clock = ({ locale }) => {
    return (
        <div>
            <p>current time: {new Date().toLocaleTimeString(locale)}</p>
        </div>
    );
};

export default Clock;