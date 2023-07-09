

const Header = () => {
    let marks = 98
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
            {(
                () => {
                    if(marks >= 80 && marks < 100){
                        return <h2>A +</h2>
                    }
                }
            )()}
            
        </div>
    );
};

export default Header;