const handleSubmit = e =>{
    e.preventDefault();
    console.log(e.target.name);
    console.log('form submitted');
}

const SimpleForm = () => {
    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" name="Submit" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;