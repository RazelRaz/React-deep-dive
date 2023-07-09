

const Demo = ({item}) => {
    let marks = 80;
    return (
        <div>
            <h1>Im Demo</h1>
            {
                marks > 80 ? <h2>A Grade</h2> : <p>Below 80</p>
            }

            <ul>
                <li>Name:{item.name}</li>
                <li>Age:{item.age}</li>
                <li>City:{item.city}</li>
            </ul>
        </div>
    );
};

export default Demo;