const Contact = () => {
    return (
        <>

            <h2>Submit the form below to contact me</h2>

            <form method="post" id="contact">

                <label htmlFor="Name"> Name </label>
                <br />
                <input type="text" name="Name" required/>
                    <br />

                    <label htmlFor="Message"> Message </label>
                    <br />
                    <textarea rows="4" cols="50"></textarea>
                    <br />


                    <input type="submit" value="Submit"/>


                    </form>

                </>
                )
}

                export default Contact;