

const Demo = () => {
    let marks = 80;
    return (
        <div>
            <h1>Im Demo</h1>
            {
                marks > 80 ? <h2>A Grade</h2> : <p>Below 80</p>
            }
        </div>
    );
};

export default Demo;