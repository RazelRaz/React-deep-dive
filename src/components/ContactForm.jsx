

const ContactForm = () => {

    const postFormData = (event) => {
        event.preventDefault()
        alert('Form Submitted')
    }

    return (
        <div>
            <form action="" onSubmit={postFormData}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;